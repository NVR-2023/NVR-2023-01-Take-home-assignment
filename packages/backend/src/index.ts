import GLOBAL_CONFIG from "config/global-config";
import app from "app";

if (!GLOBAL_CONFIG) {
  console.error("Failed to load Global Config");
  console.error("Shutting down process");
  process.exit(1);
}

const PORT = GLOBAL_CONFIG.PORT;
app
  .listen(PORT, () => {
    console.log("Global config successfully loaded");
    console.log(`Server is listening on port ${PORT}`);
  })
  .on("error", (error: NodeJS.ErrnoException) => {
    if (error.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. Please try a different port.`);
    } else {
      console.error(`An error occurred when starting the server: ${error.message}`);
    }
    console.log("Shutting down server");
    process.exit(1);
  });
