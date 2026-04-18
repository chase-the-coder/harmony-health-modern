import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-6 p-6 bg-[#FAF8F4]">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563]">
        404
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25]">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="text-base text-[#535353] max-w-md">
        The page you were looking for may have moved or never existed. Try the
        homepage or reach out if you need help.
      </p>
      <div className="flex flex-wrap gap-3 justify-center pt-2">
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-[#1F2A25] text-white text-sm font-medium hover:bg-[#2A3832] transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full bg-white ring-1 ring-[#6B9680]/25 text-[#1F2A25] text-sm font-medium hover:bg-[#F7F9F8] transition-colors"
        >
          Contact us
        </Link>
      </div>
    </main>
  );
}
