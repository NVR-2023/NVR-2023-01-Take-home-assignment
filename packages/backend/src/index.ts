import GlobalConfigType from "types/global-config-type.js";
import createGlobalConfig from "config/create-global-config.js";
import app from "app";

import seedDatabaseWithData from "seed-data/functions/seed-databse-with-data";

const GLOBAL_CONFIG: GlobalConfigType | null = createGlobalConfig();
if (!GLOBAL_CONFIG) {
  console.error("Failed to load Global Config");
  console.error("Shutting down process");
  process.exit(1);
}

console.log("Global config successfully loaded");
const PORT = GLOBAL_CONFIG.PORT;

app
  .listen(PORT, () => {
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
