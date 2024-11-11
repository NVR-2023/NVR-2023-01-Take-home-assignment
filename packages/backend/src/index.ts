import { load } from "dotenv-mono";
load();

const test = "123";
console.log("This is index.js:", test, process.env.NODE_ENV);
