import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import SecuritiesTable from "../sections/securities-table";

const Securities = () => {
  const { securitiesData, isLoading } = useSecuritiesDataContext();

  return (
    <div className="w-full min-h-screen p-7 bg-neutral-100">
      <div>
        Securities page
        {isLoading && <p>Loading..</p>}
        {securitiesData &&
          securitiesData.map((security, index) => (
            <div key={index}>
              <p>{security.securityName}</p>
              <p>{security.ticker}</p>
              <p>{security.sector}</p>
              <p>{security.id}</p>
              <p>{security.trend}</p>
              <p>{security.country}</p>
            </div>
          ))}
      </div>

      <SecuritiesTable />
    </div>
  );
};

export default Securities;
