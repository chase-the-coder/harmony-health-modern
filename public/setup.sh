#!/bin/bash
# =============================================================================
# Harmony Health Editing Setup (Mac Only)
# Run: curl -fsSL https://yourharmonyhealth.com/setup.sh | bash
# =============================================================================

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m'

pass() { echo -e "  ${GREEN}✓${NC} $1"; }
fail() { echo -e "  ${RED}✗${NC} $1"; }
info() { echo -e "  ${BLUE}→${NC} $1"; }
warn() { echo -e "  ${YELLOW}!${NC} $1"; }
header() { echo -e "\n${BOLD}━━━ $1 ━━━${NC}\n"; }

ERRORS=0

header "Harmony Health Editing Setup"
echo "This script installs everything you need to edit the"
echo "Harmony Health website using Claude in VS Code."
echo ""
echo "It will ask for your Mac password once (for Homebrew)"
echo "and open your browser once (to sign into GitHub)."
echo ""
echo "Estimated time: 5-10 minutes"
echo ""
read -p "Press Enter to start..."

# -----------------------------------------------------------------------------
header "Step 1/7: Homebrew"

if command -v brew &> /dev/null; then
    pass "Homebrew already installed"
else
    info "Installing Homebrew (you may need to enter your Mac password)..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

    if [ -f /opt/homebrew/bin/brew ]; then
        eval "$(/opt/homebrew/bin/brew shellenv)"
        SHELL_PROFILE="$HOME/.zprofile"
        if ! grep -q 'homebrew' "$SHELL_PROFILE" 2>/dev/null; then
            echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> "$SHELL_PROFILE"
        fi
    fi

    if command -v brew &> /dev/null; then
        pass "Homebrew installed"
    else
        fail "Homebrew install failed. Try restarting Terminal and running this script again."
        exit 1
    fi
fi

# -----------------------------------------------------------------------------
header "Step 2/7: VS Code"

if command -v code &> /dev/null; then
    pass "VS Code already installed"
elif [ -d "/Applications/Visual Studio Code.app" ]; then
    info "VS Code found but 'code' command not in PATH. Adding it..."
    export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin:$PATH"
    SHELL_PROFILE="$HOME/.zprofile"
    if ! grep -q 'Visual Studio Code' "$SHELL_PROFILE" 2>/dev/null; then
        echo 'export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin:$PATH"' >> "$SHELL_PROFILE"
    fi
    pass "VS Code 'code' command added to PATH"
else
    info "Installing VS Code..."
    brew install --cask visual-studio-code
    if ! command -v code &> /dev/null; then
        export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin:$PATH"
        SHELL_PROFILE="$HOME/.zprofile"
        if ! grep -q 'Visual Studio Code' "$SHELL_PROFILE" 2>/dev/null; then
            echo 'export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin:$PATH"' >> "$SHELL_PROFILE"
        fi
    fi
    if command -v code &> /dev/null; then
        pass "VS Code installed"
    else
        fail "VS Code installed but 'code' command not found"
        ERRORS=$((ERRORS + 1))
    fi
fi

# -----------------------------------------------------------------------------
header "Step 3/7: Node.js"

if command -v node &> /dev/null; then
    NODE_MAJOR=$(node --version | sed 's/v//' | cut -d. -f1)
    if [ "$NODE_MAJOR" -ge 18 ]; then
        pass "Node.js already installed ($(node --version))"
    else
        warn "Node.js too old. Upgrading..."
        brew install node
        pass "Node.js upgraded to $(node --version)"
    fi
else
    info "Installing Node.js..."
    brew install node
    if command -v node &> /dev/null; then
        pass "Node.js installed ($(node --version))"
    else
        fail "Node.js install failed"
        ERRORS=$((ERRORS + 1))
    fi
fi

# -----------------------------------------------------------------------------
header "Step 4/7: GitHub CLI"

if command -v gh &> /dev/null; then
    pass "GitHub CLI already installed"
else
    info "Installing GitHub CLI..."
    brew install gh
    if command -v gh &> /dev/null; then
        pass "GitHub CLI installed"
    else
        fail "GitHub CLI install failed"
        ERRORS=$((ERRORS + 1))
    fi
fi

# Sign into GitHub
if command -v gh &> /dev/null; then
    if gh auth status &> /dev/null; then
        pass "Already signed into GitHub"
    else
        echo ""
        info "Opening your browser to sign into GitHub..."
        echo "  If you don't have a GitHub account, create one when prompted."
        echo ""
        gh auth login -w -p https 2>&1 || true
        echo ""
        read -p "Press Enter after you have signed in..."
        if gh auth status &> /dev/null; then
            pass "GitHub sign-in complete"
        else
            warn "GitHub sign-in may not have worked. You can retry later with: gh auth login"
            ERRORS=$((ERRORS + 1))
        fi
    fi
fi

