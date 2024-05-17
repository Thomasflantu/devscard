import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import { C, androidStudio, azure, intelliJ, java, linuxUbuntu, visualStudio, visualStudioCode } from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projecten',
    slug: 'projecten',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'EXR1 Autonamous driving',
      image: import('@/assets/portfolio/EXRobotics/EXRobotics.jpeg'),
      dates: [new Date('2023-02'), new Date('2023-06')],
      details: [
        { label: 'Team', value: '4 personen' },
        { label: 'Mijn rol', value: ['Infrastructuur', 'Planner'] },
        { label: 'Bedrijf', value: 'EXRobotics' },
        { label: 'Catogorie', value: ['Datastructuur', 'Robotics', 'School'] },
      ],
      description:
        'In het kader van de opleiding Technische Informatica op Breda Avans is gevraagd of er een onderzoek gestart kon ' + 
        'worden over het op afstand monitoren en besturen van de EXR1 robot, met behulp van een zelfgemaakte applicatie ' + 
        'om data te kunnen visualiseren. Het doel van deze opdracht is om te kijken hoe op afstand gemonitorde en bestuurde ' + 
        'systemen kunnen worden geïmplementeerd om de EXR1-robot te controleren en te coördineren, en hoe de menselijke ' + 
        'operator effectief kan communiceren met de robot.',
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [azure(), linuxUbuntu(), visualStudioCode()],
      },
      links: [website({url: 'https://www.exrobotics.global/news-publications/exr-1-available-in-the-shell-gtc'})],
    },
    {
      name: 'Quissteling',
      image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2021-04'), new Date('2021-06')],
      details: [
        { label: 'Team', value: '5 mensen' },
        { label: 'Mijn rol', value: ['Front-end Developer', 'Telefoon Developer', 'UX-Designer'] },
        { label: 'Bedrijf', value: 'Essteling (een verzonnen bedrijf van Avans)'},
        { label: 'Catagorie', value: ['Telefoon applicatie', 'UX designing', 'School'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/tflantua/Quissteling', url: 'https://github.com/tflantua/Quissteling' },
      ],
      description:
        'De Essteling is een welbekend attractiepark binnen heel Europa en het park staat goed aangeschreven vanwege haar ' + 
        'gethematiseerde attracties. De Essteling richt zich op innovatie om een leidende positie in de markt te behouden. ' + 
        'Dit doet het park door met nieuwe attracties te komen, maar daarnaast zoekt het park ook interactievere (en goedkopere) ' + 
        'manieren om goed contact met haar bezoekers te kunnen behouden. Het park heeft daarom besloten om ons van Avans ' +
        'in te huren om met een app te komen die met behulp van sensor(en) en actuator(en) een beleving creëert. ',
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [java(), C(), androidStudio()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/Quissteling/Schetsen.png'), alt: 'Schetsen' },
        { src: import('@/assets/portfolio/Quissteling/Wireframe1.png'), alt: 'Wireframe 1' },
        { src: import('@/assets/portfolio/Quissteling/Wireframe2.png'), alt: 'Wireframe 2' },
        { src: import('@/assets/portfolio/Quissteling/Wireframe3.png'), alt: 'Wireframe 3' },
        { src: import('@/assets/portfolio/Quissteling/Wireframe4.png'), alt: 'Wireframe 4' },
        { src: import('@/assets/portfolio/Quissteling/Wireframe5.png'), alt: 'Wireframe 5' },
        { src: import('@/assets/portfolio/Quissteling/Wireframe6.png'), alt: 'Wireframe 6' },
        { src: import('@/assets/portfolio/Quissteling/Wireframe7.png'), alt: 'Wireframe 7' },
        { src: import('@/assets/portfolio/Quissteling/Wireframe8.png'), alt: 'Wireframe 8' },
      ],
      links: [
        github({ url: 'https://github.com/tflantua/Quissteling' })
      ],
    },
    {
      name: 'Software Chasers',
      image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/tflantua/Quissteling', url: 'https://github.com/tflantua/Quissteling' },
      ],
      description:
        'Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.',
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [],
      },
      links: [website({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'Disco Ninjas',
      image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2016-05'), new Date('2018-07')],
      details: [
        { label: 'Team size', value: '11 people' },
        { label: 'My role', value: 'Front-end Developer' },
        { label: 'Company', value: 'Google' },
        { label: 'Category', value: ['Mobile app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      description:
        'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
