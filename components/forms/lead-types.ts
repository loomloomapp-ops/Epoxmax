import type { LeadFormValues } from "./lead-schema";

export type LeadInput = Omit<LeadFormValues, "website">;

export type LeadPayload = LeadInput & {
  source: string;
  userAgent?: string;
  submittedAt?: string;
};
