import { ChevronDown } from "lucide-react";
import type { PaymentMethod, PaymentProvider } from "@/types/payment-method";
import { MethodLogo } from "./MethodLogo";
import { CountryFlags } from "./CountryFlags";
import { PaymentMethodCard } from "./PaymentMethodCard";

export function ProviderSection({ provider, methods, collapsed, onToggle }: { provider: PaymentProvider; methods: PaymentMethod[]; collapsed: boolean; onToggle: () => void }) {
  return <section aria-labelledby={`${provider.id}-heading`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex flex-wrap items-center gap-3">
      <MethodLogo src={provider.logoUrl} name={provider.name} provider />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3"><h2 id={`${provider.id}-heading`} className="text-xl font-semibold tracking-tight text-slate-950">{provider.name}</h2><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{methods.length} methods</span></div>
        <p className="mt-0.5 text-sm text-slate-500">{provider.description}</p>
      </div>
      <div className="ml-auto flex items-center gap-3 text-sm text-slate-600"><span className="hidden sm:inline">Supported in</span><CountryFlags codes={provider.supportedCountryCodes} /><span>{provider.supportedIn}</span><button type="button" onClick={onToggle} aria-label={`${collapsed ? "Expand" : "Collapse"} ${provider.name} methods`} aria-expanded={!collapsed} aria-controls={`${provider.id}-methods`} className="ml-3 rounded-md p-1 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-indigo-500"><ChevronDown size={19} className={`transition-transform ${collapsed ? "" : "rotate-180"}`} /></button></div>
    </div>
    {!collapsed && <div id={`${provider.id}-methods`} className="mt-3 grid gap-2 md:grid-cols-2">{methods.map((method) => <PaymentMethodCard key={method.id} method={method} providerName={provider.name} />)}</div>}
  </section>;
}
