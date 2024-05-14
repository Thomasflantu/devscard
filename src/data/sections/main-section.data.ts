import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Thomas Flantua',
  role: 'Student Technische Informatica aan Breda Avans',
  details: [
    { label: 'Phone', value: '+31633089143', url: 'tel:' + '+31633089143' },
    { label: 'Email', value: 'thomas.flantua@gmail.com', url: 'mailto:' + 'thomas.flantua@gmail.com' },
    { label: 'From', value: 'Dordrecht, Nederland' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+31633089143' },
    { label: 'Email', value: 'thomas.flantua@gmail.com' },
    { label: 'LinkedIn', value: '/in/thomas-flantua-3b543517b', url: 'https://linkedin.com' },
    { label: 'Website', value: 'https://euphonious-queijadas-62a72f.netlify.app/#profile', url: '/', fullRow: true },
  ],
  description:
  'Een hardwerkende student. Wilt zijn vaardigheden en passie inzetten om de missie van een onderneming vorm te geven. ' + 
  ' Bedreven in het omgaan met technologie, waaronder diverse sociaal-mediaplatforms en office-programma’s. ' + 
  'Beschikt over gevorderde computervaardigheden. Heeft een positieve attitude en is bereid en gemotiveerd om nieuwe programma’s te leren beheersen.',
  tags: [],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Thomas_Flantua.pdf',
  },
  links: [instagram({ url: 'https://www.instagram.com/thomasf_078/?next=%2F' }), linkedin({ url: 'https://www.linkedin.com/in/thomas-flantua-3b543517b/' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
