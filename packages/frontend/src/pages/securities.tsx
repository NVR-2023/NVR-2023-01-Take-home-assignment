import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import SecuritiesTable from "../sections/securities-table";
import TableContainer from "../sections/table-container";
import Loader from "../components/loader";

const Securities = () => {
  const { securitiesData, isLoading } = useSecuritiesDataContext();

  return (
    <div className="w-full min-h-screen flex justify-center p-7 bg-neutral-100">
      <TableContainer title="Securities">
        {isLoading ? <Loader /> : <SecuritiesTable data={securitiesData} />}
      </TableContainer>
    </div>
  );
};

export default Securities;
