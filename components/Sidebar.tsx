"use client";

import { ArrowUpRight, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

const dots = { purple: "bg-violet-400", blue: "bg-blue-400", orange: "bg-orange-400", green: "bg-emerald-400" };

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden h-screen w-64 shrink-0 flex-col bg-[#111318] px-4 py-5 text-white lg:sticky lg:top-0 lg:flex">
      <Link href="/" className="mb-9 flex items-center gap-3 rounded-xl px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        <Image src="/company-app-icon.png" alt="Adisoft" width={40} height={40} className="size-10 rounded-xl object-contain" priority />
        <span><strong className="block text-sm">Project Roadmap</strong><small className="text-xs text-slate-400">Executive View</small></span>
      </Link>
      <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-500">Workspace</p>
      <nav aria-label="Primary navigation" className="space-y-1">
        <NavLink href="/" active={pathname === "/"}><LayoutDashboard size={16} />Overview</NavLink>
        {projects.map((project) => <NavLink key={project.slug} href={`/projects/${project.slug}`} active={pathname === `/projects/${project.slug}`}><span className={`size-2 rounded-full ${dots[project.accent]}`} />{project.shortName}<ArrowUpRight className="ml-auto opacity-60" size={14} /></NavLink>)}
      </nav>
      <div className="mt-auto border-t border-white/10 px-3 pt-5 text-xs leading-5 text-slate-500">Portfolio view<br />Updated 19 Aug 2026</div>
    </aside>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return <Link href={href} aria-current={active ? "page" : undefined} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>{children}</Link>;
}
