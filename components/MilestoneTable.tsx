import type { Milestone } from "@/types/project";

export function MilestoneTable({ milestones }: { milestones: Milestone[] }) {
  const hasDirection = milestones.some((item) => item.direction);
  const hasOutcome = milestones.some((item) => item.outcome);
  return <div className="overflow-x-auto"><table className="w-full min-w-[620px] border-collapse text-left text-sm"><thead><tr className="border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-400"><th className="w-12 px-4 py-3">#</th><th className="px-4 py-3">Milestone</th><th className="whitespace-nowrap px-4 py-3">Target</th>{hasDirection && <th className="px-4 py-3">Status / Direction</th>}{hasOutcome && <th className="px-4 py-3">Outcome / Exit Criteria</th>}</tr></thead><tbody>{milestones.map((item, index) => <tr key={`${item.milestone}-${index}`} className="border-b border-slate-100 last:border-0"><td className="px-4 py-4 font-mono text-xs text-slate-400">{String(index + 1).padStart(2, "0")}</td><td className="px-4 py-4 font-medium text-slate-800">{item.milestone}</td><td className="whitespace-nowrap px-4 py-4 text-slate-600">{item.target}</td>{hasDirection && <td className="max-w-md px-4 py-4 leading-6 text-slate-500">{item.direction ?? "—"}</td>}{hasOutcome && <td className="px-4 py-4 text-slate-500">{item.outcome ?? "—"}</td>}</tr>)}</tbody></table></div>;
}
