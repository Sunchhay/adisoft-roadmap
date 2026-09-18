import { Globe2 } from "lucide-react";

export function CountryFlags({ codes }: { codes: string[] }) {
  if (codes.length === 0) return <Globe2 size={14} className="shrink-0" aria-hidden="true" />;

  return <span className="inline-flex shrink-0 items-center gap-0.5" aria-hidden="true">
    {codes.slice(0, 3).map((code) => <span key={code} className="text-base leading-none">{String.fromCodePoint(...code.toUpperCase().split("").map((letter) => 127397 + letter.charCodeAt(0)))}</span>)}
    {codes.length > 3 && <span className="ml-0.5 text-[10px] text-slate-500">+{codes.length - 3}</span>}
  </span>;
}
