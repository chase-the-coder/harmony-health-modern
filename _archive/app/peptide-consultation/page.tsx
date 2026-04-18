import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import BookingButton, { BOOKING_URLS } from "@/components/harmony/BookingButton";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Peptide Consultation | Harmony Health Athens GA",
  description:
    "New-patient peptide consultation at Harmony Health. Cash-pay fee-for-service, HSA/FSA accepted. Consult fee waived for hormone membership patients.",
  canonicalUrlRelative: "/peptide-consultation",
});

export default function PeptideConsultationPage() {
  return (
    <>
      <Header />

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="hh-eyebrow mb-3">Harmony Health</p>
            <h2 className="hh-h2 mb-5">Peptide Consultation</h2>
            <p className="text-[15px] leading-[26px] text-[#535353] max-w-[820px] mx-auto">
              <strong className="text-[#30373E]">
                Harmony Health is a cash pay fee-for-service clinic.
              </strong>
              <br />
              We do not participate with any healthcare insurance plans. We find that accepting
              insurance keeps us from providing the time needed to give adequate care to each
              patient. We do accept HSA/FSA cards as payment.
            </p>
          </div>

          <div className="max-w-[760px] mx-auto border border-base-300 rounded-[5px] bg-white overflow-hidden">
            <div className="bg-[#6B9680] px-8 py-6 text-center">
              <h3 className="text-[20px] lg:text-[23px] font-semibold !text-white mb-3">
                Patient Consultation Fee
              </h3>
              <p className="text-white/90 text-[14px] leading-[22px]">
                Consult fee is only for new patients. Consult fee waived for hormone membership
                patients.
              </p>
            </div>
            <div className="bg-[#6B9680] px-8 pt-0 pb-8 text-center border-t border-white/20">
              <p className="text-[40px] lg:text-[46px] font-semibold !text-white leading-none pt-4">
                $125
              </p>
              <p className="text-white/90 text-[13px] italic mt-3">
                (Note: Package cost does not include cost of labs)
              </p>
            </div>
            <div className="px-8 py-6 text-center">
              <BookingButton href={BOOKING_URLS.peptide}>Book Appointment</BookingButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
