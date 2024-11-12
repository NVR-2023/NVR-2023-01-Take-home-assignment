import { Request, Response, NextFunction } from "express";
import CustomError from "controllers/_common/response-classes/custom-error";

const handleGlobalError = (
  error: CustomError,
  _: Request,
  response: Response,
  __: NextFunction
) => {
  const statusCode = error.status || 500;
  return response.status(statusCode).json(error);
};

export default handleGlobalError;
