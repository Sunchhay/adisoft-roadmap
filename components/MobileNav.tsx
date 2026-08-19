"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export function MobileNav() {
  const pathname = usePathname();
  const links = [{ href: "/", label: "Overview" }, ...projects.map((project) => ({ href: `/projects/${project.slug}`, label: project.shortName }))];
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111318]/95 px-4 py-3 text-white backdrop-blur lg:hidden"><Link href="/" aria-label="Project portfolio home" className="mb-3 flex w-fit items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Image src="/Adisoft-vertical.png" alt="Adisoft" width={32} height={32} className="size-8 rounded-lg object-contain" priority /><strong className="text-sm">Project Roadmap</strong></Link><nav aria-label="Mobile navigation" className="-mx-1 flex gap-1 overflow-x-auto pb-0.5 [scrollbar-width:none]">{links.map((link) => { const active = pathname === link.href; return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-white ${active ? "bg-white/15 text-white" : "text-slate-400 hover:text-white"}`}>{link.label}</Link>; })}</nav></header>;
}
