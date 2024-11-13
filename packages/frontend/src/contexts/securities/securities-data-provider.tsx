import React, { useEffect, useState, ReactNode } from "react"; // Import ReactNode from react
import { SecuritiesProvider } from "./securities-provider";
import { Security, SecuritiesContextType } from "./securities-context";

type SecuritiesDataProviderProps = {
  children: ReactNode;
};

const SecuritiesDataProvider: React.FC<SecuritiesDataProviderProps> = ({ children }) => {
  const [securities, setSecurities] = useState<Security[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSecurities = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/securities");
        const data: Security[] = await response.json();
        setSecurities(data);
      } catch (error) {
        console.error("Error fetching securities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSecurities();
  }, []);

  const contextValue: SecuritiesContextType = { securities, loading };

  return <SecuritiesProvider value={contextValue}>{children}</SecuritiesProvider>;
};

export default SecuritiesDataProvider;
