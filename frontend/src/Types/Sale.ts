export interface ISaleAttrs {
  name: string;
  phone: string;
  deliveryMethod: "selfPickup" | "delivery";
  address: string;
  floor: number | undefined;
  intercom: string | undefined;
}

export interface ISale {
  data: ISaleAttrs;
}
