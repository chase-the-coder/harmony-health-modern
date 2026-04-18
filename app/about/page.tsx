import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernAboutHero from "@/components/modern/ModernAboutHero";
import ModernAboutBio from "@/components/modern/ModernAboutBio";
import ModernAboutJourney from "@/components/modern/ModernAboutJourney";
import ModernAboutValues from "@/components/modern/ModernAboutValues";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderBreadcrumbSchema } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "About | Megan Cryder, NP-C — Harmony Health",
  description:
    "Megan Cryder, NP-C founded Harmony Health to bring lab-guided, functional medicine to Athens, GA. Hormone optimization, medical weight loss, peptides, IV, and aesthetics under one roof.",
  canonicalUrlRelative: "/about",
});

export default function AboutPage() {
  return (
    <>
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ])}
      <Header />
      <main>
        <ModernAboutHero />
        <ModernAboutBio />
        <ModernAboutJourney />
        <ModernAboutValues />
        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
