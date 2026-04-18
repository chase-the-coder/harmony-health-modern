import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Get Your Free Peptide Essentials Handbook | Harmony Health",
  description:
    "Instant access to our free Peptide Essentials Handbook — a simple guide to boosting energy, fat loss, recovery, and hormone balance.",
  canonicalUrlRelative: "/free-handbook",
});

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

export default function FreeHandbookPage() {
  return (
    <>
      <Header />

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          <h1 className="text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-[#30373E] mb-5">
            The Peptide Essentials Handbook
          </h1>
          <p className="text-[17px] leading-[28px] text-[#535353] mb-4">
            A plain-language guide to the peptides we prescribe most: what each one does,
            who it works best for, and what to expect from a real protocol.
          </p>
          <ul className="text-[15px] leading-[26px] text-[#535353] mb-10 space-y-2">
            <li className="flex items-start gap-2"><span className="text-[#6B9680] font-bold mt-0.5">-</span> Sermorelin, BPC-157, TB-500, PT-141, GHK-Cu explained simply</li>
            <li className="flex items-start gap-2"><span className="text-[#6B9680] font-bold mt-0.5">-</span> How peptides compare to HRT and weight loss medications</li>
            <li className="flex items-start gap-2"><span className="text-[#6B9680] font-bold mt-0.5">-</span> What lab markers matter and when to start</li>
          </ul>

          <form className="space-y-6" method="post" action="/api/lead">
            <div>
              <label className="text-[14px] font-semibold text-[#30373E] block mb-2">
                Name <span className="text-[#c94545]">(Required)</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[12px] text-[#7a7a7a] mb-1 block">First</span>
                  <input
                    required
                    name="firstName"
                    type="text"
                    className="w-full border border-base-300 rounded-[5px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6B9680]"
                  />
                </div>
                <div>
                  <span className="text-[12px] text-[#7a7a7a] mb-1 block">Last</span>
                  <input
                    required
                    name="lastName"
                    type="text"
                    className="w-full border border-base-300 rounded-[5px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6B9680]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-[14px] font-semibold text-[#30373E] block mb-2">
                Email <span className="text-[#c94545]">(Required)</span>
              </label>
              <input
                required
                name="email"
                type="email"
                className="w-full border border-base-300 rounded-[5px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6B9680]"
              />
            </div>

            <div>
              <label className="text-[14px] font-semibold text-[#30373E] block mb-2">
                Address
              </label>
              <span className="text-[12px] text-[#7a7a7a] mb-1 block">Street Address</span>
              <input
                name="streetAddress"
                type="text"
                className="w-full border border-base-300 rounded-[5px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6B9680] mb-3"
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[12px] text-[#7a7a7a] mb-1 block">City</span>
                  <input
                    name="city"
                    type="text"
                    className="w-full border border-base-300 rounded-[5px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#6B9680]"
                  />
                </div>
                <div>
                  <span className="text-[12px] text-[#7a7a7a] mb-1 block">State</span>
                  <select
                    name="state"
                    defaultValue=""
                    className="w-full border border-base-300 rounded-[5px] px-4 py-2.5 text-[14px] bg-white focus:outline-none focus:border-[#6B9680]"
                  >
                    <option value="">Select</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="text-[14px] font-semibold text-[#30373E] block mb-2">
                Consent <span className="text-[#c94545]">(Required)</span>
              </label>
              <label className="flex items-start gap-3 text-[13px] cursor-pointer">
                <input
                  required
                  type="checkbox"
                  name="consent"
                  className="mt-1 w-4 h-4 accent-[#6B9680]"
                />
                <span className="text-[#535353] leading-[20px]">
                  Your information is secure and will be used in accordance with our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#6B9680] underline hover:text-[#587a68]"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex items-center text-[12px] font-extrabold uppercase tracking-[1.3px] px-8 py-3 bg-[#6B9680] text-white rounded-[5px] hover:bg-[#587a68] transition"
            >
              Send Me the Handbook
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
