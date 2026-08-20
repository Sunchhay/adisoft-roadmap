import { Mail } from "lucide-react";
import type { TeamMember } from "@/types/project";

const accentStyles = {
  purple: "bg-violet-50 text-violet-700 ring-violet-600/10",
  blue: "bg-blue-50 text-blue-700 ring-blue-600/10",
  orange: "bg-orange-50 text-orange-700 ring-orange-600/10",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
};

function getInitials(fullName: string) {
  const names = fullName.trim().split(/\s+/);
  return `${names[0]?.[0] ?? ""}${names.at(-1)?.[0] ?? ""}`.toUpperCase();
}

export function TeamMemberCard({ member, number, accent }: { member: TeamMember; number: number; accent: keyof typeof accentStyles }) {
  return <article className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,.025)] transition hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(15,23,42,.06)]"><div className="flex items-start gap-3"><span className={`grid size-10 shrink-0 place-items-center rounded-full text-xs font-bold ring-1 ring-inset ${accentStyles[accent]}`}>{getInitials(member.fullName)}</span><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><h3 className="font-semibold text-slate-950">{member.nickname}</h3><span className="font-mono text-[10px] text-slate-400">{String(number).padStart(2, "0")}</span></div><p className="mt-0.5 break-words text-xs leading-5 text-slate-500">{member.fullName}</p></div></div><p className="mt-4"><span className="inline-flex rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">{member.position}</span></p><a href={`mailto:${member.email}`} className="mt-3 flex min-w-0 items-start gap-2 text-xs leading-5 text-slate-500 transition hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"><Mail className="mt-0.5 shrink-0" size={13} /><span className="min-w-0 break-all">{member.email}</span></a></article>;
}
