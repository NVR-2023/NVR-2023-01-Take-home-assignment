import { Snackbar, Box } from "@mui/material";

const Loader = () => {
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
          Loading…
        </div>
      </Box>
    </Snackbar>
  );
};

export default Loader;
