import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  C,
  astro,
  avalonia,
  azure,
  bpmn,
  businessAnalysis,
  cSharp,
  domainDrivenDesign,
  dotNet,
  eventDrivenArchitecture,
  firebase,
  flutter,
  googleCloud,
  intelliJ,
  java,
  kotlin,
  nodeJs,
  postgreSql,
  react,
  typescript,
  visualStudio,
  visualStudioCode,
  webFlow,
  // nieuwe/relevante skills:
  python,
  docker,
  pytorch,
  yolov8,
  tesseract,
  googlenet,
  onnxRuntime,
  opencv,
  linuxUbuntu,
  azureDevOps,
  jira,
  scrum,
  azureOpenAI,
  kubernetes,
  terraform,
  bicep,
  langChain,
  langGraph,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Vaardigheden',
    slug: 'vaardigheden',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Wat ik al weet',
      skills: [
        react({ level: 1 }),
        typescript({ level: 4 }),
        postgreSql({ level: 1 }),
        firebase({ level: 1 }),
        C({ level: 2 }),
        cSharp({ level: 4 }),
        java({ level: 5 }),
        flutter({ level: 3 }),
        kotlin({ level: 4 }),
        dotNet({ level: 5 }),
        nodeJs({ level: 3 }),

        python({ level: 4 }),
        docker({ level: 4, description: 'Ervaring met Docker Swarm voor productie-omgevingen (Linux clusters)' }),
        linuxUbuntu({ level: 4 }),
        azure({ level: 3 }),
        azureDevOps({ level: 3 }),
        jira({ level: 4 }),
        scrum(),
        pytorch({ level: 4 }),
        yolov8({ level: 4 }),
        tesseract({ level: 3 }),
        googlenet({ level: 3 }),
        onnxRuntime({ level: 2 }),
        opencv({ level: 2 }),
        azureOpenAI({ level: 2 }),

        webFlow({
          level: 3,
          description: 'Op dit moment gebruik ik Webflow met mijn eigen bedrijf BijGepast https://bijgepast.com',
        }),
        googleCloud({ level: 2 }),
        visualStudioCode({ level: 4, description: 'Deze tool gebruik ik vooral tegenwoordig' }),
        visualStudio({ level: 2, description: 'Deze tool heb ik gebruikt tijdens mijn stage bij ABF' }),
        intelliJ({ level: 4, description: 'Deze tool heb ik veel gebruikt op school in de eerste 2 jaar' }),
        astro({ level: 2, description: 'Ik heb Astro gebruikt om deze website te maken' }),
        avalonia({ level: 2, description: 'Ik heb Avalonia gebruikt om desktop applicaties te maken' }),
      ],
    },

    {
      title: 'Wat ik nog wil leren',
      skills: [
        domainDrivenDesign(),
        eventDrivenArchitecture(),
        bpmn(),
        businessAnalysis(),

        // *** Interessante AI tooling voor de functie ***
        kubernetes(),
        terraform(),
        bicep(),
        langChain(),
        langGraph(),
      ],
    },

    {
      title: 'Welke talen ik spreek',
      skills: [
        { icon: 'circle-flags:nl', name: 'Nederlands - moedertaal' },
        { icon: 'circle-flags:us', name: 'English - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
