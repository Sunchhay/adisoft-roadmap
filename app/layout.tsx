import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MobileNav } from "@/components/MobileNav";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Adisoft Project Roadmap",
  description: "Executive project timeline and roadmap dashboard",
  icons: {
    icon: [{ url: "/Adisoft-vertical.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/Adisoft-vertical.png",
    apple: "/Adisoft-vertical.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body><div className="min-h-screen bg-[#f6f7f9] lg:flex"><Sidebar /><div className="min-w-0 flex-1"><MobileNav />{children}</div></div></body></html>;
}
