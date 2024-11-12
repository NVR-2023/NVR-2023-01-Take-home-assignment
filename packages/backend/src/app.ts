import express, { NextFunction, Request, Response, Router } from "express";
import cors from "cors";
import GLOBAL_CONFIGURATION from "./config/global-config.js";

import rootRouter from "./routes/root/root-router.js";
import productsRouter from "./routes/products/products-router.js";
import vendorsRouter from "./routes/vendors/vendors-router.js";
import adminRouter from "./routes/admin/admin-routes.js";

import testProtectedRouter from "./routes/test-proetcted/test-protected-route.js";

import CustomError from "./controllers/_common/response-classes/custom-error.js";
import handleGlobalError from "./middleware/global-middleware/handle-global-error.js";
;

type RouteDefinitionType = {
  path: string;
  router: Router;
};

const app = express();
const { API_BASE_URL } = GLOBAL_CONFIGURATION;
const ROUTE_DEFINITIONS: RouteDefinitionType[] = [
  { path: "", router: rootRouter },
  { path: "vendors", router: vendorsRouter },
  { path: "products", router: productsRouter },
  { path: "admin", router: adminRouter },
  { path: "protected", router: testProtectedRouter },
];

app.use(cors({}));
app.use(express.json({ limit: "5mb" }));


ROUTE_DEFINITIONS.forEach(({ path, router }) => {
  app.use(API_BASE_URL + path, router);
});

app.all("*", (request: Request, _, next: NextFunction) => {
  const invalidRequestError = new CustomError(
    404,
    `${request.method}:${request.originalUrl} is an invalid request`
  );
  next(invalidRequestError);
});
app.use(handleGlobalError);

export default app;
