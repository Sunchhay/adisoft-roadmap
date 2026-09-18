"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";

export function MethodLogo({ src, name, provider = false }: { src: string; name: string; provider?: boolean }) {
  const [failed, setFailed] = useState(false);

  return <span className={`flex shrink-0 items-center justify-center overflow-hidden rounded-lg text-slate-500 ${provider ? "size-11" : "h-12 w-16 sm:h-14 sm:w-20"}`}>
    {failed ? <CreditCard aria-label={`${name} logo unavailable`} size={25} strokeWidth={1.8} /> :
      // Logo URLs are supplied by the data file and may have arbitrary hosts.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={`${name} logo`} className="block h-full w-full object-contain" onError={() => setFailed(true)} />}
  </span>;
}
