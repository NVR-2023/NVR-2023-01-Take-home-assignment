export type AllPurposeResponseType<T> = {
  status: number;
  ok: boolean;
  message: string;
  data?: T;
  errors?: Array<{ field?: string; error?: string }>;
};


