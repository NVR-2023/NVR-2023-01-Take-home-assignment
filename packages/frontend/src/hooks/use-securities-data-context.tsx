import { useContext } from "react";
import { SecuritiesDataContext } from "../contexts/securities/securities-data-context";

export const useSecuritiesDataContext = () => {
  const context = useContext(SecuritiesDataContext);
  if (!context) {
    throw new Error("useSecuritiesContext must be used within a SecuritiesProvider");
  }
  return context;
};
