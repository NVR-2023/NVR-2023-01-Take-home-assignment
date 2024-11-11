import { load } from "dotenv-mono";

// Load environment variables from the root .env file
load();

console.log("This is index.js:", process.env.NODE_ENV);
