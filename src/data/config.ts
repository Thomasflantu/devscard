import type { Config } from '@/types/data';
import type { SiteLocale } from './locales';
import nlModule from 'date-fns/locale/nl';
import enUSModule from 'date-fns/locale/en-US';

const rawNl = (nlModule as any).default ?? (nlModule as any).nl ?? nlModule;
const rawEnUS = (enUSModule as any).default ?? (enUSModule as any).enUS ?? enUSModule;

const nl = {
  ...rawNl,
  code: 'nl-NL',
};

const enUS = {
  ...rawEnUS,
  code: 'en-US',
};

const getConfig = (locale: SiteLocale = 'nl'): Config =>
  locale === 'nl'
    ? {
        i18n: {
          locale: nl,
          dateFormat: 'MMMM yyyy',
          translations: {
            now: 'heden',
          },
        },
        meta: {
          title: 'Thomas Flantua - Junior Software Engineer',
          description:
            'Een hardwerkende student die zijn vaardigheden en passie wil inzetten om de missie van een onderneming vorm te geven. ' +
            'Bedreven in het omgaan met technologie, waaronder diverse sociaal-mediaplatforms en office-programma’s. ' +
            'Beschikt over gevorderde computervaardigheden en is gemotiveerd om nieuwe programma’s snel te leren beheersen.',
          faviconPath: '/src/assets/HeadImage_CV.jpg',
        },
        pdf: {
          footer:
            'Hierbij geef ik toestemming voor het verwerken van mijn persoonsgegevens in het kader van deze sollicitatieprocedure.',
        },
      }
    : {
        i18n: {
          locale: enUS,
          dateFormat: 'MMMM yyyy',
          translations: {
            now: 'now',
          },
        },
        meta: {
          title: 'Thomas Flantua - Junior Software Engineer',
          description:
            'A hard-working student who wants to use his skills and passion to help shape a company mission. ' +
            'Experienced with technology, including social media platforms and office software. ' +
            'Strong computer skills, a positive attitude, and a drive to quickly master new tools.',
          faviconPath: '/src/assets/HeadImage_CV.jpg',
        },
        pdf: {
          footer:
            'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
        },
      };

export default getConfig;
