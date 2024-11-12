import createGlobalConfig from "config/create-global-config.js";
import app from "app";
import createDataModelsFromJson from "seed-data/functions/create-data-models-from-json";
const GLOBAL_CONFIG = createGlobalConfig();
if (!GLOBAL_CONFIG) {
    console.error("Failed to load Global Config");
    console.error("Shutting down process");
    process.exit(1);
}
console.log("Global config successfully loaded");
const PORT = GLOBAL_CONFIG.PORT;
createDataModelsFromJson();
app
    .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
    .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use. Please try a different port.`);
    }
    else {
        console.error(`An error occurred when starting the server: ${error.message}`);
    }
    console.log("Shutting down server");
    process.exit(1);
});
