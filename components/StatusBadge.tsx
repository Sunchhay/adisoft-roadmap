import type { ProjectStatus } from "@/types/project";

const styles: Record<ProjectStatus, string> = {
  done: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  "in-progress": "bg-amber-50 text-amber-700 ring-amber-600/15",
  planned: "bg-sky-50 text-sky-700 ring-sky-600/15",
  tbc: "bg-slate-100 text-slate-600 ring-slate-500/15",
  blocked: "bg-red-50 text-red-700 ring-red-600/15",
};

const labels: Record<ProjectStatus, string> = {
  done: "Done",
  "in-progress": "In Progress",
  planned: "Planned",
  tbc: "TBC",
  blocked: "Blocked",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${styles[status]}`}>{labels[status]}</span>;
}
