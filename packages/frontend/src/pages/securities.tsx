import { useSecuritiesContext } from "../hooks/use-securities-context";

const Securities = () => {
  const { securities, isLoading } = useSecuritiesContext();

  return (
    <>
      <div>Securities page</div>
      {isLoading && <p>Loading..</p>}
      {securities &&
        securities.map((security, index) => <div key={index}>{security.securityName}</div>)}
    </>
  );
};

export default Securities;
