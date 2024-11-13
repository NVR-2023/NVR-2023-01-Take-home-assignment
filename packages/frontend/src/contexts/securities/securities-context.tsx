import { createContext } from "react";

export type Security = {
  symbol: string;
  name: string;
  sector: string;
  country: string;
  trend: string;
};

export type SecuritiesContextType = {
  securities: Security[];
  isLoading: boolean;
};

export const SecuritiesContext = createContext<SecuritiesContextType>({
  securities: [],
  isLoading: true,
});
