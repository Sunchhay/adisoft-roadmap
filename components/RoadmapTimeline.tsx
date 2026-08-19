import type { Project } from "@/types/project";
import { RoadmapCheckpoint } from "./RoadmapCheckpoint";

const accents = { purple: "bg-violet-500", blue: "bg-blue-500", orange: "bg-orange-500", green: "bg-emerald-500" };

export function RoadmapTimeline({ project }: { project: Project }) {
  return <section className="rounded-2xl border border-slate-200 bg-white py-6 shadow-[0_1px_2px_rgba(15,23,42,.03)] sm:py-8"><div className="px-5 text-center sm:px-8"><p className="text-[11px] font-bold uppercase tracking-[.16em] text-slate-400">Delivery path</p><h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">{project.timelineTitle}</h2><p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">{project.description}</p></div><div className="timeline-scroll mt-9 overflow-x-auto px-5 pb-3 sm:px-8"><ol className="relative flex w-max min-w-full justify-between before:absolute before:left-6 before:right-6 before:top-6 before:h-0.5 before:bg-slate-200">{project.checkpoints.map((checkpoint) => <RoadmapCheckpoint key={checkpoint.id} checkpoint={checkpoint} accent={accents[project.accent]} />)}</ol></div></section>;
}
