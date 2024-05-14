import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Thomas Flantua - Student Technische informatie Breda Avans',
    description:
      'Een hardwerkende student. Wilt zijn vaardigheden en passie inzetten om de missie van een onderneming vorm te geven. ' + 
      ' Bedreven in het omgaan met technologie, waaronder diverse sociaal-mediaplatforms en office-programma’s. ' + 
      'Beschikt over gevorderde computervaardigheden. Heeft een positieve attitude en is bereid en gemotiveerd om nieuwe programma’s te leren beheersen.',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
