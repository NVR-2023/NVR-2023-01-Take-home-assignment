import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import Container from "../sections/container";
import SecurityProfile from "../components/security-profile";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorToastWithRedirect from "../components/error-toast-with-redirect";
import Chart from "../sections/chart";
import { Grow, Fade } from "@mui/material";

const SecurityDetails = () => {
  const { isLoading, securitiesData } = useSecuritiesDataContext();
  const [isSymbolValid, setIsSymbolValid] = useState(false);

  const { symbol } = useParams();
  const symbolDetails = securitiesData.find((security) => security.ticker === symbol);
  const securityId = symbolDetails?.id;

  useEffect(() => {
    const isSymbolValid = Boolean(symbolDetails);
    setIsSymbolValid(isSymbolValid);
  }, [symbolDetails]);

  return (
    <div className="w-full min-h-screen flex justify-center px-7 py-1 bg-neutral-100">
      <Fade in={!isLoading} timeout={500}>
        <div style={{ width: "100%" }}>
          <Grow in={!isLoading} timeout={1000} style={{ transformOrigin: "top" }}>
            <div>
              <Container title="Security Detail">
                <div className="space-y-3">
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
                  <Chart securityId={securityId!} />
                </div>
              </Container>
            </div>
          </Grow>
        </div>
      </Fade>
    </div>
  );
};

export default SecurityDetails;
