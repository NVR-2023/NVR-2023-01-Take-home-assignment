export type PriceType = {
  date: string;
  close: string;
  volume: string;
};

export type SecurityType = {
  ticker: string;
  securityName: string;
  sector: string;
  country: string;
  trend: number;
  prices: PriceType[];
};


