import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Referral Form | Harmony Health Athens GA",
  description: "Refer a friend or family member to Harmony Health.",
  canonicalUrlRelative: "/referral-form",
});

const services = [
  "Hormone Replacement Therapy",
  "Medical Weight Loss",
  "Peptide Therapy",
  "IV Hydration Therapy",
  "Aesthetic Treatments",
];

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="text-[14px] font-semibold text-[#30373E] block mb-2">
      {children}
      {required && <span className="text-[#c94545] ml-1">(Required)</span>}
    </label>
  );
}

const inputCls =
  "w-full border border-base-300 rounded-[5px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6B9680]";

export default function ReferralPage() {
  return (
    <>
      <Header />

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          <h1 className="text-[40px] lg:text-[48px] font-semibold leading-[1.4] text-[#30373E] mb-10">
            Referral Form
          </h1>

          <form className="space-y-6" method="post" action="/api/lead">
            <div>
              <FieldLabel required>New Client &ndash; First Name</FieldLabel>
              <input required name="newClientFirstName" type="text" className={inputCls} />
            </div>

            <div>
              <FieldLabel required>New Client &ndash; Last Name</FieldLabel>
              <input required name="newClientLastName" type="text" className={inputCls} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <FieldLabel required>Email</FieldLabel>
                <input required name="email" type="email" className={inputCls} />
              </div>
              <div>
                <FieldLabel required>Service Interested In</FieldLabel>
                <select
                  required
                  name="service"
                  defaultValue=""
                  className={`${inputCls} bg-white`}
                >
                  <option value="" disabled>
                    Hormone Replacement Therapy
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <FieldLabel required>Phone</FieldLabel>
              <input required name="phone" type="tel" className={inputCls} />
            </div>

            <div>
              <FieldLabel>Referral Code</FieldLabel>
              <input name="referralCode" type="text" className={inputCls} />
            </div>

            <button
              type="submit"
              className="inline-flex items-center text-[12px] font-extrabold uppercase tracking-[1.3px] px-8 py-3 bg-[#6B9680] text-white rounded-[5px] hover:bg-[#587a68] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
