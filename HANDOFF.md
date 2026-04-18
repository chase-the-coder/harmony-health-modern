# Handoff Setup Guide — Chase + Harmony Health Team

This is the one-time setup. Work through it on a Zoom call together. Budget 45 minutes. **Chase drives the screen for the Terminal-y parts. The team member watches, takes notes, and does the account-creation steps on their own Mac.**

After this, the team member never touches Terminal again. They only open VS Code and chat with Claude.

---

## Prerequisites (before the call)

| Who | What |
|---|---|
| Harmony Health team | Make sure they have: their Mac, admin password, GoDaddy login, access to their practice email for verification codes |
| Chase | Have the repo on your Mac ready to push to their new GitHub repo |
| Harmony Health team | Claude Pro/Max subscription purchased ahead of time at [claude.ai/upgrade](https://claude.ai/upgrade) — **Claude Code requires Pro/Max/Team/Enterprise, not the free plan** |

---

## Part 1 — Accounts (10 minutes)

### 1.1 GitHub account

1. Go to [github.com/signup](https://github.com/signup)
2. Sign up with their practice email
3. Verify the email (check inbox for the code)
4. Skip the onboarding survey
5. **Take note of their GitHub username** — you'll need it in step 2

### 1.2 Vercel account

1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Click **"Continue with GitHub"** — this links the two accounts in one click
3. Authorize Vercel to access their GitHub
4. Pick the **Hobby plan** (free) during signup — it's plenty for this site
5. Skip team creation — just use the personal account

### 1.3 Claude (should already be purchased)

Confirm they can log into [claude.ai](https://claude.ai) with their credentials. This same login works for Claude Code.

---

## Part 2 — Install software on their Mac (10 minutes)

### 2.1 VS Code

1. Go to [code.visualstudio.com/Download](https://code.visualstudio.com/Download)
2. Click the big **Mac Universal** button
3. Open the downloaded `.zip` file — it extracts `Visual Studio Code.app`
4. **Drag `Visual Studio Code.app` into the `Applications` folder.** This step is not optional — dragging to the Desktop breaks settings persistence.
5. Open VS Code from Applications (Spotlight → type "VS Code" → Enter)
6. When macOS says "Are you sure you want to open it?" click **Open**

### 2.2 Claude Code (native installer — no Node.js needed)

This is the one command the team member needs to watch you run. After this, no more Terminal.

1. In VS Code, go to the top menu: **Terminal → New Terminal**. A small panel opens at the bottom.
2. Paste this command and press Return:
   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```
3. Wait ~30 seconds. You'll see installation progress, then "Successfully installed."
4. **Restart VS Code** (Cmd+Q, reopen) so the `claude` command becomes available.
5. In the new Terminal, type `claude` and press Return.
6. It will print a URL. Cmd+click the URL to open it in their browser.
7. Authenticate with their Claude Pro account.
8. Browser says "You're logged in." Return to Terminal — you'll see `claude>` prompt.
9. Type `/exit` and press Return. Auth is now saved forever on their Mac.

**Common gotcha:** if `claude` command not found after restart, close VS Code completely and reopen. The Terminal inherits environment variables from when VS Code was launched.

---

## Part 3 — Get the code onto their machine and into their GitHub (10 minutes)

### 3.1 Create their GitHub repo

1. On their Mac (signed into their new GitHub), go to [github.com/new](https://github.com/new)
2. Repository name: `harmony-health-site` (or whatever they prefer)
3. Set to **Private**
4. **Do NOT** add a README, .gitignore, or license (the existing repo has these)
5. Click **Create repository**
6. On the next screen, they'll see instructions. Copy the HTTPS URL (looks like `https://github.com/THEIR-USERNAME/harmony-health-site.git`)

### 3.2 Push the code from Chase's Mac to their new repo

**On Chase's Mac**, in the existing `harmony-health-modern` folder:

```bash
# remove Chase's remote, add theirs
git remote remove origin
git remote add origin https://github.com/THEIR-USERNAME/harmony-health-site.git

# push everything
git push -u origin main
```

Authenticate as them if prompted (they enter their GitHub password + 2FA on Chase's machine temporarily — or use a Personal Access Token).

### 3.3 Clone their repo onto their Mac

**On their Mac**, in VS Code's Terminal:

```bash
cd ~
git clone https://github.com/THEIR-USERNAME/harmony-health-site.git harmony-health
cd harmony-health
```

Then in VS Code: **File → Open Folder → `harmony-health`**. VS Code will ask "Do you trust the authors of this folder?" — click **Yes, I trust the authors**.

### 3.4 One-time GitHub CLI auth (so their future pushes work)

Still in VS Code's Terminal:

```bash
brew install gh   # if they don't have Homebrew, skip this and use: https://cli.github.com/
gh auth login
```

Follow the prompts: GitHub.com → HTTPS → Yes (use Git credentials) → Login with a web browser → paste the code → authorize.

---

## Part 4 — Connect their GitHub to Vercel (5 minutes)

1. On [vercel.com/new](https://vercel.com/new), they'll see their GitHub repos
2. Click **Import** next to `harmony-health-site`
3. Vercel auto-detects Next.js. Leave all settings at defaults.
4. No environment variables needed.
5. Click **Deploy**
6. Wait ~90 seconds. First deploy goes live at something like `harmony-health-site-abc123.vercel.app`.
7. Open the URL. Confirm it renders correctly.

---

## Part 5 — Point GoDaddy at Vercel (10 minutes + DNS propagation wait)

**Harmony Health's email is Google Workspace. Do not touch nameservers. Only change the A record and CNAME.**

### 5.1 In Vercel

1. Go to the new project → **Settings → Domains**
2. Enter `yourharmonyhealth.com` → click **Add**
3. Vercel will show the required DNS config. Confirm it matches the table below, then proceed.
4. Also add `www.yourharmonyhealth.com` (Vercel will auto-redirect one to the other)

### 5.2 In GoDaddy

Log into GoDaddy → Domain Portfolio → click `yourharmonyhealth.com` → **DNS → Manage Zones**.

Make exactly these changes:

| Action | Type | Name | Value |
|---|---|---|---|
| **Edit existing** | A | `@` | Change from `160.153.0.74` to `76.76.21.21` |
| **Edit or add** | CNAME | `www` | Set to `cname.vercel-dns.com` |

**Leave untouched:** MX records (Google Workspace), SPF/TXT records, nameservers. Email continues working.

### 5.3 Wait for DNS to propagate

- Usually 10-30 minutes
- Up to 48 hours worst case
- Check progress: visit `yourharmonyhealth.com` in a private browser window. Refresh every few minutes.
- Vercel's domain page will show a green checkmark when it picks up the new records.
- Vercel auto-issues the SSL certificate once DNS resolves — no action needed.

---

## Part 6 — Make the one-click desktop shortcut (5 minutes)

Create a file on their Desktop called `Harmony Health editing.command`. Right-click the Desktop → New Document (if you have TextEdit set up that way) or open TextEdit → New.

**Paste this into the file (replace `YOUR-MAC-USERNAME` with their actual Mac username):**

```bash
#!/bin/bash
cd /Users/YOUR-MAC-USERNAME/harmony-health
open -a "Visual Studio Code" .
```

Save as `Harmony Health editing.command` on the Desktop (**remove the .txt extension if TextEdit adds one**).

Then in VS Code's Terminal, make it executable:
```bash
chmod +x "/Users/YOUR-MAC-USERNAME/Desktop/Harmony Health editing.command"
```

Right-click the new `.command` file on Desktop → **Get Info → Custom Icon** → paste any Harmony Health logo image. Now they have a branded double-click launcher.

**How it works:** when they double-click, it opens VS Code to the project. Because of the `.vscode/tasks.json` file in the repo, Claude Code auto-launches in the Terminal.

---

## Part 7 — Place the editing guide (3 minutes)

The repo includes a self-contained HTML guide at `Harmony Health Guide.html`. Copy it to their Desktop so they always have it one double-click away.

```bash
cp ~/harmony-health/"Harmony Health Guide.html" ~/Desktop/
```

Also bookmark on their phone: the same guide is deployed at **`https://yourharmonyhealth.com/help.html`** (or on the staging URL until DNS cuts over). Save that URL to their phone home screen so they can reference it on the go.

The guide covers:
- The 3-step daily routine
- The master prompt they paste into Claude
- 10 copy-paste edits for common tasks
- Photo attachment via drag-and-drop
- How publishing works
- Screenshot-when-stuck protocol
- When to text Chase instead of trusting Claude

---

## Part 8 — Practice edit (5 minutes)

Walk them through a sample edit end-to-end so they see the whole loop.

1. They double-click **Harmony Health editing** on Desktop
2. VS Code opens. After ~10 seconds, Claude launches in the Terminal at the bottom.
3. They paste this into Claude:

   > Change the tagline "Personalized care led by Megan Cryder, NP-C" at the bottom of the homepage hero to "Personalized care led by Megan Cryder, NP-C · Est. 2024." Then publish it.

4. Claude finds the file, makes the change, commits, and pushes
5. Wait 90 seconds. Refresh yourharmonyhealth.com in a private browser window.
6. They see their change live.
7. Have them reverse it: `Actually, change it back to "Personalized care led by Megan Cryder, NP-C" and publish.`

Now they've seen the full editing loop. They know it works.

---

## After the call

Send them these three docs in an email:

- **`DAILY.md`** — their everyday routine (3 steps)
- **`QUICK-EDITS.md`** — copy-paste prompts for common asks
- **`README-FOR-HARMONY-TEAM.md`** — the landing page that links to everything

Tell them: **when something doesn't work, take a screenshot (Cmd+Shift+4, drag the area), drag it into the Claude chat in VS Code, and ask Claude to help.** If Claude can't fix it, text Chase.

---

## Rollback policy

If a deploy breaks the site:
- **Vercel auto-shows the last working version** until the new one builds successfully. A failed build cannot replace a live site.
- If a deploy **succeeds but the site looks wrong**, text Chase. Do NOT have Claude make more edits trying to fix it — that often makes it worse.
- Chase can roll back via Vercel dashboard → Deployments → click the prior working one → **Promote to Production**.

Never have Claude auto-revert. Human judgment required.
