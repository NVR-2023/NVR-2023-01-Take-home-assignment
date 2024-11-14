import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import TableContainer from "../sections/table-container";
import SecurityProfile from "../components/security-profile";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorToastWithRedirect from "../components/error-toast-with-redirect";

const SecurityDetail = () => {
  const { isLoading, securitiesData } = useSecuritiesDataContext();
  const [isSymbolValid, setIsSymbolValid] = useState(true);

  const { symbol } = useParams();
  const symbolDetails = securitiesData.find((security) => security.ticker === symbol);
  //const securityId = symbolDetails?.id;

  useEffect(() => {
    const isSymbolValid = Boolean(symbolDetails);
    setIsSymbolValid(isSymbolValid);


  }, [symbolDetails]);

  return (
    <div className="w-full min-h-screen flex justify-center p-7 bg-neutral-100">
      <TableContainer title="Security Detail">
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
