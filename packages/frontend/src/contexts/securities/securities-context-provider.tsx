import { ReactNode } from "react";
import { SecuritiesDataContext } from "./securities-data-context";
import { SecuritiesContextType } from "../../types/securities-types";

type SecuritiesProviderProps = {
  value: SecuritiesContextType;
  children: ReactNode;
};

export const SecuritiesContextProvider = ({ value, children }: SecuritiesProviderProps) => {
  return <SecuritiesDataContext.Provider value={value}>{children}</SecuritiesDataContext.Provider>;
};
