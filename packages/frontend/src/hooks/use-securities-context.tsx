import { useContext } from "react";
import { SecuritiesContext } from "../contexts/securities/securities-context";

export const useSecuritiesContext = () => {
  const context = useContext(SecuritiesContext);
  if (!context) {
    throw new Error("useSecuritiesContext must be used within a SecuritiesProvider");
  }
  return context;
};
