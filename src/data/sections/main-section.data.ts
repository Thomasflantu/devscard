import type { MainSection } from '@/types/sections/main-section.types';
import type { SiteLocale } from '../locales';
import { linkedin } from '../helpers/links';

const getMainSectionData = (locale: SiteLocale = 'nl'): MainSection =>
  locale === 'nl'
    ? {
        config: {
          icon: 'fa6-solid:user',
          title: 'Profiel',
          slug: 'profiel',
          visible: true,
        },
        image: import('@/assets/HeadImage_CV.jpg'),
        fullName: 'Thomas Flantua',
        role: 'Junior Software Engineer',
        details: [
          { label: 'Telefoon', value: '+31633089143', url: 'tel:+31633089143' },
          { label: 'E-mail', value: 'thomas.flantua@gmail.com', url: 'mailto:thomas.flantua@gmail.com' },
          { label: 'Woonplaats', value: 'Dordrecht, Nederland' },
        ],
        pdfDetails: [
          { label: 'Telefoon', value: '+31633089143' },
          { label: 'E-mail', value: 'thomas.flantua@gmail.com' },
          { label: 'LinkedIn', value: '/in/thomas-flantua-3b543517b', url: 'https://linkedin.com' },
          {
            label: 'Website',
            value: 'https://euphonious-queijadas-62a72f.netlify.app/#profile',
            url: 'https://euphonious-queijadas-62a72f.netlify.app/#profile',
            fullRow: true,
          },
        ],
        description:
          'Een hardwerkende engineer die zijn vaardigheden en passie wil inzetten om de missie van een onderneming vorm te geven. ' +
          'Bedreven in het omgaan met technologie, waaronder diverse sociaal-mediaplatforms en office-programma’s. ' +
          'Beschikt over gevorderde computervaardigheden, een positieve houding en de motivatie om nieuwe programma’s snel te leren beheersen.',
        tags: [],
        action: {
          label: 'Download cv',
          url: '/cv-nl.pdf',
          downloadedFileName: 'CV-Thomas_Flantua-NL.pdf',
        },
        links: [linkedin({ url: 'https://www.linkedin.com/in/thomas-flantua-3b543517b/' })],
      }
    : {
        config: {
          icon: 'fa6-solid:user',
          title: 'Profile',
          slug: 'profile',
          visible: true,
        },
        image: import('@/assets/HeadImage_CV.jpg'),
        fullName: 'Thomas Flantua',
        role: 'Junior Software Engineer',
        details: [
          { label: 'Phone', value: '+31633089143', url: 'tel:+31633089143' },
          { label: 'Email', value: 'thomas.flantua@gmail.com', url: 'mailto:thomas.flantua@gmail.com' },
          { label: 'Location', value: 'Dordrecht, The Netherlands' },
        ],
        pdfDetails: [
          { label: 'Phone', value: '+31633089143' },
          { label: 'Email', value: 'thomas.flantua@gmail.com' },
          { label: 'LinkedIn', value: '/in/thomas-flantua-3b543517b', url: 'https://linkedin.com' },
          {
            label: 'Website',
            value: 'https://euphonious-queijadas-62a72f.netlify.app/#profile',
            url: 'https://euphonious-queijadas-62a72f.netlify.app/#profile',
            fullRow: true,
          },
        ],
        description:
          'A hard-working engineer who wants to use his skills and passion to help shape a company mission. ' +
          'Experienced with technology, including social media platforms and office software. ' +
          'He brings strong computer skills, a positive attitude, and the motivation to quickly master new tools and workflows.',
        tags: [],
        action: {
          label: 'Download CV',
          url: '/cv-en.pdf',
          downloadedFileName: 'CV-Thomas_Flantua-EN.pdf',
        },
        links: [linkedin({ url: 'https://www.linkedin.com/in/thomas-flantua-3b543517b/' })],
      };

export default getMainSectionData;
