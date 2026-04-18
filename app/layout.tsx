import { ReactNode } from "react";
import { Plus_Jakarta_Sans, Allura } from "next/font/google";
import { Viewport } from "next";
import { getSEOTags, renderSchemaTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-allura",
});

export const viewport: Viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags({
  title:
    "Harmony Health | HRT, Medical Weight Loss & Peptide Therapy in Athens, GA",
  canonicalUrlRelative: "/",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme={config.colors.theme}
      className={`${font.className} ${allura.variable}`}
    >
      <head>{renderSchemaTags()}</head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
