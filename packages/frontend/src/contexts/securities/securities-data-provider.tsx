import { useEffect, useState, ReactNode } from "react";
import { SecuritiesProvider } from "./securities-provider";
import { SecuritiesContextType, SecurityFrontendType } from "../../types/securities-types";

type SecuritiesDataProviderProps = {
  children: ReactNode;
};

const SecuritiesDataProvider = ({ children }: SecuritiesDataProviderProps) => {
  const [securities, setSecurities] = useState<SecurityFrontendType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllSecurities = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/securities");
        const data: SecurityFrontendType[] = await response.json();
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
