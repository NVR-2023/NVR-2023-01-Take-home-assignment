import { Router, Request, Response, NextFunction } from "express";
import getAllSecurities from "controllers/security/get-all-securities";

const securityRouter = Router();

securityRouter.get(
  "",
  getAllSecurities as (request: Request, response: Response, next: NextFunction) => Promise<void>
);

export default securityRouter;
