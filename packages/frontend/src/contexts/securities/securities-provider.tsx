import { ReactNode } from "react";
import { SecuritiesContext, SecuritiesContextType } from "./securities-context";

type SecuritiesProviderProps = {
  value: SecuritiesContextType;
  children: ReactNode;
};

export const SecuritiesProvider = ({ value, children }: SecuritiesProviderProps) => {
  return <SecuritiesContext.Provider value={value}>{children}</SecuritiesContext.Provider>;
};
