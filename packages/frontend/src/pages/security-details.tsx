import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import Container from "../sections/container";
import SecurityProfile from "../components/security-profile";
import { useParams } from "react-router-dom";
import ErrorToastWithRedirect from "../components/error-toast-with-redirect";
import Chart from "../sections/chart";
import { Grow, Fade } from "@mui/material";

const SecurityDetails = () => {
  const { isSecuritiesDataContextLoading, hasSecuritiesDataContextErrors, securitiesData } =
    useSecuritiesDataContext();
  const { symbol } = useParams();
  const symbolDetails = securitiesData.find((security) => security.ticker === symbol);
  const securityId = symbolDetails?.id ?? null;

  return (
    <div className="relative  w-full min-h-screen flex justify-center px-7 py-1 bg-neutral-100">
      {!isSecuritiesDataContextLoading && hasSecuritiesDataContextErrors && (
        <ErrorToastWithRedirect
          redirectUrl={"/security-list"}
          errorMessage={"Error loading security symbol"}
        />
      )}
      {!symbolDetails && (
        <ErrorToastWithRedirect
          redirectUrl={"/security-list"}
          errorMessage={"Invalid security symbol"}
        />
      )}
      {symbolDetails && (
        <Fade in={!isSecuritiesDataContextLoading} timeout={500}>
          <div style={{ width: "100%" }}>
            <Grow
              in={!isSecuritiesDataContextLoading}
              timeout={1000}
              style={{ transformOrigin: "top" }}>
              <div>
                <Container title="Security Detail">
                  <div className="space-y-3">
                    <SecurityProfile
                      ticker={symbolDetails.ticker}
                      securityName={symbolDetails.securityName}
                      country={symbolDetails.country}
                      sector={symbolDetails.sector}
                    />
                    <Chart securityId={securityId!} />
                  </div>
                </Container>
              </div>
            </Grow>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default SecurityDetails;
