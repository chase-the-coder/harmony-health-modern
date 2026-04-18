import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";

export const metadata = getSEOTags({
  title: `Terms of Service | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

export default function TOS() {
  return (
    <>
      <Header />
      <main className="max-w-[1350px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-[#6B9680] hover:text-[#517563] mb-8 text-[14px] font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-[36px] lg:text-[42px] font-bold tracking-[-1px] text-[#30373E] mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none text-[#535353] leading-[28px]">
          <p className="text-[14px] text-[#535353]/70 mb-8">Last Updated: April 17, 2026</p>

          <p>Welcome to Harmony Health!</p>

          <p>These Terms of Service govern your use of the Harmony Health website at https://yourharmonyhealth.com and the services provided by Harmony Health. By using our Website and services, you agree to these Terms.</p>

          <h2>1. Description of Services</h2>
          <p>Harmony Health is a wellness clinic located in Athens, GA that provides Hormone Replacement Therapy (HRT), Medical Weight Loss, Peptide Therapy, Aesthetic Treatments, and IV Hydration Therapy. Our website provides information about our services, allows you to schedule appointments, and submit inquiries.</p>

          <h2>2. Appointment Scheduling</h2>
          <p>Appointments are scheduled through our online booking system (Optimantra) or by contacting our office directly. Cancellation and rescheduling policies may apply. Please contact our office for details.</p>

          <h2>3. Medical Disclaimer</h2>
          <p>The information on this website is for general informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider before starting any treatment. Individual results may vary.</p>

          <h2>4. User Data and Privacy</h2>
          <p>We collect and store user data, including name, email, phone number, and health-related information, as necessary to provide our services. For details on how we handle your data, please refer to our <Link href="/privacy-policy" className="text-[#6B9680]">Privacy Policy</Link>.</p>

          <h2>5. Non-Personal Data Collection</h2>
          <p>We use web cookies to collect non-personal data for the purpose of improving our services and user experience.</p>

          <h2>6. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Georgia, United States.</p>

          <h2>7. Updates to the Terms</h2>
          <p>We may update these Terms from time to time. Updates will be posted on this page.</p>

          <h2>8. Contact Information</h2>
          <p>For any questions or concerns regarding these Terms of Service, please contact us at:</p>
          <p>Email: <a href="mailto:info@yourharmonyhealth.com" className="text-[#6B9680]">info@yourharmonyhealth.com</a><br />
          Phone: <a href="tel:7066146818" className="text-[#6B9680]">(706) 614-6818</a><br />
          Address: 2425 W. Broad Street, Suite 2, Athens, GA 30606</p>

          <p>Thank you for choosing Harmony Health!</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
