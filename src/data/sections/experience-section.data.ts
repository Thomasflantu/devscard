import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  avalonia,
  azure,
  azureDevOps,
  blazor,
  cSharp,
  docker,
  dotNet,
  flutter,
  googleCloud,
  googlenet,
  jira,
  pytorch,
  radzen,
  tesseract,
  visualStudio,
  visualStudioCode,
  webFlow,
  yolov8,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Werk ervaring',
    slug: 'ervaring',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Junior software-ingenieur',
      company: 'Optimation',
      image: import('@/assets/logos/optimationbv_logo.jpg'),
      dates: [new Date('2025-08'), null],
      description: `
            - Ontwikkelt en onderhoudt het Optima Platform: een modulair ecosysteem voor paneelbouw-automatisering.
            - Bouwt microservices in .NET en C#, met front-ends in Blazor en Avalonia voor industriële toepassingen.
            - Beheert Docker-gebaseerde productieomgevingen op Linux (Swarm), inclusief CI/CD-pijplijnen en versiebeheer.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [dotNet(), visualStudio(), cSharp(), blazor(), radzen(), docker(), jira(), avalonia()],
      },
      links: [website({ url: 'https://optimation.nl' })],
    },
    {
      role: 'AGF medewerker',
      company: 'Dirk van den broek',
      image: import('@/assets/logos/DirkVanDenBroek.webp'),
      dates: [new Date('2018-06'), new Date('2025-08')],
      description: `
        - Ik ben hier begonnen als 16 jarig jongen
        - Tot de dag van vandaag werk ik er nog steeds
        - Ik doe veel met groente en fruit, hiervan leer ik ook weer nieuwe dingen
        - Ik heb geleerd hoe ik mensen kan aansturen en heb veel ervaring opgedaan met sociale interactie
        - Ik heb veel aan het leren van mijn managers bij de Dirk
      `,
      tagsList: {
        //TODO add some technologies to the tags
        tags: [],
      },
      links: [],
    },
    {
      role: 'Stagair',
      company: 'Optimation',
      image: import('@/assets/logos/optimationbv_logo.jpg'),
      dates: [new Date('2025-02'), new Date('2025-07')],
      description: `
        - Werkte aan een geautomatiseerd systeem voor het uitlezen van elektrotechnische schema’s met machine learning.
        - Ontwikkelde een modulaire oplossing met .NET, Python en Docker.
        - Leerde werken met CI/CD, Jira en code reviews in een professionele DevOps-omgeving.
      `,
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [
          dotNet(),
          visualStudio(),
          cSharp(),
          blazor(),
          radzen(),
          pytorch(),
          tesseract(),
          yolov8(),
          docker(),
          jira(),
          googlenet(),
        ],
      },
      links: [website({ url: 'https://optimation.nl' })],
    },
    {
      role: 'Stagair',
      company: 'ABF Bearings / ABF Motors',
      image: import('@/assets/logos/ABFBearings.jpeg'),
      dates: [new Date('2022-09'), new Date('2023-02')],
      description: `
        - Ik heb hier gewerkt aan een project waarbij Machine learning betrokken is
        - Ik heb veel nieuwe ervaringen over Azure en Google cloud opgedaan
        - Ik heb werkervaring opgedaan vanuit het technische veld
        - Ik heb zowel zelfstandig als met een team leren werken
        - Ik ben professioneler geworden
      `,
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [azure(), azureDevOps(), googleCloud(), visualStudio()],
      },
      links: [website({ url: 'https://www.abf.store/s/en/' })],
    },
    {
      role: 'Eigenaar',
      company: 'BijGepast',
      image: import('@/assets/logos/BijGepastLogo.png'),
      dates: [new Date('2021-10'), null],
      description: `
        Dit is mijn eigen bedrijf die ik met twee vrienden heb opgezet, de volgende punten zijn de dingen die ik heb geleerd;

        - Het wordt me steeds duidelijker hoe een bedrijfsstructuur in elkaar zit
        - Ondanks de verschillende projecten die we hebben gedaan, waarvan er nog geen volledig succesvol is geweest, ben ik wel blij met de dingen die ik hieruit heb geleerd.
        - Ik ben blij met de kansen die ik krijg met mijn twee beste vrienden, die ook mijn compagnons zijn.

        Op dit moment zijn we bezig met onze eigen website te bouwen, hopelijk komt die binnenkort live :). We willen websites bouwen voor MKB'ers en uiteindelijk ook uitgroeien tot applicatiebeheer en marketing strategieën.
      `,
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [webFlow(), flutter(), visualStudioCode()],
      },
      links: [website({ url: 'https://www-bijgepast-com.webflow.io/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
