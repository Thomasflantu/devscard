import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Educatie',
    slug: 'Educatie',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Technische informatica',
      institution: 'Avans Hogeschool breda',
      image: import('@/assets/logos/AvansLogo.png'),
      dates: [new Date('2020.09'), null],
      description: 'HBO Bachelor of science',
      links: [website({ url: 'https://www.avans.nl/studeren/opleidingen/technische-informatica/voltijd' })],
    },
    {
      title: 'Plan van je leven',
      institution: 'Hogeschool Utrecht',
      image: import('@/assets/logos/HogeschoolUtrechtLogo.png'),
      dates: [new Date('2023.09'), new Date('2024.02')],
      description: 'Minor pedogogiek',
      links: [website({ url: 'https://husite.nl/minors/minors/project-van-je-leven/' })],
    }
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
