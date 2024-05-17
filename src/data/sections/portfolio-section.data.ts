import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import { azure, linuxUbuntu } from '../helpers/skills';

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
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2020-03'), null],
      details: [
        { label: 'Team deelnemers', value: '4 personen' },
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
        tags: [azure(), linuxUbuntu()],
      },
      links: [website({url: 'https://www.exrobotics.global/news-publications/exr-1-available-in-the-shell-gtc'})],
    },
    {
      name: 'TruQuest',
      image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2019-06'), new Date('2020-02')],
      details: [
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: ['Front-end Developer', 'Mobile Developer', 'Designer'] },
        { label: 'Company', value: 'Facebook' },
        { label: 'Category', value: ['Web app', 'Mobile app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      ],
      description:
        'Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.',
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
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
        { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
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
