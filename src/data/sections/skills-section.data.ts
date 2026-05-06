import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { SiteLocale } from '../locales';
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

const getSharedSkillSets = () => [
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
  docker({ level: 4, description: 'Experience with Docker Swarm for production environments (Linux clusters)' }),
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
    description: 'I currently use Webflow within my own company, BijGepast: https://bijgepast.com',
  }),
  googleCloud({ level: 2 }),
  visualStudioCode({ level: 4, description: 'This is the tool I mainly use nowadays' }),
  visualStudio({ level: 2, description: 'I used this tool during my internship at ABF' }),
  intelliJ({ level: 4, description: 'I used this tool a lot during the first two years of my studies' }),
  astro({ level: 2, description: 'I used Astro to build this website' }),
  avalonia({ level: 2, description: 'I used Avalonia to build desktop applications' }),
];

const getSkillsSectionData = (locale: SiteLocale = 'nl'): SkillsSection =>
  locale === 'nl'
    ? {
        config: {
          title: 'Vaardigheden',
          slug: 'vaardigheden',
          icon: 'fa6-solid:bars-progress',
          visible: true,
        },
        skillSets: [
          {
            title: 'Wat ik al beheers',
            skills: getSharedSkillSets(),
          },
          {
            title: 'Wat ik verder wil leren',
            skills: [
              domainDrivenDesign(),
              eventDrivenArchitecture(),
              bpmn(),
              businessAnalysis(),
              kubernetes(),
              terraform(),
              bicep(),
              langChain(),
              langGraph(),
            ],
          },
          {
            title: 'Talen die ik spreek',
            skills: [
              { icon: 'circle-flags:nl', name: 'Nederlands - moedertaal' },
              { icon: 'circle-flags:us', name: 'Engels - B2' },
            ],
          },
        ],
      }
    : {
        config: {
          title: 'Skills',
          slug: 'skills',
          icon: 'fa6-solid:bars-progress',
          visible: true,
        },
        skillSets: [
          {
            title: 'What I already know',
            skills: getSharedSkillSets(),
          },
          {
            title: 'What I still want to learn',
            skills: [
              domainDrivenDesign(),
              eventDrivenArchitecture(),
              bpmn(),
              businessAnalysis(),
              kubernetes(),
              terraform(),
              bicep(),
              langChain(),
              langGraph(),
            ],
          },
          {
            title: 'Languages I speak',
            skills: [
              { icon: 'circle-flags:nl', name: 'Dutch - native' },
              { icon: 'circle-flags:us', name: 'English - B2' },
            ],
          },
        ],
      };

export default getSkillsSectionData;
