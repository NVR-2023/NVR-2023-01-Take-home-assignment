import getPricesBySecurityId from "../controllers/price/get-prices-by-security-id";
import getPricesBySecurityIdFromDatabase from "../models/database-functions/price/get-prices-by-security-id-from-database";
import { Request, Response, NextFunction } from "express";
import CustomError from "../controllers/_common/response-classes/custom-error";
import { SuccessfulResponse } from "../controllers/_common/response-classes/successful-response";

jest.mock("../models/database-functions/price/get-prices-by-security-id-from-database");
jest.mock("../models/prisma/prisma", () => require("./_mock_/_mock_prisma"));

describe("getPricesBySecurityId", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  it("should return a successful response when the ID is valid and database function succeeds", async () => {
    mockRequest.params = { id: "123" };
    const mockResult = [{ price: 100, date: "2024-01-01" }];
    (getPricesBySecurityIdFromDatabase as jest.Mock).mockResolvedValue(mockResult);

    await getPricesBySecurityId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext as NextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(
      new SuccessfulResponse(200, "List of security prices successfully retrieved", mockResult)
    );
    expect(mockNext).not.toHaveBeenCalled();
  });

  it("should return a validation error when the ID is invalid", async () => {
    mockRequest.params = { id: "abc" };

    await getPricesBySecurityId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext as NextFunction
    );

    expect(mockNext).toHaveBeenCalledWith(expect.any(CustomError));
    const error = mockNext.mock.calls[0][0] as CustomError;
    expect(error.status).toBe(400);
    expect(error.message).toBe("Invalid Security Id");
  });

  it("should handle database errors", async () => {
    mockRequest.params = { id: "123" };
    const mockError = new Error("Database connection failed");
    (getPricesBySecurityIdFromDatabase as jest.Mock).mockRejectedValue(mockError);

    await getPricesBySecurityId(
      mockRequest as Request,
      mockResponse as Response,
      mockNext as NextFunction
    );

    expect(mockNext).toHaveBeenCalledWith(expect.any(CustomError));
    const error = mockNext.mock.calls[0][0] as CustomError;
    expect(error.status).toBe(500);
    expect(error.message).toBe("Database connection failed");
  });
});
