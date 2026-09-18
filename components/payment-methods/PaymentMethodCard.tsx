import type { PaymentMethod } from "@/types/payment-method";
import { CountryFlags } from "./CountryFlags";
import { MethodLogo } from "./MethodLogo";

export function PaymentMethodCard({ method, providerName }: { method: PaymentMethod; providerName: string }) {
  const shortFee = method.fee === "Free" || /^\d+(?:\.\d+)?%?$/.test(method.fee);
  const numericFee = /\d/.test(method.fee);

  return <article className="flex min-h-[84px] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2.5 sm:px-4">
    <MethodLogo src={method.logoUrl} name={method.name} />
    <span className="min-w-0 flex-1">
      <span className="block break-words text-sm font-semibold text-slate-900">{method.name}</span>
      <span className="mt-0.5 block text-xs leading-5 text-slate-500">Provider: {providerName}<span className="mx-2 text-slate-300">|</span>Type: {method.type}</span>
      <span className="mt-1 inline-flex max-w-full items-start gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-0.5 text-xs leading-5 text-slate-600"><CountryFlags codes={method.countryCodes} /><span className="break-words">{method.country}</span></span>
    </span>
    <span className="flex w-[108px] shrink-0 flex-col items-end border-l border-slate-200 pl-2 text-right sm:w-[136px] sm:pl-3">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">Fee</span>
      <span className={`mt-0.5 whitespace-nowrap font-bold leading-tight tabular-nums ${shortFee ? "text-2xl" : numericFee ? "text-sm sm:text-base" : "text-xs sm:text-sm"} ${method.fee === "Free" ? "text-[#16A34A]" : numericFee ? "text-[#4F46E5]" : "text-[#64748B]"}`}>{method.fee}</span>
    </span>
  </article>;
}
