import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import SiteHeader from "@/components/SiteHeader";
import FabCta from "@/components/FabCta";
import AnnounceBar from "@/components/AnnounceBar";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Summer Heaven | New Semi-Detached Homes with Legal Basement (Banff) Suites — Wallaceburg, ON",
  description:
    "Summer Heaven is a new community of modern semi-detached homes, each with a legal basement (Banff) apartment, coming to Wallaceburg, Ontario. Reserve your home with just $5,000.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <Preloader />
        <AnnounceBar />
        <SiteHeader />
        {children}
        <FabCta />
      </body>
    </html>
  );
}
