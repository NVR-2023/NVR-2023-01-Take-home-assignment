import { Snackbar, Box } from "@mui/material";
import Spinner from "./icons/spinner";
const ErrorToastWithRedirect = () => {
  return (
    <Snackbar
      className="rounded"
      open={true}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(100%, -50%)",
        backgroundColor: "#ffea99",
        padding: "1rem 2rem",
        height: "5rem",
        width: "20rem",
      }}>
      <Box>
        <div className="flex space-x-2 rounded justify-center items-center font-semibold">
          <span>
            <Spinner scale={.35} />
          </span>
          <span>Loading</span>
        </div>
      </Box>
    </Snackbar>
  );
};

export default ErrorToastWithRedirect;
