import { Router } from "express";
import securityRouter from "routes/security/security-router";
import priceRouter from "routes/price/price-router";

type RouteDefinitionType = {
  path: string;
  router: Router;
};

const ROUTE_DEFINITIONS: RouteDefinitionType[] = [
  { path: "private/securities", router: securityRouter },
  { path: "private/securities/prices", router: priceRouter },
];

export default ROUTE_DEFINITIONS;
