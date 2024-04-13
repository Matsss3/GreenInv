import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: "El Email es obligatorio"
  }),
  password: z.string().min(1, {
    message: "La contraseña es obligatoria"
  })
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "El nombre es obligatorio"
  }),
  email: z.string().email({
    message: "El Email es obligatorio"
  }),
  password: z.string().min(6, {
    message: "La contraseña debe contener minimo 6 caracteres"
  }),
  rep_password: z.string().min(6, {
    message: "Las contraseñas no coinciden"
  })
});