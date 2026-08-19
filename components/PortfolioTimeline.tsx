import { portfolioTimeline, projectBySlug } from "@/data/projects";

const tags = { purple: "bg-violet-50 text-violet-700", blue: "bg-blue-50 text-blue-700", orange: "bg-orange-50 text-orange-700", green: "bg-emerald-50 text-emerald-700" };

export function PortfolioTimeline() {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] sm:p-6"><div className="mb-5"><h2 className="text-lg font-semibold text-slate-950">Portfolio timeline</h2><p className="mt-1 text-sm text-slate-500">Confirmed cross-project checkpoints. Scroll to explore the full delivery window.</p></div><div className="timeline-scroll overflow-x-auto pb-2"><div className="grid min-w-[1100px] grid-cols-10 gap-2">{portfolioTimeline.map((period) => <div key={period.label} className="min-h-32 rounded-xl border border-slate-200 bg-slate-50/60 p-3"><p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">{period.label}</p><div className="space-y-1.5">{period.items.map((item) => { const project = projectBySlug[item.project]; return <span key={`${item.project}-${item.label}`} className={`block rounded-md px-2 py-1.5 text-[10px] font-semibold leading-4 ${tags[project.accent]}`}>{project.shortName} · {item.label}</span>; })}</div></div>)}</div></div></section>;
}
