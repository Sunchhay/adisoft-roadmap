"use client";

import { useMemo, useState } from "react";
import { Box, CreditCard, Search, Tag } from "lucide-react";
import type { PaymentMethodsData } from "@/types/payment-method";
import { formatCountryFlags } from "./CountryFlags";
import { ProviderSection } from "./ProviderSection";

export function PaymentMethodsExplorer({ data }: { data: PaymentMethodsData }) {
  const [provider, setProvider] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");
  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(() => new Set());

  const allMethods = data.providers.flatMap((item) => item.methods);
  const countryCodesByLabel = new Map<string, string[]>();
  allMethods.forEach((method) => countryCodesByLabel.set(method.country, method.countryCodes));
  const countries = [...countryCodesByLabel.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([value, codes]) => ({ value, label: `${formatCountryFlags(codes)} ${value}` }));
  const types = [...new Set(allMethods.map((method) => method.type))].sort();
  const numericFees = allMethods.map((method) => Number.parseFloat(method.fee)).filter(Number.isFinite);
  const lowestFee = allMethods.some((method) => method.fee === "Free") ? "Free" : numericFees.length ? `${Math.min(...numericFees)}%` : "Not specified";
  const sections = useMemo(() => data.providers
    .filter((item) => !provider || item.id === provider)
    .map((item) => ({
      provider: item,
      methods: item.methods.filter((method) =>
        (!country || method.country === country || method.isGlobal) &&
        (!type || method.type === type) &&
        (!query.trim() || `${item.name} ${method.name} ${method.type} ${method.country} ${method.fee}`.toLowerCase().includes(query.trim().toLowerCase()))
      ),
    }))
    .filter((item) => item.methods.length), [data.providers, provider, country, type, query]);

  function toggleCollapsed(id: string) {
    setCollapsedIds((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  }

  return <main className="min-h-screen bg-[#f5f7fb] px-3 py-5 text-slate-900 sm:px-5 lg:px-6">
    <div className="mx-auto max-w-[1600px]">
      <header className="flex flex-wrap items-start justify-between gap-6 pb-5">
        <div><h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{data.title}</h1><p className="mt-2 text-base text-slate-600 sm:text-lg">{data.description}</p></div>
        <div className="grid w-full gap-2 sm:w-auto sm:grid-cols-3">
          <SummaryStat icon={<Box size={25} />} value={data.providers.length.toString()} label="Providers" />
          <SummaryStat icon={<CreditCard size={25} />} value={allMethods.length.toString()} label="Methods" />
          <SummaryStat icon={<Tag size={25} />} value={lowestFee} label="Lowest Fee" reversed />
        </div>
      </header>

      <section aria-label="Filter payment methods" className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
        <FilterSelect label="Provider" placeholder="All providers" value={provider} onChange={setProvider} options={data.providers.map((item) => ({ value: item.id, label: item.name }))} />
        <FilterSelect label="Country" placeholder="🌐 All countries" value={country} onChange={setCountry} options={countries} />
        <FilterSelect label="Type" placeholder="All types" value={type} onChange={setType} options={types.map((item) => ({ value: item, label: item }))} />
        <label className="relative min-w-[220px] flex-1"><span className="sr-only">Search payment methods</span><Search size={20} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search payment methods..." className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white" /></label>
        <button type="button" onClick={() => { setProvider(""); setCountry(""); setType(""); setQuery(""); }} className="rounded-md px-2 py-2 text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-indigo-500">Clear filters</button>
      </section>

      <div className="space-y-3">{sections.length ? sections.map(({ provider: item, methods }) => <ProviderSection key={item.id} provider={item} methods={methods} collapsed={collapsedIds.has(item.id)} onToggle={() => toggleCollapsed(item.id)} />) : <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center"><h2 className="font-semibold">No methods found</h2><p className="mt-1 text-sm text-slate-500">Try another search or clear the filters.</p></div>}</div>
      <p className="mt-5 text-xs text-slate-500">{data.note}</p>
    </div>
  </main>;
}

function SummaryStat({ icon, value, label, reversed = false }: { icon: React.ReactNode; value: string; label: string; reversed?: boolean }) {
  return <div className="flex min-w-[160px] items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-3 text-indigo-500 shadow-sm">{icon}<div className="leading-tight">{reversed ? <><span className="block text-sm text-slate-500">{label}</span><strong className="text-xl text-slate-950">{value}</strong></> : <><strong className="block text-xl text-slate-950">{value}</strong><span className="text-sm text-slate-500">{label}</span></>}</div></div>;
}

function FilterSelect({ label, placeholder, value, onChange, options }: { label: string; placeholder: string; value: string; onChange: (value: string) => void; options: { value: string; label: string }[] }) {
  return <label className="flex min-w-[230px] flex-1 items-center gap-3 lg:min-w-0 lg:flex-none"><span className="shrink-0 text-sm font-semibold text-slate-700">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="h-11 min-w-0 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:bg-white lg:w-[190px]"><option value="">{placeholder}</option>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>;
}
