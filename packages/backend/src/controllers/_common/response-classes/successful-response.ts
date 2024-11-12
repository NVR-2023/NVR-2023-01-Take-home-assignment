import { AllPurposeResponseType } from "types/all-purpose-response-type";

export class SuccessfulResponse<T> implements AllPurposeResponseType<T> {
  status: 200 | 201;
  ok: boolean = true;
  message: string;
  data?: T;

  constructor(status: 200 | 201 = 200, message: string, data?: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
