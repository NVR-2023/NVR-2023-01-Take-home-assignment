import { z } from "zod";
const globalConfigZodSchema = z.object({
    PORT: z
        .number({ message: "PORT must be a number" })
        .int({ message: "PORT must be an integer" })
        .positive({ message: "PORT must be a positive integer" }),
    NODE_ENV: z.enum(["development", "production"], {
        message: "NODE_ENV must be either 'development' or 'production'",
    }),
    API_BASE_URL: z.string().optional(),
    BASE_BACKEND_URL: z.string().url({ message: "BASE_BACKEND_URL must be a valid URL" }).optional(),
    DATABASE_URL: z.string().min(1, { message: "DATABASE_URL is required" }),
});
export default globalConfigZodSchema;
