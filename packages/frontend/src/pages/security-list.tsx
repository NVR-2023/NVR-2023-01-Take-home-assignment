import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import SecuritiesTable from "../sections/securities-table";
import Container from "../sections/container";
import Loader from "../components/loader";

const SecurityList = () => {
  const { securitiesData, isLoading } = useSecuritiesDataContext();

  return (
    <div className="w-full min-h-screen flex justify-center p-7 bg-neutral-100">
      <Container title="Securities">
        {isLoading ? <Loader /> : <SecuritiesTable data={securitiesData} />}
      </Container>
    </div>
  );
};

export default SecurityList;
