import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import SecuritiesTable from "../sections/securities-table";
import Container from "../sections/container";
import Loader from "../components/loader";
import ErrorToastWithRedirect from "../components/error-toast-with-redirect";
import { Grow, Fade } from "@mui/material";

const SecurityList = () => {
  const { securitiesData, isSecurityContextLoading, hasSecurityContextErrors } = useSecuritiesDataContext();

  return (
    <div className="w-full min-h-screen flex justify-center px-7 py-1 bg-neutral-100 relative">
      {isSecurityContextLoading ? (
        <Loader />
      ) : (
        <Fade in={!isSecurityContextLoading} timeout={500}>
          <div style={{ width: "100%" }}>
            <Grow in={!isSecurityContextLoading} timeout={1000} style={{ transformOrigin: "top" }}>
              <div>
                <Container title="Securities">
                  {isSecurityContextLoading ? (
                    <Loader />
                  ) : (
                    <SecuritiesTable data={securitiesData} />
                  )}
                </Container>
              </div>
            </Grow>
          </div>
        </Fade>
      )}

      {hasSecurityContextErrors && <ErrorToastWithRedirect errorMessage="Error loading data" />}
    </div>
  );
};

export default SecurityList;
