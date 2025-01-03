export type SecurityFrontendType = {
  id: number;
  ticker: string;
  securityName: string;
  sector: string;
  country: string;
  trend: number;
};

export type SecuritiesContextType = {
  securitiesData: SecurityFrontendType[];
  isSecuritiesDataContextLoading: boolean;
  hasSecuritiesDataContextErrors?: boolean;
};
