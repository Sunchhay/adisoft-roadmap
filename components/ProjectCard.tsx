import { ArrowUpRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/project";
import { StatusBadge } from "./StatusBadge";

const accents = { purple: "bg-violet-500", blue: "bg-blue-500", orange: "bg-orange-500", green: "bg-emerald-500" };

export function ProjectCard({ project }: { project: Project }) {
  const current = Math.max(0, project.checkpoints.findIndex((checkpoint) => checkpoint.status === "in-progress"));
  return <Link href={`/projects/${project.slug}`} className="group flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(15,23,42,.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">
    <div className="mb-6 flex items-start justify-between"><span className={`h-1.5 w-11 rounded-full ${accents[project.accent]}`} /><ArrowUpRight size={18} className="text-slate-300 transition group-hover:text-slate-700" /></div>
    <div className="mb-3 flex items-center justify-between gap-3"><h2 className="font-semibold text-slate-950">{project.name}</h2><StatusBadge status={project.status} label={project.statusLabel} /></div>
    <p className="text-sm leading-6 text-slate-500">{project.currentPhase}</p>
    <div className="mt-auto pt-7"><div className="mb-3 flex gap-1" aria-label={`Current roadmap phase ${current + 1} of ${project.checkpoints.length}`}>{project.checkpoints.map((checkpoint, index) => <span key={checkpoint.id} className={`h-1 flex-1 rounded-full ${index <= current ? accents[project.accent] : "bg-slate-100"}`} />)}</div><p className="text-xs font-medium text-slate-700">{project.nextMilestone}</p><p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500"><CalendarDays size={13} />{project.nextTarget}</p></div>
  </Link>;
}
