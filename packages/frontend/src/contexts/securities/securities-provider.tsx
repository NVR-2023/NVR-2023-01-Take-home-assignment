import { ReactNode } from "react";
import { SecuritiesContext } from "./securities-context";
import { SecuritiesContextType } from "../../types/securities-types";

type SecuritiesProviderProps = {
  value: SecuritiesContextType;
  children: ReactNode;
};

export const SecuritiesProvider = ({ value, children }: SecuritiesProviderProps) => {
  return <SecuritiesContext.Provider value={value}>{children}</SecuritiesContext.Provider>;
};
