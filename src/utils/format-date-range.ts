import { format } from 'date-fns';
import type { I18nConfig } from '@/types/config/i18n-config.types';
import type { DateRange } from '@/types/shared';

const formatDateRange = ([from, to]: DateRange, { locale, dateFormat, translations }: I18nConfig): string =>
  format(from, dateFormat, { locale }).concat(' - ', to ? format(to, dateFormat, { locale }) : translations.now);

export default formatDateRange;
