import { useEffect, useState, ReactNode } from "react";
import { SecuritiesProvider } from "./securities-provider";
import { Security, SecuritiesContextType } from "./securities-context";

type SecuritiesDataProviderProps = {
  children: ReactNode;
};

const SecuritiesDataProvider = ({ children }: SecuritiesDataProviderProps) => {
  const [securities, setSecurities] = useState<Security[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllSecurities = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/securities");
        const data: Security[] = await response.json();
        setSecurities(data);
      } catch (error) {
        console.error(`Error fetching securities: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllSecurities();
  }, []);

  const contextValue: SecuritiesContextType = { securities, isLoading };

  return <SecuritiesProvider value={contextValue}>{children}</SecuritiesProvider>;
};

export default SecuritiesDataProvider;
