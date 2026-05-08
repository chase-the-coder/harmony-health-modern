"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-6 p-6 bg-[#FAF8F4]">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25]">
        Something went wrong.
      </h1>
      {error?.message && (
        <p className="text-sm text-[#B0413E] max-w-md">{error.message}</p>
      )}
      <p className="text-base text-[#535353] max-w-md">
        Try refreshing the page. If the problem persists, call us at{" "}
        <a href="tel:7066146818" className="text-[#517563] font-semibold">
          (706) 614-6818
        </a>{" "}
        or email{" "}
        <a
          href="mailto:info@yourharmonyhealth.com"
          className="text-[#517563] font-semibold"
        >
          info@yourharmonyhealth.com
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-3 justify-center pt-2">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-full bg-[#6B9680] text-white text-sm font-medium hover:bg-[#517563] transition-colors"
        >
          Refresh
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-white ring-1 ring-[#6B9680]/25 text-[#1F2A25] text-sm font-medium hover:bg-[#F7F9F8] transition-colors"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
