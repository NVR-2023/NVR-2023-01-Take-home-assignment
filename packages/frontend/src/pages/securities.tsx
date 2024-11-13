import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import SecuritiesTable from "../sections/securities-table";
import TableContainer from "../sections/table-container";

const Securities = () => {
  const { securitiesData, isLoading } = useSecuritiesDataContext();

  return (
    <div className="w-full min-h-screen p-7 bg-neutral-100">
      <TableContainer title="Securities">
        {isLoading && <p>Loading..</p>}
        <SecuritiesTable data={securitiesData} />
      </TableContainer>
    </div>
  );
};

export default Securities;
