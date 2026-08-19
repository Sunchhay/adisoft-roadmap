import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MilestoneTable } from "@/components/MilestoneTable";
import { ProjectHeader } from "@/components/ProjectHeader";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { StatusBadge } from "@/components/StatusBadge";
import { SummaryCard } from "@/components/SummaryCard";
import { projectBySlug, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  return project ? { title: `${project.name} | Adisoft Project Roadmap`, description: project.description } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();
  return <div className="mx-auto w-full max-w-[1500px] p-5 sm:p-7 xl:p-10"><ProjectHeader project={project} /><main className="space-y-6"><section aria-label="Project summary" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{project.summaryItems.map((item) => <SummaryCard key={item.label} {...item} />)}</section><RoadmapTimeline project={project} /><div className="grid items-start gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]"><section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,.03)]"><div className="border-b border-slate-100 px-5 py-5"><h2 className="text-lg font-semibold text-slate-950">Detailed milestones</h2><p className="mt-1 text-sm text-slate-500">Roadmap direction, dependencies, and target timing.</p></div><MilestoneTable milestones={project.milestones} /></section><aside className="space-y-4 xl:sticky xl:top-6">{project.candidateScope && <section className="rounded-2xl border border-orange-200 bg-orange-50/40 p-5"><div className="mb-3 flex flex-wrap items-center justify-between gap-3"><h2 className="font-semibold text-slate-950">MVP 2 Candidate Scope</h2><StatusBadge status="tbc" /></div><p className="mb-4 text-xs leading-5 text-slate-500">Pending Review & Lock. Candidate scope only; these items are not yet committed.</p><ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2 xl:grid-cols-1">{project.candidateScope.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-orange-400" />{item}</li>)}</ul></section>}<section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)]"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Executive note</p><h2 className="mt-2 text-lg font-semibold text-slate-950">Executive Summary</h2><div className="mt-4 space-y-3 border-l-2 border-slate-200 pl-4">{project.executiveSummary.map((paragraph) => <p key={paragraph} className="text-sm leading-6 text-slate-600">{paragraph}</p>)}</div></section></aside></div></main></div>;
}
