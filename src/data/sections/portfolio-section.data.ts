import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import { C, androidStudio, azure, intelliJ, java, kotlin, linuxUbuntu, visualStudio, visualStudioCode, webFlow } from '../helpers/skills';

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
      image: import('@/assets/portfolio/Quissteling/QuisstelingLogo.png'),
      dates: [new Date('2021-04'), new Date('2021-06')],
      details: [
        { label: 'Team', value: '5 mensen' },
        { label: 'Mijn rol', value: ['Front-end Developer', 'Telefoon Developer', 'UX-Designer', 'codebeheerder'] },
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
      name: 'Picum',
      image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2021-09'), new Date('2022-01')],
      details: [
        { label: 'Team', value: '10 mensen' },
        { label: 'Mijn rol', value: ['Front-end Developer', 'Designer', 'codebeheerde'] },
        { label: 'Bedrijf', value: 'None' },
        { label: 'Catogorie', value: ['Project opzet', 'Teamwork', 'School'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/tflantua/Quissteling', url: 'https://github.com/tflantua/Quissteling' },
      ],
      description:
        'Bij dit project waren er 10 teamleden, de helft ging aan de plannen zitten voor het project en de andere helft zou bij ' +
        'de tweede periode aan de applicatie zitten, om deze te bouwen. Dit project was meer bedoeld als een goede overdracht ' +
        'van de ideeen, dan het daadwerkelijk juist te realiseren',
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [],
      },
      links: [website({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'Stadszicht',
      image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2016-05'), new Date('2018-07')],
      details: [
        { label: 'Team', value: '10 mensen' },
        { label: 'Mijn rol', value: 'Back-end developer' },
        { label: 'Bedrijf', value: 'none' },
        { label: 'Catagorie', value: ['Telefoon applicatie', 'School'] },
      ],
      description:
        'Dit is hetzelfde als de beschrijving bij het project Picum, alleen nu zat ik in de uitvoerdende partij',
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [java(), androidStudio(), kotlin()],
      },
      links: [],
    },
    {
      name: 'BijGepast',
      image: import('@/assets/logos/BijGepastLogo.png'),
      dates: [new Date('2024-01'), null],
      details: [
        { label: 'Team', value: '3 mensen' },
        { label: 'Mijn rol', value: ['Back-end developer', 'Front-end developer', 'Planner'] },
        { label: 'Bedrijf', value: 'none' },
        { label: 'Catagorie', value: ['Website', 'Eigen onderneming'] },
      ],
      description:
        'Dit is een website die wij als BijGepast op dit moment aan het bouwen zijn, hierbij vinden wij het belangrijk ' + 
        'dat de website een rustige maar mooie uitstraling heeft',
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [webFlow()],
      },
      links: [website({url: 'https://www-bijgepast-com.webflow.io/'})],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
