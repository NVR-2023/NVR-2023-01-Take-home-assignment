import { createContext } from "react";
import { SecuritiesContextType } from "../../types/securities-types";

export const SecuritiesDataContext = createContext<SecuritiesContextType>({
  securitiesData: [],
  isLoading: true,
});
