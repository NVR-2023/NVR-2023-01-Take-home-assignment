import express, { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import cors from "cors";
import ROUTE_DEFINITIONS from "routes/_common/route-definitions.js";
import CustomError from "./controllers/_common/response-classes/custom-error.js";
import handleGlobalError from "./middleware/global-middleware/handle-global-error.js";
import GLOBAL_CONFIG from "config/global-config.js";

const app = express();
app.use(cors({}));
app.use(express.json({ limit: "5mb" }));

if (GLOBAL_CONFIG) {
  const { API_BASE_URL } = GLOBAL_CONFIG;
  ROUTE_DEFINITIONS.forEach(({ path, router }) => {
    app.use(API_BASE_URL + path, router);
  });
}

app.all("*", (request: Request, _, next: NextFunction) => {
  const invalidRequestError = new CustomError(
    404,
    `${request.method}:${request.originalUrl} is an invalid request`
  );
  next(invalidRequestError);
});
app.use(handleGlobalError as unknown as ErrorRequestHandler);

export default app;
