import type { ProjectStatus } from "@/types/project";

const styles: Record<ProjectStatus, string> = {
  completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  "in-progress": "bg-amber-50 text-amber-700 ring-amber-600/15",
  confirmed: "bg-blue-50 text-blue-700 ring-blue-600/15",
  conditional: "bg-violet-50 text-violet-700 ring-violet-600/15",
  planned: "bg-sky-50 text-sky-700 ring-sky-600/15",
  future: "bg-slate-100 text-slate-600 ring-slate-500/15",
  tbc: "bg-slate-100 text-slate-600 ring-slate-500/15",
};

export function StatusBadge({ status, label }: { status: ProjectStatus; label?: string }) {
  return <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${styles[status]}`}>{label ?? status.replace("-", " ")}</span>;
}
