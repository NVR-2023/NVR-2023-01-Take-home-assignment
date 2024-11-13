import { createContext } from "react";
import { SecuritiesContextType } from "../../types/securities-types";

export const SecuritiesContext = createContext<SecuritiesContextType>({
  securities: [],
  isLoading: true,
});
