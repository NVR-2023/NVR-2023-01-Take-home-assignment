import { Router } from "express";
import createGlobalConfig from "config/create-global-config";

type RouteDefinitionType = {
  path: string;
  router: Router;
};

const globalConfig = createGlobalConfig();
let ROUTE_DEFINITIONS: RouteDefinitionType[] = [];

if (globalConfig) {
    ROUTE_DEFINITIONS=[
        { path: "/securities", router: securitiesRouter },
        { path: "/securities/:id", },
    ]
}

export default ROUTE_DEFINITIONS;
