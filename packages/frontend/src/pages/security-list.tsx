import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import SecuritiesTable from "../sections/securities-table";
import Container from "../sections/container";
import Loader from "../components/loader";
import { Grow, Fade } from "@mui/material";

const SecurityList = () => {
  const { securitiesData, isLoading } = useSecuritiesDataContext();

  return (
    <div className="w-full min-h-screen flex justify-center px-7 py-1 bg-neutral-100">
      {isLoading ? (
        <Loader />
      ) : (
        <Fade in={!isLoading} timeout={500}>
          <div style={{ width: "100%" }}>
            <Grow in={!isLoading} timeout={1000} style={{ transformOrigin: "top" }}>
              <div>
                <Container title="Securities">
                  {isLoading ? <Loader /> : <SecuritiesTable data={securitiesData} />}
                </Container>
              </div>
            </Grow>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default SecurityList;
