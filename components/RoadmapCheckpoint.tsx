import { Anchor, Check, Code2, Flag, Gamepad2, Globe2, Layers3, LockKeyhole, Package, Rocket, ShieldCheck, Sparkles, Target, TestTube2, Users } from "lucide-react";
import type { RoadmapCheckpoint as Checkpoint } from "@/types/project";
import { StatusBadge } from "./StatusBadge";

const icons = { anchor: Anchor, check: Check, code: Code2, flag: Flag, gamepad: Gamepad2, globe: Globe2, layers: Layers3, lock: LockKeyhole, package: Package, rocket: Rocket, shield: ShieldCheck, sparkles: Sparkles, target: Target, test: TestTube2, users: Users };

export function RoadmapCheckpoint({ checkpoint, accent }: { checkpoint: Checkpoint; accent: string }) {
  const Icon = icons[checkpoint.icon];
  return <li className="relative w-56 shrink-0 px-3 text-center first:pl-0 last:pr-0"><div className={`relative z-10 mx-auto grid size-12 place-items-center rounded-full border-4 border-white text-white shadow-sm ${accent}`}><Icon size={19} strokeWidth={2.2} /></div><div className="mt-5 flex min-h-52 flex-col items-center"><p className="text-xs font-bold leading-5 text-slate-900">{checkpoint.phase}</p><h3 className="mt-2 text-sm font-semibold leading-5 text-slate-700">{checkpoint.title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{checkpoint.description}</p><div className="mt-auto flex flex-col items-center gap-2 pt-4"><span className="rounded-md bg-slate-100 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600">{checkpoint.target}</span><StatusBadge status={checkpoint.status} label={checkpoint.statusLabel} /></div></div></li>;
}
