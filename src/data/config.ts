import type { Config } from '@/types/data';
import type { SiteLocale } from './locales';
import { nl as dateFnsNl, enUS as dateFnsEnUS } from 'date-fns/locale/index.js';

const nlLocale = {
  ...dateFnsNl,
  code: 'nl-NL',
};

const enUSLocale = {
  ...dateFnsEnUS,
  code: 'en-US',
};

const getConfig = (locale: SiteLocale = 'nl'): Config =>
  locale === 'nl'
    ? {
        i18n: {
          locale: nlLocale,
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
          faviconPath: '/src/assets/HeadImage_CV.png',
        },
        pdf: {
          footer:
            'Hierbij geef ik toestemming voor het verwerken van mijn persoonsgegevens in het kader van deze sollicitatieprocedure.',
        },
      }
    : {
        i18n: {
          locale: enUSLocale,
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
          faviconPath: '/src/assets/HeadImage_CV.png',
        },
        pdf: {
          footer:
            'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
        },
      };

export default getConfig;
