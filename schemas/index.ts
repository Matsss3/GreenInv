import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.coerce.string().email({
    message: "El Email es obligatorio"
  }),
  password: z.coerce.string().min(1, {
    message: "La contraseña es obligatoria"
  })
});

export const RegisterSchema = z.object({
  name: z.coerce.string().min(1, {
    message: "El nombre es obligatorio"
  }),
  email: z.coerce.string().email({
    message: "El Email es obligatorio"
  }),
  password: z.coerce.string().min(6, {
    message: "La contraseña debe contener minimo 6 caracteres"
  }),
  rep_password: z.coerce.string().min(6, {
    message: "Las contraseñas no coinciden"
  })
}).refine((data) => data.password === data.rep_password, {
  message: "Las contraseñas no coinciden",
  path: ["rep_password"]
});