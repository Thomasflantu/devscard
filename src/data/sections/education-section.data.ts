import type { EducationSection } from '@/types/sections/education-section.types';
import type { SiteLocale } from '../locales';
import { website } from '../helpers/links';

const getEducationSectionData = (locale: SiteLocale = 'nl'): EducationSection =>
  locale === 'nl'
    ? {
        config: {
          title: 'Educatie',
          slug: 'educatie',
          icon: 'fa6-solid:graduation-cap',
          visible: true,
        },
        diplomas: [
          {
            title: 'Technische Informatica',
            institution: 'Avans Hogeschool Breda',
            image: import('@/assets/logos/AvansLogo.png'),
            dates: [new Date('2020-09'), new Date('2025-07')],
            description: 'HBO Bachelor of Science, behaald in juli 2025',
            links: [website({ url: 'https://www.avans.nl/studeren/opleidingen/technische-informatica/voltijd' })],
          },
          {
            title: 'Plan van je leven',
            institution: 'Hogeschool Utrecht',
            image: import('@/assets/logos/HogeschoolUtrechtLogo.png'),
            dates: [new Date('2023-09'), new Date('2024-02')],
            description: 'Minor pedagogiek',
            links: [website({ url: 'https://husite.nl/minors/minors/project-van-je-leven/' })],
          },
        ],
      }
    : {
        config: {
          title: 'Education',
          slug: 'education',
          icon: 'fa6-solid:graduation-cap',
          visible: true,
        },
        diplomas: [
          {
            title: 'Technical Informatics',
            institution: 'Avans University of Applied Sciences, Breda',
            image: import('@/assets/logos/AvansLogo.png'),
            dates: [new Date('2020-09'), new Date('2025-07')],
            description: 'Bachelor of Science, completed in July 2025',
            links: [website({ url: 'https://www.avans.nl/studeren/opleidingen/technische-informatica/voltijd' })],
          },
          {
            title: 'Plan van je leven',
            institution: 'HU University of Applied Sciences Utrecht',
            image: import('@/assets/logos/HogeschoolUtrechtLogo.png'),
            dates: [new Date('2023-09'), new Date('2024-02')],
            description: 'Minor in pedagogy',
            links: [website({ url: 'https://husite.nl/minors/minors/project-van-je-leven/' })],
          },
        ],
      };

export default getEducationSectionData;
