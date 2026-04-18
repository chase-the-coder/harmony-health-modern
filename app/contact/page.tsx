import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernContactMapHero from "@/components/modern/ModernContactMapHero";
import ModernContactBlock from "@/components/modern/ModernContactBlock";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderBreadcrumbSchema } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Contact | Harmony Health Athens GA",
  description:
    "Get in touch with Harmony Health in Athens, GA. Call, email, or send a message. Appointments Tuesday through Thursday.",
  canonicalUrlRelative: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ])}
      <Header />
      <main>
        <ModernContactMapHero />
        <ModernContactBlock />
        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
