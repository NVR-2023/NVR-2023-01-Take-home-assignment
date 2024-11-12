export type PriceType = {
  date: Date;
  close: number;
  volume: number;
};

export type SecurityType = {
  ticker: string;
  securityName: string;
  sector: string;
  country: string;
  trend: number;
  prices: PriceType[];
};


