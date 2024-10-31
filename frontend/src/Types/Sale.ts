export interface ISaleAttrs {
  name: string;
  phone: string;
  deliveryMethod: "selfPickup" | "delivery";
  address: string;
  floor: string | undefined;
  intercom: string | undefined;
  products: string[];
}

export interface ISale {
  data: ISaleAttrs;
}
