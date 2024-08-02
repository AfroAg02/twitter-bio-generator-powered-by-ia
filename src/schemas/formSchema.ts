import { z } from "zod";

export const formSchema = z.object({
  model: z.string().min(1, "Model is required!"),
  temperature: z
    .number()
    .min(0, "Temperature must be at least 0!")
    .max(1, "Temperature must be at most 1!"),
  content: z.string().refine(value => !!value, {
    message: "aaa",
  }),
  // .min(50, "Content must be at least 50!")
  // .max(500, "Content should not exceed most 500 characters limit!"),
  type: z.enum(["personal", "brand"], {
    errorMap: () => ({ message: "Tone is require" }),
  }),
  tone: z.enum(
    [
      "professional",
      "casual",
      "sarcastic",
      "funny",
      "passionate",
      "thoughtful",
    ],
    {
      errorMap: () => ({ message: "Tone is require" }),
    }
  ),
  emojis: z.boolean(),
});
