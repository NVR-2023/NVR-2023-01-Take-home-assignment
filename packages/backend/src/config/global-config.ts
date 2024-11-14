import globalConfigZodSchema from "./global-config-zod-schema";
import GlobalConfigType from "types/global-config-type";
import { load } from "dotenv-mono";

load();

const DEFAULT_PORT = 3000;
const DEFAULT_API_BASE_URL = "/api/v1/";

const createGlobalConfig = (): GlobalConfigType | null => {
  const config: GlobalConfigType = {
    PORT: Number(process.env.PORT) || DEFAULT_PORT,
    NODE_ENV: (process.env.NODE_ENV as "development" | "production") || "development",
    API_BASE_URL: process.env.API_BASE_URL || DEFAULT_API_BASE_URL,
    BASE_BACKEND_URL:
      process.env.BASE_BACKEND_URL ||
      (process.env.NODE_ENV === "development"
        ? `http://localhost:${Number(process.env.PORT) || DEFAULT_PORT}`
        : undefined),
    DATABASE_URL: process.env.DATABASE_URL,
    PULSE_API_KEY: process.env.PULSE_API_KEY,
  };

  const validationResult = globalConfigZodSchema.safeParse(config);
  if (!validationResult.success) {
    const validationErrorsArray = validationResult.error.errors.map((error) => ({
      field: error.path.join("."),
      message: error.message,
    }));
    console.error(
      `Critical ${validationErrorsArray.length > 1 ? "errors" : "error"} in .env file:`
    );
    validationErrorsArray.forEach((error) => {
      console.error(` ${error.field} : ${error.message}`);
    });

    return null;
  }
  return config;
};

const GLOBAL_CONFIG = createGlobalConfig();
export default GLOBAL_CONFIG;
