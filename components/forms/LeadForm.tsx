"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormValues } from "./lead-schema";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { formatPolishPhone } from "./formatters";
import { submitLead } from "@/lib/crm";
import { Events } from "@/lib/analytics";
import { ROOM_TYPES } from "@/content/room-types";
import {
  useFormPersistence,
  clearFormPersistence,
} from "@/hooks/useFormPersistence";
import { cn } from "@/lib/cn";

type FormStatus = "idle" | "submitting" | "success" | "error";

type LeadFormProps = {
  source: string;
  variant?: "default" | "compact" | "dark";
  onSuccess?: () => void;
  persistKey?: string;
};

const DEFAULTS: LeadFormValues = {
  name: "",
  phone: "",
  email: "",
  city: "",
  roomType: "mieszkanie",
  message: "",
  consent: false,
  website: "",
};

export function LeadForm({
  source,
  variant = "default",
  onSuccess,
  persistKey,
}: LeadFormProps) {
  const isDark = variant === "dark";
  const isCompact = variant === "compact";

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: DEFAULTS,
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = form;

  useFormPersistence(persistKey ?? `lead-form-${source}`, form);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = handleSubmit(async (values) => {
    if (values.website && values.website.length > 0) {
      // Honeypot triggered — silently mark success without contacting CRM.
      setStatus("success");
      reset(DEFAULTS);
      clearFormPersistence(persistKey ?? `lead-form-${source}`);
      return;
    }
    setStatus("submitting");
    setErrorMessage("");

    const { website: _omit, ...payload } = values;
    const result = await submitLead(payload, source);

    if (result.ok) {
      setStatus("success");
      Events.leadSubmitted(source);
      reset(DEFAULTS);
      clearFormPersistence(persistKey ?? `lead-form-${source}`);
      onSuccess?.();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
      Events.leadFailed(source, result.error);
    }
  });

  if (status === "success") {
    return (
      <FormSuccess
        variant={isDark ? "dark" : "light"}
        onReset={() => setStatus("idle")}
      />
    );
  }

  const labelTone = isDark ? "text-white/80" : "text-ink/75";
  const helperTone = isDark ? "text-white/65" : "text-muted";
  const formGap = isCompact ? "gap-4" : "gap-5";

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className={cn("flex flex-col", formGap)}
      aria-busy={isSubmitting}
    >
      {/* Honeypot — visually hidden, ignored by humans */}
      <div className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="lead-website">Strona WWW</label>
        <input
          id="lead-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          id="lead-name"
          label="Imię"
          required
          error={errors.name?.message}
          className={cn(labelTone)}
        >
          <Input
            id="lead-name"
            type="text"
            autoComplete="given-name"
            placeholder="np. Anna"
            invalid={Boolean(errors.name)}
            {...register("name")}
          />
        </FormField>

        <FormField
          id="lead-phone"
          label="Telefon"
          required
          error={errors.phone?.message}
          hint="Numer komórkowy, +48 dodamy automatycznie."
          className={cn(labelTone)}
        >
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <Input
                id="lead-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+48 600 000 000"
                invalid={Boolean(errors.phone)}
                value={field.value}
                onChange={(event) => field.onChange(event.target.value)}
                onBlur={(event) => {
                  field.onChange(formatPolishPhone(event.target.value));
                  field.onBlur();
                }}
              />
            )}
          />
        </FormField>
      </div>

      <FormField
        id="lead-email"
        label="E-mail"
        required
        error={errors.email?.message}
        className={cn(labelTone)}
      >
        <Input
          id="lead-email"
          type="email"
          autoComplete="email"
          placeholder="np. anna@firma.pl"
          invalid={Boolean(errors.email)}
          {...register("email")}
        />
      </FormField>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          id="lead-city"
          label="Miasto"
          required
          error={errors.city?.message}
          className={cn(labelTone)}
        >
          <Input
            id="lead-city"
            type="text"
            autoComplete="address-level2"
            placeholder="np. Warszawa"
            invalid={Boolean(errors.city)}
            {...register("city")}
          />
        </FormField>

        <FormField
          id="lead-room"
          label="Typ pomieszczenia"
          required
          error={errors.roomType?.message}
          className={cn(labelTone)}
        >
          <Controller
            control={control}
            name="roomType"
            render={({ field }) => (
              <Select
                id="lead-room"
                options={ROOM_TYPES}
                placeholder="Wybierz typ pomieszczenia"
                value={field.value}
                onChange={(event) =>
                  field.onChange(event.target.value as LeadFormValues["roomType"])
                }
                onBlur={field.onBlur}
                invalid={Boolean(errors.roomType)}
              />
            )}
          />
        </FormField>
      </div>

      <FormField
        id="lead-message"
        label="Wiadomość"
        error={errors.message?.message}
        hint="Opisz swój pomysł i wnętrze, którego dotyczy zapytanie — przygotujemy wycenę."
        className={cn(labelTone)}
      >
        <Textarea
          id="lead-message"
          placeholder="np. Sypialnia, ściana za łóżkiem — mam własny pomysł na wzór górski w spokojnej kolorystyce."
          invalid={Boolean(errors.message)}
          {...register("message")}
        />
      </FormField>

      <div className="pt-1">
        <Controller
          control={control}
          name="consent"
          render={({ field }) => (
            <Checkbox
              id="lead-consent"
              checked={Boolean(field.value)}
              onChange={(event) => field.onChange(event.target.checked)}
              onBlur={field.onBlur}
              invalid={Boolean(errors.consent)}
            >
              Akceptuję{" "}
              <Link
                href="/polityka-prywatnosci"
                className={isDark ? "underline underline-offset-4 hover:text-white" : "underline underline-offset-4 hover:text-ink"}
                target="_blank"
                rel="noopener"
              >
                politykę prywatności
              </Link>
              {" "}i wyrażam zgodę na kontakt w sprawie tego zapytania.
            </Checkbox>
          )}
        />
        {errors.consent && (
          <p role="alert" className="mt-2 text-[0.82rem] font-medium text-red-700">
            {errors.consent.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <FormError
          message={errorMessage}
          onRetry={() => setStatus("idle")}
          variant={isDark ? "dark" : "light"}
        />
      )}

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant={isDark ? "primary" : "primary"}
          fullWidth
          size="lg"
          disabled={isSubmitting}
          className="sm:w-auto"
        >
          {isSubmitting ? "Wysyłanie…" : "Wyślij zapytanie"}
        </Button>
        <p className={cn("text-[0.78rem]", helperTone)}>
          Odpowiadamy w 24 godziny w dni robocze. Bez zobowiązań.
        </p>
      </div>
      <p className="sr-only" aria-live="polite">
        {watch("name") ? "Formularz wypełniany." : ""}
      </p>
    </form>
  );
}
