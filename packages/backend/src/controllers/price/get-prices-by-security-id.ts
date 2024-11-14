import { Request, Response, NextFunction } from "express";
import { SuccessfulResponse } from "controllers/_common/response-classes/successful-response";
import CustomError from "controllers/_common/response-classes/custom-error";
import getPricesBySecurityIdFromDatabase from "models/database-functions/price/get-prices-by-security-id-from-database";
import zodIdValidationSchema from "./zod-id-validation-schema";

const getPricesBySecurityId = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.params;
  const parsedId = Number(id);

  const validationResult = zodIdValidationSchema.safeParse(parsedId);
  if (!validationResult.success) {
    const validationErrorsArray = validationResult.error.errors.map((error) => ({
      field: "id",
      message: error.message,
    }));
    const validationError = new CustomError(400, "Invalid Security Id", validationErrorsArray);
    return next(validationError);
  }

  try {
    const result = await getPricesBySecurityIdFromDatabase(parsedId);
    const successfulResponse = new SuccessfulResponse(200, "", result);
    return response.status(successfulResponse.status).json(successfulResponse);
  } catch (error: unknown) {
    const typedError = error as Error;
    console.error("An error occurred while fetching securities:", typedError);
    const terminalError = new CustomError(500, typedError.message);
    return next(terminalError);
  }
};
export default getPricesBySecurityId;
