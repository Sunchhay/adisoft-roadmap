import { Users } from "lucide-react";
import type { Project, TeamMember } from "@/types/project";
import { TeamMemberCard } from "./TeamMemberCard";

function getGroup(member: TeamMember) {
  if (member.group) return member.group;
  const role = member.position.toLowerCase();
  if (role.includes("project owner")) return "Project Owner";
  if (role.includes("pm & sa")) return "PM & SA";
  if (role.includes("ux/ui")) return "UX/UI";
  if (role.includes("quality assurance")) return "Quality Assurance";
  if (role.includes("developer")) return "Development";
  if (role.includes("data")) return "Data";
  if (role.includes("designer") || role.includes("artist") || role.includes("creative") || role.includes("cinematic") || role.includes("sound") || role.includes("animator") || role.includes("vfx")) return "Creative Production";
  return "Other Stakeholders";
}

export function TeamMembers({ members, projectName, accent }: { members: TeamMember[]; projectName: string; accent: Project["accent"] }) {
  const groups = members.reduce<Map<string, { member: TeamMember; number: number }[]>>((result, member, index) => {
    const group = getGroup(member);
    result.set(group, [...(result.get(group) ?? []), { member, number: index + 1 }]);
    return result;
  }, new Map());

  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.03)] sm:p-6"><div className="flex flex-col justify-between gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-center"><div><h2 className="flex items-center gap-2 text-lg font-semibold text-slate-950"><Users size={18} />Project Team</h2><p className="mt-1 text-sm text-slate-500">{projectName} team members and stakeholders.</p></div><span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{members.length} members</span></div><div className="mt-6 space-y-7">{Array.from(groups, ([group, groupedMembers]) => <section key={group}><div className="mb-3 flex items-center gap-3"><h3 className="text-xs font-bold uppercase tracking-[.12em] text-slate-500">{group}</h3><span className="h-px flex-1 bg-slate-100" /><span className="text-[10px] font-medium text-slate-400">{groupedMembers.length}</span></div><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">{groupedMembers.map(({ member, number }) => <TeamMemberCard key={member.email} member={member} number={number} accent={accent} />)}</div></section>)}</div></section>;
}
