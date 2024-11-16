import { useEffect, useState, ReactNode } from "react";
import { SecuritiesContextProvider } from "./securities-context-provider";
import { SecuritiesContextType, SecurityFrontendType } from "../../types/securities-types";

type SecuritiesDataProviderProps = {
  children: ReactNode;
};

const SecuritiesDataProvider = ({ children }: SecuritiesDataProviderProps) => {
  const [securities, setSecurities] = useState<SecurityFrontendType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllSecurities = async () => {
      setIsLoading(true);
      setHasErrors(false);
      try {
        const endpointUrl = "http://localhost:3000/api/v1/private/securities";
        const response = await fetch(endpointUrl);
        const data = await response.json();
        if (data.ok) {
          setSecurities(data.data);
        } else {
          setHasErrors(true);
        }
      } catch (error) {
        console.error(`Error fetching securities: ${error}`);
        setHasErrors(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllSecurities();
  }, []);

  const contextValue: SecuritiesContextType = {
    securitiesData: securities,
    isSecurityContextLoading: isLoading,
    hasSecurityContextErrors: hasErrors,
  };

  return <SecuritiesContextProvider value={contextValue}>{children}</SecuritiesContextProvider>;
};

export default SecuritiesDataProvider;
