import {
  EnvelopeSimple,
  Phone,
  InstagramLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";

const INSTAGRAM_URL = "https://www.instagram.com/your.harmony.health/";

export default function UtilityBar() {
  return (
    <div className="hidden lg:block bg-[#6B9680] text-white/85 text-[13px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-11 gap-6">
        <div className="flex items-center gap-6">
          <a
            href="mailto:info@yourharmonyhealth.com"
            className="inline-flex items-center gap-2 hover:text-[#9BD3B6] transition-colors"
          >
            <EnvelopeSimple size={14} weight="regular" />
            <span>info@yourharmonyhealth.com</span>
          </a>
          <span className="w-px h-4 bg-white/15" aria-hidden />
          <a
            href="tel:7066146818"
            className="inline-flex items-center gap-2 hover:text-[#9BD3B6] transition-colors"
          >
            <Phone size={14} weight="regular" />
            <span>(706) 614-6818</span>
          </a>
          <span className="w-px h-4 bg-white/15" aria-hidden />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 hover:text-[#9BD3B6] transition-colors"
          >
            <InstagramLogo size={14} weight="regular" />
          </a>
        </div>

        <div className="flex items-center gap-2 text-white/70">
          <MapPin size={14} weight="regular" className="text-[#9BD3B6]" />
          <span>Athens, GA &middot; In-person &amp; virtual appointments</span>
        </div>
      </div>
    </div>
  );
}
