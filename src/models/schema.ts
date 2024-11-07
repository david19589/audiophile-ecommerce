import { z, ZodType } from "zod";

export type FormData = {
  name: string;
  email: string;
  phone_number: string;
  your_address: string;
  zip_code: string;
  city: string;
  country: string;
  e_money_number?: string;
  e_money_pin?: string;
};

export const schema = (selectedMethod: string): ZodType<FormData> => {
  return z.object({
    name: z
      .string()
      .nonempty({ message: "Can't be empty" })
      .regex(/^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/, {
        message: "Invalid format",
      })
      .min(2, { message: "min 2 char." })
      .max(40, { message: "max 40 char." }),

    email: z
      .string()
      .nonempty({ message: "Can't be empty" })
      .email({ message: "Email address is invalid." })
      .max(40, { message: "max 40 char." }),

    phone_number: z
      .string()
      .nonempty({ message: "Can't be empty" })
      .regex(/^[0-9]+$/, { message: "Must be a number" })
      .min(9, { message: "min 9 num" })
      .max(15, { message: "max 15 num" }),

    your_address: z
      .string()
      .nonempty({ message: "Can't be empty" })
      .regex(/^[a-zA-Z0-9]+$/, {
        message: "Invalid format",
      }),

    zip_code: z
      .string()
      .nonempty({ message: "Can't be empty" })
      .regex(/^[0-9]+$/, { message: "Must be a number" })
      .min(4, { message: "min 4 num" })
      .max(15, { message: "max 15 num" }),

    city: z
      .string()
      .nonempty({ message: "Can't be empty" })
      .regex(/^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/, {
        message: "Invalid format",
      })
      .min(2, { message: "min 2 char." })
      .max(40, { message: "max 40 char." }),

    country: z
      .string()
      .nonempty({ message: "Can't be empty" })
      .regex(/^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/, {
        message: "Invalid format",
      })
      .min(2, { message: "min 2 char." })
      .max(40, { message: "max 40 char." }),

    e_money_number:
      selectedMethod === "eMoney"
        ? z
            .string()
            .nonempty({ message: "Can't be empty" })
            .regex(/^[0-9]+$/, { message: "Must be a number" })
            .min(6, { message: "min 6 num" })
            .max(15, { message: "max 15 num" })
        : z.string().optional(),

    e_money_pin:
      selectedMethod === "eMoney"
        ? z
            .string()
            .nonempty({ message: "Can't be empty" })
            .regex(/^[0-9]+$/, { message: "Must be a number" })
            .min(4, { message: "min 4 num" })
            .max(15, { message: "max 15 num" })
        : z.string().optional(),
  });
};
