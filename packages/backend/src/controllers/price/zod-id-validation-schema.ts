import { z } from "zod";

const zodIdValidationSchema = z
  .number({
    required_error: "Security Id is required",
    invalid_type_error: "Security Id must be a number",
  })
  .int({ message: "Security Id must be an integer" })
  .positive({ message: "Security Id must be a positive integer" });

export default zodIdValidationSchema;
