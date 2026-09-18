export type PaymentMethod = {
  id: string;
  name: string;
  type: string;
  fee: string;
  country: string;
  countryCodes: string[];
  isGlobal?: boolean;
  logoUrl: string;
};

export type PaymentProvider = {
  id: string;
  name: string;
  description: string;
  supportedIn: string;
  supportedCountryCodes: string[];
  logoUrl: string;
  methods: PaymentMethod[];
};

export type PaymentMethodsData = {
  title: string;
  description: string;
  note: string;
  providers: PaymentProvider[];
};
