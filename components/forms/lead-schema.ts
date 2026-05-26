import { z } from "zod";
import { ROOM_TYPES } from "@/content/room-types";

const roomValues = ROOM_TYPES.map((option) => option.value) as [
  (typeof ROOM_TYPES)[number]["value"],
  ...(typeof ROOM_TYPES)[number]["value"][],
];

const phoneRegex = /^[\d\s()+\-]{7,}$/;

export const leadSchema = z.object({
  name: z
    .string({ required_error: "Podaj imię" })
    .trim()
    .min(2, "Imię musi mieć co najmniej 2 znaki")
    .max(80, "Imię jest za długie"),
  phone: z
    .string({ required_error: "Podaj numer telefonu" })
    .trim()
    .min(7, "Podaj poprawny numer telefonu")
    .regex(phoneRegex, "Podaj poprawny numer telefonu"),
  email: z
    .string({ required_error: "Podaj adres e-mail" })
    .trim()
    .email("Podaj poprawny adres e-mail"),
  city: z
    .string({ required_error: "Podaj miasto" })
    .trim()
    .min(2, "Podaj miasto realizacji")
    .max(80, "Nazwa miasta jest za długa"),
  roomType: z.enum(roomValues, {
    errorMap: () => ({ message: "Wybierz typ pomieszczenia" }),
  }),
  message: z
    .string()
    .trim()
    .max(2000, "Wiadomość jest zbyt długa")
    .optional()
    .or(z.literal("")),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Aby wysłać zapytanie, zaakceptuj politykę prywatności",
    }),
  // Honeypot field — humans never see it. If a bot fills it, we accept the
  // payload at validation time and discard it later (silent drop) so the bot
  // cannot tell its submission failed.
  website: z.string().optional().default(""),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
