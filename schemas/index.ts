import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: "El Email es obligatorio"
  }),
  password: z.string().min(1, {
    message: "La contraseña es obligatoria"
  })
});