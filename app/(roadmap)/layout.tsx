import { MobileNav } from "@/components/MobileNav";
import { Sidebar } from "@/components/Sidebar";

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#f6f7f9] lg:flex"><Sidebar /><div className="min-w-0 flex-1"><MobileNav />{children}</div></div>;
}
