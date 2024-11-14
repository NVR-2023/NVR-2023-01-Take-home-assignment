import { useSecuritiesDataContext } from "../hooks/use-securities-data-context";
import TableContainer from "../sections/table-container";
import Loader from "../components/loader";

const SecurityDetail = () => {
  const { isLoading } = useSecuritiesDataContext();

  return (
    <div className="w-full min-h-screen flex justify-center p-7 bg-neutral-100">
      <TableContainer title="Security Detail">
        {isLoading ? <Loader /> : <p>finished loading</p>}
      </TableContainer>
    </div>
  );
};

export default SecurityDetail;
