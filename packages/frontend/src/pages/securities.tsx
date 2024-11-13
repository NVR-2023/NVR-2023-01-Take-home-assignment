import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import SecuritiesTable from "../sections/securities-table";

const Securities = () => {
  const { securitiesData, isLoading } = useSecuritiesDataContext();

  return (
    <div className="w-full min-h-screen p-7 bg-neutral-100">
      <div>
        {isLoading && <p>Loading..</p>}
        <SecuritiesTable data={securitiesData} />
      </div>
    </div>
  );
};

export default Securities;
