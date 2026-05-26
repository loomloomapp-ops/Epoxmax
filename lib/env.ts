export const env = {
  CRM_ENDPOINT: process.env.CRM_ENDPOINT ?? "",
  CRM_TOKEN: process.env.CRM_TOKEN ?? "",
  SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://panele-dekoracyjne.pl",
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  GA_ID: process.env.NEXT_PUBLIC_GA_ID ?? "",
  CONTACT_PHONE:
    process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+48 600 000 000",
  CONTACT_EMAIL:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@panele-dekoracyjne.pl",
};

export const hasCrmEndpoint = (): boolean => env.CRM_ENDPOINT.length > 0;
