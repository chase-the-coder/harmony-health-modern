"use client";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import config from "@/config";

// Minimal client wrappers: top progress bar on route changes and toast messages.
// Supabase/Crisp/Tooltip were removed with the ShipFast stack.
export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      {children}
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}
