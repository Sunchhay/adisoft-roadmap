import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/project";
import { StatusBadge } from "./StatusBadge";

export function ProjectHeader({ project }: { project: Project }) {
  return <header className="mb-7"><Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"><ArrowLeft size={16} />Back to portfolio</Link><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><div className="mb-3 flex items-center gap-3"><p className="text-xs font-bold uppercase tracking-[.14em] text-slate-400">{project.shortName}</p><StatusBadge status={project.status} /></div><h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{project.name}</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">{project.description}</p></div></div></header>;
}
