import { Request, Response, NextFunction } from "express";
import CustomError from "controllers/_common/response-classes/custom-error";

const handleGlobalError = (
  error: CustomError,
  _: Request,
  response: Response,
  __: NextFunction
): Response => {
  const statusCode = error.status || 500;
  return response.status(statusCode).json({
    message: error.message,
    status: statusCode,
    ...(error.errors && error.errors.length > 0 ? { errors: error.errors } : {}),
  });
};

export default handleGlobalError;
