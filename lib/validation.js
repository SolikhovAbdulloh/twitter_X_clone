import { z } from "zod";
export const RegisterSchema_1 = z.object({
  email: z.string().min(2).email(),
  name: z.string().min(2).max(50),
});
export const RegisterSchema_2 = z.object({
  password: z.string().min(6).max(50),
  username: z.string().min(2).max(50),
});
