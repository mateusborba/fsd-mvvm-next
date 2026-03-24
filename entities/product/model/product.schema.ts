import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  price: z
    .number({ error: "Preço inválido" })
    .positive("Preço deve ser maior que 0"),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
