import React, { ReactNode } from "react";
import { SecuritiesContext, SecuritiesContextType } from "./securities-context";

type SecuritiesProviderProps = {
  value: SecuritiesContextType;
  children: ReactNode;
};

export const SecuritiesProvider: React.FC<SecuritiesProviderProps> = ({ value, children }) => {
  return <SecuritiesContext.Provider value={value}>{children}</SecuritiesContext.Provider>;
};
