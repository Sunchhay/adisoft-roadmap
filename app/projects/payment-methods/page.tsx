import type { Metadata } from "next";
import { PaymentMethodsExplorer } from "@/components/payment-methods/PaymentMethodsExplorer";
import paymentMethods from "@/data/payment-methods.json";
import type { PaymentMethodsData } from "@/types/payment-method";

export const metadata: Metadata = {
  title: "Payment Methods Review | Adisoft",
  description: paymentMethods.description,
};

export default function PaymentMethodsPage() {
  return <PaymentMethodsExplorer data={paymentMethods as PaymentMethodsData} />;
}
