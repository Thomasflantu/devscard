import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { SiteLocale } from '../locales';
import { github, website } from '../helpers/links';
import { C, androidStudio, azure, java, kotlin, linuxUbuntu, visualStudioCode, webFlow } from '../helpers/skills';

const screenshots = [
  { src: import('@/assets/portfolio/Quissteling/Schetsen.png'), alt: 'Sketches' },
  { src: import('@/assets/portfolio/Quissteling/Wireframe1.png'), alt: 'Wireframe 1' },
  { src: import('@/assets/portfolio/Quissteling/Wireframe2.png'), alt: 'Wireframe 2' },
  { src: import('@/assets/portfolio/Quissteling/Wireframe3.png'), alt: 'Wireframe 3' },
  { src: import('@/assets/portfolio/Quissteling/Wireframe4.png'), alt: 'Wireframe 4' },
  { src: import('@/assets/portfolio/Quissteling/Wireframe5.png'), alt: 'Wireframe 5' },
  { src: import('@/assets/portfolio/Quissteling/Wireframe6.png'), alt: 'Wireframe 6' },
  { src: import('@/assets/portfolio/Quissteling/Wireframe7.png'), alt: 'Wireframe 7' },
  { src: import('@/assets/portfolio/Quissteling/Wireframe8.png'), alt: 'Wireframe 8' },
];

