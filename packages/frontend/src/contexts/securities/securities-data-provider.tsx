import { useEffect, useState, ReactNode } from "react";
import { SecuritiesContextProvider } from "./securities-context-provider";
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

  const contextValue: SecuritiesContextType = { securitiesData: securities, isLoading };

  return <SecuritiesContextProvider value={contextValue}>{children}</SecuritiesContextProvider>;
};

export default SecuritiesDataProvider;
