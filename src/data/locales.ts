export const supportedLocales = ['nl', 'en'] as const;

export type SiteLocale = (typeof supportedLocales)[number];

export const defaultLocale: SiteLocale = 'nl';

export const isSiteLocale = (value: string): value is SiteLocale =>
  supportedLocales.includes(value as SiteLocale);
