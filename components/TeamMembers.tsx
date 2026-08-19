import { Mail, Users } from "lucide-react";
import type { TeamMember } from "@/types/project";

export function TeamMembers({ members, projectName }: { members: TeamMember[]; projectName: string }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,.03)]">
      <div className="flex flex-col justify-between gap-3 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-950"><Users size={18} />Project team</h2>
          <p className="mt-1 text-sm text-slate-500">{projectName} team members and responsibilities.</p>
        </div>
        <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{members.length} members</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead><tr className="border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-400"><th className="w-16 px-5 py-3">No.</th><th className="px-5 py-3">Position</th><th className="px-5 py-3">Nickname</th><th className="px-5 py-3">Full name</th><th className="px-5 py-3">Email</th></tr></thead>
          <tbody>{members.map((member, index) => <tr key={member.email} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70"><td className="px-5 py-4 font-mono text-xs text-slate-400">{String(index + 1).padStart(2, "0")}</td><td className="px-5 py-4 font-medium text-slate-800">{member.position}</td><td className="px-5 py-4"><span className="inline-flex rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{member.nickname}</span></td><td className="px-5 py-4 text-slate-600">{member.fullName}</td><td className="px-5 py-4"><a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-slate-500 transition hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"><Mail size={14} />{member.email}</a></td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
