import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import { azure, azureDevOps, flutter, googleCloud, visualStudio, visualStudioCode, webFlow } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Werk ervaring',
    slug: 'ervaring',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'AGF medewerker',
      company: 'Dirk van den broek',
      image: import('@/assets/logos/DirkVanDenBroek.webp'),
      dates: [new Date('2018-06'), null],
      description: `
        - Ik ben hier begonnen als 16 jarig jongetje
        - Tot de dag van vandaag werk ik er nog steeds
        - Ik doe veel met groente en fruit, hiervan leer ik ook weer nieuwe dingen
        - Ik heb geleerd hoe ik mensen kan aansturen en heb veel ervaring opgedaan met mensen
        - Ik ben nog steeds veel aan het leren van mijn managers bij de Dirk
      `,
      tagsList: {
        title: 'Vulploegmedewerker',
        //TODO add some technologies to the tags
        tags: [],
      },
      links: [],
    },
    {
      role: 'Stagair',
      company: 'ABF Bearings / ABF Motors',
      image: import('@/assets/logos/ABFBearings.jpeg'),
      dates: [new Date('2022-09'), new Date('2023-02')],
      description: `
        - Ik heb hier gezeten voor een project waarbij Machine learning betrokken is
        - Ik heb veel nieuwe ervaringen over Azure en Google cloud opgedaan
        - Ik heb werkervaring opgedaan vanuit het technische veld
        - Ik heb meer zelfstandigheid leren werken en daarnaast ook met een team leren werken
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
        Dit is mijn eigen bedrijf die ik met twee vriend van mij heb opgezet, de volgende putten zijn de dingen die ik heb geleerd:

        - Het wordt me steeds duidelijker hoe een bedrijfsstructuur in elkaar zit
        - Ondanks de verschillende projecten die we hebben gedraait, waarvan er nog geen 1 succesvol is, ben ik wel blij met de dingen
        die ik hieruit heb geleerd.
        - Ik ben blij met de kansen die ik krijg met mijn twee beste vrienden, die ook mijn compagnons zijn.

        Op dit moment zijn we bezig met onze eigen website te bouwen, hopelijk komt die binnenkort live :). We willen websites bouwen 
        voor MKB'ers en uiteindelijk ook uitgroeien tot applicatiebeheer en marketing strategieën
      `,
      tagsList: {
        title: 'Technologies',
        //TODO add some technologies to the tags
        tags: [webFlow(), flutter(), visualStudioCode()],
      },
      links: [website({ url: 'https://www-bijgepast-com.webflow.io/' }),],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