# -----------------------------------------------------------------------------
header "Step 5/7: Claude Code Extension"

if command -v code &> /dev/null; then
    if code --list-extensions 2>/dev/null | grep -q "anthropic.claude-code"; then
        pass "Claude Code extension already installed"
    else
        info "Installing Claude Code extension..."
        code --install-extension anthropic.claude-code 2>&1 | tail -1
        if code --list-extensions 2>/dev/null | grep -q "anthropic.claude-code"; then
            pass "Claude Code extension installed"
        else
            warn "Extension may not have installed. You can install manually in VS Code: Extensions > search 'Claude Code' > Install"
            ERRORS=$((ERRORS + 1))
        fi
    fi
else
    warn "Skipping extension install (VS Code not available)"
    ERRORS=$((ERRORS + 1))
fi

# -----------------------------------------------------------------------------
header "Step 6/7: Download the Website Project"

if [ -d "$HOME/harmony-health/.git" ]; then
    pass "Project already downloaded at ~/harmony-health"
    info "Pulling latest changes..."
    cd "$HOME/harmony-health" && git pull 2>&1 | tail -1
    pass "Up to date"
elif [ -L "$HOME/harmony-health" ]; then
    pass "Project linked at ~/harmony-health"
else
    info "Downloading the project from GitHub..."
    if command -v gh &> /dev/null && gh auth status &> /dev/null; then
        gh repo clone chase-lindsay/harmony-health-modern "$HOME/harmony-health" 2>&1 | tail -3
        if [ -d "$HOME/harmony-health" ]; then
            pass "Project downloaded to ~/harmony-health"
        else
            fail "Download failed. Ask Chase for help."
            ERRORS=$((ERRORS + 1))
        fi
    else
        fail "GitHub CLI not authenticated. Run 'gh auth login' first, then re-run this script."
        ERRORS=$((ERRORS + 1))
    fi
fi

# npm install
if [ -d "$HOME/harmony-health" ] && [ -f "$HOME/harmony-health/package.json" ]; then
    info "Installing project dependencies..."
    cd "$HOME/harmony-health" && npm install --silent 2>&1 | tail -1
    pass "Dependencies installed"
fi

# -----------------------------------------------------------------------------
header "Step 7/7: Desktop Shortcut"

SHORTCUT="$HOME/Desktop/Harmony Health editing.app"

if [ -d "$SHORTCUT" ]; then
    pass "Desktop shortcut already exists"
else
    info "Creating Desktop shortcut..."
    osacompile -o "$SHORTCUT" -e '
do shell script "open -a \"Visual Studio Code\" ~/harmony-health"
delay 3
do shell script "/usr/local/bin/code --command claude-vscode.sidebar.open 2>/dev/null; /opt/homebrew/bin/code --command claude-vscode.sidebar.open 2>/dev/null; true"
'
    if [ -d "$SHORTCUT" ]; then
        pass "Desktop shortcut created"
    else
        warn "Shortcut creation failed. You can open the project manually in VS Code."
        ERRORS=$((ERRORS + 1))
    fi
fi

# =============================================================================
header "Verification"

echo "Checking everything..."
echo ""

ALL_GOOD=true

for tool in brew code node npm gh; do
    if command -v $tool &> /dev/null; then
        pass "$tool: installed"
    else
        fail "$tool: not found"
        ALL_GOOD=false
    fi
done

if command -v code &> /dev/null && code --list-extensions 2>/dev/null | grep -q "anthropic.claude-code"; then
    pass "Claude Code extension: installed"
else
    fail "Claude Code extension: not found"
    ALL_GOOD=false
fi

if [ -d "$HOME/harmony-health" ]; then
    pass "Project: ~/harmony-health"
else
    fail "Project: not downloaded"
    ALL_GOOD=false
fi

if [ -d "$HOME/Desktop/Harmony Health editing.app" ]; then
    pass "Desktop shortcut: ready"
else
    fail "Desktop shortcut: missing"
    ALL_GOOD=false
fi

# =============================================================================
echo ""
echo ""

if [ "$ALL_GOOD" = true ]; then
    echo -e "${GREEN}${BOLD}━━━ ALL DONE ━━━${NC}"
    echo ""
    echo "Everything is installed. One last step:"
    echo ""
    echo -e "  ${BOLD}Sign into Claude:${NC}"
    echo "  Double-click 'Harmony Health editing' on your Desktop."
    echo "  Click the Claude icon in the left sidebar and sign in"
    echo "  with the account you created at claude.ai."
    echo ""
    echo "That's it. You're ready to edit the site."
else
    echo -e "${YELLOW}${BOLD}━━━ ALMOST DONE ━━━${NC}"
    echo ""
    echo "Some items need attention (see the red items above)."
    echo "Try restarting Terminal and running this script again."
    echo "If something is still broken, send Chase a screenshot."
fi

echo ""
