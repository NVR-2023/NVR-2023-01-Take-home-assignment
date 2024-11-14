type GlobalConfigType = {
  PORT: number;
  NODE_ENV: "development" | "production";
  API_BASE_URL: string;
  BASE_BACKEND_URL: string | undefined;
  DATABASE_URL: string | undefined;
  PULSE_API_KEY?: string | undefined;
};

export default GlobalConfigType;
