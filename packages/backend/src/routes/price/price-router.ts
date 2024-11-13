import { Router, Request, Response, NextFunction } from "express";
import getPricesBySecurityId from "controllers/price/get-prices-by-security-id";
const priceRouter = Router();

priceRouter.get(
  "/:id",
  getPricesBySecurityId as (
    request: Request,
    response: Response,
    next: NextFunction
  ) => Promise<void>
);

export default priceRouter;