const getPortfolioSectionData = (locale: SiteLocale = 'nl'): PortfolioSection =>
  locale === 'nl'
    ? {
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
            name: 'EXR1 Autonomous Driving',
            image: import('@/assets/portfolio/EXRobotics/EXRobotics.jpeg'),
            dates: [new Date('2023-02'), new Date('2023-06')],
            details: [
              { label: 'Team', value: '4 personen' },
              { label: 'Mijn rol', value: ['Infrastructuur', 'Planner'] },
              { label: 'Bedrijf', value: 'EXRobotics' },
              { label: 'Categorie', value: ['Datastructuur', 'Robotica', 'School'] },
            ],
            categories: ['Robotica', 'School', 'Azure'],
            impact: {
              contribution: 'Infrastructuur opgezet en planning bewaakt binnen het team.',
              challenge: 'Robotdata op afstand inzichtelijk maken voor monitoring en besturing.',
              result: 'Een applicatieconcept waarmee een operator beter grip krijgt op de EXR1-robot.',
            },
            description:
              'Binnen de opleiding Technische Informatica aan Avans Breda kregen wij de vraag om te onderzoeken hoe de EXR1-robot op afstand gemonitord en bestuurd kon worden. ' +
              'Hiervoor ontwikkelden we een eigen applicatie om data te visualiseren. Het doel was om inzicht te krijgen in hoe op afstand bestuurde systemen kunnen worden ingezet om de robot te controleren en te coördineren, en hoe een menselijke operator effectief met de robot kan communiceren.',
            tagsList: {
              title: 'Technologieën',
              tags: [azure(), linuxUbuntu(), visualStudioCode()],
            },
            links: [website({ url: 'https://www.exrobotics.global/news-publications/exr-1-available-in-the-shell-gtc' })],
          },
          {
            name: 'Quissteling',
            image: import('@/assets/portfolio/Quissteling/QuisstelingLogo.png'),
            dates: [new Date('2021-04'), new Date('2021-06')],
            details: [
              { label: 'Team', value: '5 mensen' },
              { label: 'Mijn rol', value: ['Front-end developer', 'Mobiele developer', 'UX-designer', 'Codebeheerder'] },
              { label: 'Opdrachtgever', value: 'Essteling (fictief bedrijf vanuit Avans)' },
              { label: 'Categorie', value: ['Mobiele applicatie', 'UX-design', 'School'] },
            ],
            categories: ['Mobile', 'UX', 'School'],
            impact: {
              contribution: 'Front-end, mobiele ontwikkeling, UX en codebeheer gecombineerd.',
              challenge: 'Een interactieve parkervaring ontwerpen rond sensoren en actuatoren.',
              result: 'Een app-concept dat bezoekers actief bij de attractiebeleving betrekt.',
            },
            pdfDetails: [
              { label: 'Repository', value: 'https://github.com/tflantua/Quissteling', url: 'https://github.com/tflantua/Quissteling' },
            ],
            description:
              'Essteling is een fictief attractiepark met een sterke focus op thematische beleving en innovatie. ' +
              'Voor dit project ontwierpen we een app-concept waarbij sensoren en actuatoren samen een interactieve bezoekerservaring creëren. ' +
              'Het doel was om een vernieuwende en betaalbare manier te bedenken om bezoekers actief te betrekken bij het park.',
            tagsList: {
              title: 'Technologieën',
              tags: [java(), C(), androidStudio()],
            },
            screenshots,
            links: [github({ url: 'https://github.com/tflantua/Quissteling' })],
          },
          {
            name: 'Picum',
            image: import('@/assets/portfolio/project-3.jpeg'),
            dates: [new Date('2021-09'), new Date('2022-01')],
            details: [
              { label: 'Team', value: '10 mensen' },
              { label: 'Mijn rol', value: ['Front-end developer', 'Designer', 'Codebeheerder'] },
              { label: 'Bedrijf', value: 'Geen' },
              { label: 'Categorie', value: ['Projectopzet', 'Teamwork', 'School'] },
            ],
            categories: ['Teamwork', 'School', 'Planning'],
            impact: {
              contribution: 'Meegewerkt aan ontwerp, front-end en overdracht van projectideeën.',
              challenge: 'Met een groot team zorgen voor duidelijke afspraken en overdraagbare plannen.',
              result: 'Een sterkere projectbasis voor de uitvoerende groep in de volgende periode.',
            },
            pdfDetails: [
              { label: 'Repository', value: 'https://github.com/tflantua/Quissteling', url: 'https://github.com/tflantua/Quissteling' },
            ],
            description:
              'Binnen dit project werkten we met tien teamleden. De eerste helft van het team richtte zich op de projectvoorbereiding en overdracht, zodat de tweede helft in de volgende periode de applicatie kon bouwen. ' +
              'De nadruk lag daarmee vooral op een sterke projectopzet en duidelijke overdracht van ideeën.',
            tagsList: {
              title: 'Technologieën',
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
              { label: 'Bedrijf', value: 'Geen' },
              { label: 'Categorie', value: ['Mobiele applicatie', 'School'] },
            ],
            categories: ['Mobile', 'Back-end', 'School'],
            impact: {
              contribution: 'Back-end onderdelen gebouwd binnen de uitvoerende ontwikkelgroep.',
              challenge: 'Een voorbereid project vertalen naar werkende applicatieonderdelen.',
              result: 'Praktische ervaring opgedaan met bouwen binnen een groter team.',
            },
            description:
              'Dit project sloot inhoudelijk aan op Picum, maar hier maakte ik deel uit van de uitvoerende ontwikkelgroep. ' +
              'Mijn focus lag op het daadwerkelijk realiseren van onderdelen van de applicatie.',
            tagsList: {
              title: 'Technologieën',
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
              { label: 'Bedrijf', value: 'BijGepast' },
              { label: 'Categorie', value: ['Website', 'Eigen onderneming'] },
            ],
            categories: ['Ondernemen', 'Website', 'Webflow'],
            impact: {
              contribution: 'Technische realisatie, planning en afstemming binnen het team.',
              challenge: 'Een rustige en professionele uitstraling vertalen naar een werkende website.',
              result: 'Een online basis voor de diensten en zichtbaarheid van BijGepast.',
            },
            description:
              'BijGepast is een website waar wij op dit moment aan werken vanuit onze eigen onderneming. ' +
              'Daarbij staat een rustige, professionele en aantrekkelijke uitstraling centraal.',
            tagsList: {
              title: 'Technologieën',
              tags: [webFlow()],
            },
            links: [website({ url: 'https://www-bijgepast-com.webflow.io/' })],
          },
        ],
      }
    : {
        config: {
          title: 'Projects',
          slug: 'projects',
          icon: 'fa6-solid:rocket',
          visible: true,
          screenshots: {
            title: 'Screenshots',
            icon: 'fa6-solid:images',
          },
        },
        projects: [
          {
            name: 'EXR1 Autonomous Driving',
            image: import('@/assets/portfolio/EXRobotics/EXRobotics.jpeg'),
            dates: [new Date('2023-02'), new Date('2023-06')],
            details: [
              { label: 'Team', value: '4 people' },
              { label: 'My role', value: ['Infrastructure', 'Planner'] },
              { label: 'Company', value: 'EXRobotics' },
              { label: 'Category', value: ['Data structures', 'Robotics', 'Education'] },
            ],
            categories: ['Robotics', 'Education', 'Azure'],
            impact: {
              contribution: 'Set up infrastructure and helped keep planning clear for the team.',
              challenge: 'Make robot data understandable for remote monitoring and control.',
              result: 'An application concept that gives an operator better insight into the EXR1 robot.',
            },
            description:
              'During my Technical Informatics studies at Avans Breda, we were asked to explore how the EXR1 robot could be monitored and controlled remotely. ' +
              'To support that, we built our own application to visualize operational data. ' +
              'The goal was to understand how remote-control systems can be implemented to coordinate the robot and how a human operator can interact with it effectively.',
            tagsList: {
              title: 'Technologies',
              tags: [azure(), linuxUbuntu(), visualStudioCode()],
            },
            links: [website({ url: 'https://www.exrobotics.global/news-publications/exr-1-available-in-the-shell-gtc' })],
          },
          {
            name: 'Quissteling',
            image: import('@/assets/portfolio/Quissteling/QuisstelingLogo.png'),
            dates: [new Date('2021-04'), new Date('2021-06')],
            details: [
              { label: 'Team', value: '5 people' },
              { label: 'My role', value: ['Front-end developer', 'Mobile developer', 'UX designer', 'Code maintainer'] },
              { label: 'Client', value: 'Essteling (fictional company created for Avans)' },
              { label: 'Category', value: ['Mobile app', 'UX design', 'Education'] },
            ],
            categories: ['Mobile', 'UX', 'Education'],
            impact: {
              contribution: 'Combined front-end work, mobile development, UX design, and code maintenance.',
              challenge: 'Design an interactive park experience around sensors and actuators.',
              result: 'An app concept that actively involves visitors in the attraction experience.',
            },
            pdfDetails: [
              { label: 'Repository', value: 'https://github.com/tflantua/Quissteling', url: 'https://github.com/tflantua/Quissteling' },
            ],
            description:
              'Essteling is a fictional theme park focused on immersive attractions and innovation. ' +
              'For this project, we designed an app concept in which sensors and actuators create an interactive visitor experience. ' +
              'The goal was to propose a creative and cost-effective way to keep visitors actively engaged with the park.',
            tagsList: {
              title: 'Technologies',
              tags: [java(), C(), androidStudio()],
            },
            screenshots,
            links: [github({ url: 'https://github.com/tflantua/Quissteling' })],
          },
          {
            name: 'Picum',
            image: import('@/assets/portfolio/project-3.jpeg'),
            dates: [new Date('2021-09'), new Date('2022-01')],
            details: [
              { label: 'Team', value: '10 people' },
              { label: 'My role', value: ['Front-end developer', 'Designer', 'Code maintainer'] },
              { label: 'Company', value: 'None' },
              { label: 'Category', value: ['Project setup', 'Teamwork', 'Education'] },
            ],
            categories: ['Teamwork', 'Education', 'Planning'],
            impact: {
              contribution: 'Contributed to design, front-end work, and handover of project ideas.',
              challenge: 'Keep agreements and plans clear within a large student team.',
              result: 'A stronger project foundation for the implementation group that followed.',
            },
            pdfDetails: [
              { label: 'Repository', value: 'https://github.com/tflantua/Quissteling', url: 'https://github.com/tflantua/Quissteling' },
            ],
            description:
              'This project involved a team of ten people. Half of the team focused on project planning and handover, so the other half could build the application in the following period. ' +
              'That made strong documentation and a clean transfer of ideas more important than immediate implementation.',
            tagsList: {
              title: 'Technologies',
              tags: [],
            },
            links: [website({ url: '#' }), github({ url: '#' })],
          },
          {
            name: 'Stadszicht',
            image: import('@/assets/portfolio/project-4.jpeg'),
            dates: [new Date('2016-05'), new Date('2018-07')],
            details: [
              { label: 'Team', value: '10 people' },
              { label: 'My role', value: 'Back-end developer' },
              { label: 'Company', value: 'None' },
              { label: 'Category', value: ['Mobile app', 'Education'] },
            ],
            categories: ['Mobile', 'Back-end', 'Education'],
            impact: {
              contribution: 'Built back-end parts within the implementation team.',
              challenge: 'Translate a prepared concept into working application features.',
              result: 'Practical experience building software within a larger team.',
            },
            description:
              'This project was similar in context to Picum, but here I was part of the implementation team. ' +
              'My focus was on building working application features rather than only preparing the handover.',
            tagsList: {
              title: 'Technologies',
              tags: [java(), androidStudio(), kotlin()],
            },
            links: [],
          },
          {
            name: 'BijGepast',
            image: import('@/assets/logos/BijGepastLogo.png'),
            dates: [new Date('2024-01'), null],
            details: [
              { label: 'Team', value: '3 people' },
              { label: 'My role', value: ['Back-end developer', 'Front-end developer', 'Planner'] },
              { label: 'Company', value: 'BijGepast' },
              { label: 'Category', value: ['Website', 'Own business'] },
            ],
            categories: ['Entrepreneurship', 'Website', 'Webflow'],
            impact: {
              contribution: 'Worked on implementation, planning, and team coordination.',
              challenge: 'Turn a calm and professional visual direction into a working website.',
              result: 'An online foundation for BijGepast’s services and visibility.',
            },
            description:
              'BijGepast is a website we are currently building as part of our own business. ' +
              'Our goal is to give it a calm, professional, and visually appealing look and feel.',
            tagsList: {
              title: 'Technologies',
              tags: [webFlow()],
            },
            links: [website({ url: 'https://www-bijgepast-com.webflow.io/' })],
          },
        ],
      };

export default getPortfolioSectionData;
