import { AllPurposeResponseType } from "types/all-purpose-response-type";

class CustomError<T = undefined> extends Error implements AllPurposeResponseType<T> {
  status: number;
  ok: boolean = false;
  message: string;
  errors?: Array<{ field?: string; error?: string }>;

  constructor(status: number, message: string, errors?: Array<{ field?: string; error?: string }>) {
    super(message);
    this.status = status;
    this.message = message;
    this.errors = errors;
    Object.setPrototypeOf(this, CustomError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
