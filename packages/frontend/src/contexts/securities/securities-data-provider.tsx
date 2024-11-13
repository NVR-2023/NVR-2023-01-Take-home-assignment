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
        const urlEndpoint = "http://localhost:3000/api/v1/private/securities";
        const response = await fetch(urlEndpoint);
        const data = await response.json();
        if (data.ok) {
          const sieveData = data.data;
          setSecurities(sieveData);
        }
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
