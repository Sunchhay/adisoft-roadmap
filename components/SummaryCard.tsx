export function SummaryCard({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,.03)]"><p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{label}</p><p className="text-sm font-semibold leading-5 text-slate-900">{value}</p></div>;
}
