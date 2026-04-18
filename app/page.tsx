import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernHero from "@/components/modern/ModernHero";
import ModernTrustBar from "@/components/modern/ModernTrustBar";
import ModernProblem from "@/components/modern/ModernProblem";
import ModernMeetMegan from "@/components/modern/ModernMeetMegan";
import ModernServices from "@/components/modern/ModernServices";
import ModernOutcomes from "@/components/modern/ModernOutcomes";
import ModernProcess from "@/components/modern/ModernProcess";
import ModernTestimonials from "@/components/modern/ModernTestimonials";
import ModernCTA from "@/components/modern/ModernCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <ModernHero />
        <ModernMeetMegan />
        <ModernTrustBar />
        <ModernProblem />
        <ModernServices />
        <ModernOutcomes />
        <ModernProcess />
        <ModernTestimonials />
        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
