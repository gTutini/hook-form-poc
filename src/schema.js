import { z } from "zod";
import isStrongPassword from "validator/lib/isStrongPassword";

const schema = z.object({
  email: z.string().email("Preencha com um email válido"),
  password: z.string().refine(
    (value) =>
      isStrongPassword(value, {
        minLength: 8,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 1,
      }),
    { message: "Senha inválida" }
  ),
});

export { schema };
