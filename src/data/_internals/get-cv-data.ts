import type { Data } from '@/types/data';
import type { SiteLocale } from '../locales';
import transformData from './transform-data';
import getConfig from '../config';
import getSections from '../sections';
import { defaultLocale } from '../locales';
import type { DataTransformer } from './transformers';

const getCvData = (locale: SiteLocale = defaultLocale, ...callbacks: DataTransformer[]): Data =>
  transformData({
    config: getConfig(locale),
    sections: getSections(locale),
  })(...callbacks);

export default getCvData;
