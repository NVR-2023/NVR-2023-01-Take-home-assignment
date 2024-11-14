import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import TableContainer from "../sections/table-container";
import Loader from "../components/loader";
import SecurityProfile from "../components/security-profile";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorToastWithRedirect from "../components/error-toast-with-redirect";

const SecurityDetail = () => {
  const { isLoading, securitiesData } = useSecuritiesDataContext();
  const [isSymbolValid, setIsSymbolValid] = useState(true);

  const { symbol } = useParams();
  const symbolDetails = securitiesData.find((security) => security.ticker === symbol);

  useEffect(() => {
    setIsSymbolValid(Boolean(symbolDetails));
  }, [symbolDetails]);

  return (
    <div className="w-full min-h-screen flex justify-center p-7 bg-neutral-100">
      <TableContainer title="Security Detail">
        {isLoading ? <Loader /> : <p>finished loading</p>}

        {isSymbolValid && symbolDetails ? (
          <SecurityProfile
            ticker={symbolDetails.ticker}
            securityName={symbolDetails.securityName}
            country={symbolDetails.country}
            sector={symbolDetails.sector}
          />
        ) : (
          !isLoading && (
            <ErrorToastWithRedirect
              redirectUrl={"/security-list"}
              errorMessage={"Invalid security symbol"}
            />
          )
        )}
      </TableContainer>
    </div>
  );
};

export default SecurityDetail;
