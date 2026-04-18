import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-[#535353] leading-[28px]">
          <p className="text-[14px] text-[#535353]/70 mb-8">Last Updated: April 17, 2026</p>

          <p>Thank you for visiting Harmony Health. This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our website located at https://yourharmonyhealth.com.</p>

          <p>By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use the Website.</p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Personal Data</h3>
          <p>We collect the following personal information from you:</p>
          <ul>
            <li><strong>Name:</strong> We collect your name to personalize your experience and communicate with you effectively.</li>
            <li><strong>Email:</strong> We collect your email address to send you important information regarding your appointments, updates, and communication.</li>
            <li><strong>Phone Number:</strong> We collect your phone number to contact you about appointments and treatment plans.</li>
            <li><strong>Health Information:</strong> We may collect health-related information you voluntarily provide through our contact form to better understand your treatment interests.</li>
          </ul>

          <h3>1.2 Non-Personal Data</h3>
          <p>We may use web cookies and similar technologies to collect non-personal information such as your IP address, browser type, device information, and browsing patterns. This information helps us enhance your browsing experience, analyze trends, and improve our services.</p>

          <h2>2. Purpose of Data Collection</h2>
          <p>We collect and use your personal data for the purpose of appointment scheduling, treatment consultation, patient communication, and providing you with information about our services including Hormone Replacement Therapy, Medical Weight Loss, Peptide Therapy, Aesthetic Treatments, and IV Hydration Therapy.</p>

          <h2>3. Data Sharing</h2>
          <p>We do not share your personal data with any third parties except as required for appointment processing (e.g., sharing your information with our electronic health records system). We do not sell, trade, or rent your personal information to others.</p>

          <h2>4. Children&rsquo;s Privacy</h2>
          <p>Harmony Health services are intended for adults. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at the email address provided below.</p>

          <h2>5. Updates to the Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page.</p>

          <h2>6. Contact Information</h2>
          <p>If you have any questions, concerns, or requests related to this Privacy Policy, you can contact us at:</p>
          <p>Email: <a href="mailto:info@yourharmonyhealth.com" className="text-[#6B9680]">info@yourharmonyhealth.com</a><br />
          Phone: <a href="tel:7066146818" className="text-[#6B9680]">(706) 614-6818</a><br />
          Address: 2425 W. Broad Street, Suite 2, Athens, GA 30606</p>

          <p>By using Harmony Health, you consent to the terms of this Privacy Policy.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
