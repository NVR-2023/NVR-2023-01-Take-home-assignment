import { Request, Response, NextFunction } from "express";
import { SuccessfulResponse } from "controllers/_common/response-classes/successful-response";
import CustomError from "controllers/_common/response-classes/custom-error";
import getAllSecuritiesFromDatabase from "models/database-functions/security/get-all-securities-from-database";

const getAllSecurities = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const result = await getAllSecuritiesFromDatabase();
    const successfulResponse = new SuccessfulResponse(200, "List of securities successfully retrieved", result);
    return response.status(successfulResponse.status).json(successfulResponse);
  } catch (error) {
    console.error(`An error occurred while fetching securities: ${error}`);
    const terminalError = new CustomError(500, "An error occurred while fetching securities");
    return next(terminalError);
  }
};
export default getAllSecurities;
