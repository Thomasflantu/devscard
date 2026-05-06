import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { SiteLocale } from '../locales';
import { website } from '../helpers/links';
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
  python,
  linuxUbuntu,
  bitbucket,
} from '../helpers/skills';

const getExperienceSectionData = (locale: SiteLocale = 'nl'): ExperienceSection =>
  locale === 'nl'
    ? {
        config: {
          title: 'Werkervaring',
          slug: 'ervaring',
          icon: 'fa6-solid:suitcase',
          visible: true,
        },
        jobs: [
          {
            role: 'Junior software engineer',
            company: 'Optimation',
            image: import('@/assets/logos/optimationbv_logo.jpg'),
            dates: [new Date('2025-08'), null],
            description: `
              - Ontwikkelt en onderhoudt het Optima Platform, een modulair ecosysteem voor paneelbouw-automatisering.
              - Bouwt en verbetert applicaties en services met .NET, C#, Blazor, Radzen en Avalonia.
              - Werkt mee aan Docker-gebaseerde omgevingen op Linux, inclusief CI/CD, versiebeheer en deploymentprocessen.
            `,
            tagsList: {
              title: 'Technologieën',
              tags: [
                dotNet(),
                cSharp(),
                blazor(),
                radzen(),
                avalonia(),
                docker(),
                linuxUbuntu(),
                azureDevOps(),
                bitbucket(),
                jira(),
                visualStudio(),
              ],
            },
            links: [website({ url: 'https://optimation.nl' })],
          },
          {
            role: 'AGF-medewerker',
            company: 'Dirk van den Broek',
            image: import('@/assets/logos/DirkVanDenBroek.webp'),
            dates: [new Date('2018-06'), new Date('2025-08')],
            description: `
              - Naast mijn studie werkzaam geweest bij Dirk, waar ik begon op 16-jarige leeftijd.
              - Ervaring opgedaan met klantcontact, samenwerken en verantwoordelijkheid nemen in een dynamische werkomgeving.
              - Geleerd om overzicht te houden tijdens drukke momenten en collega’s waar nodig aan te sturen.
              - Sterke communicatieve en sociale vaardigheden ontwikkeld door dagelijks contact met klanten, collega’s en leidinggevenden.
              - Deze werkervaring heeft bijgedragen aan mijn professionele werkhouding, discipline en verantwoordelijkheidsgevoel.
            `,
            tagsList: {
              title: 'Vaardigheden',
              tags: [],
            },
            links: [],
          },
          {
            role: 'Afstudeerstagiair',
            company: 'Optimation',
            image: import('@/assets/logos/optimationbv_logo.jpg'),
            dates: [new Date('2025-02'), new Date('2025-07')],
            description: `
              - Afstudeerstage uitgevoerd binnen het PanelVision-project.
              - Gewerkt aan een geautomatiseerd systeem voor het uitlezen van elektrotechnische schema’s met machine learning.
              - Een modulaire oplossing ontwikkeld met .NET, Python, Docker, YOLOv8, OCR en beeldclassificatie.
              - Ervaring opgedaan met CI/CD, Jira, code reviews en werken binnen een professionele DevOps-omgeving.
            `,
            tagsList: {
              title: 'Technologieën',
              tags: [
                dotNet(),
                cSharp(),
                blazor(),
                radzen(),
                python(),
                pytorch(),
                tesseract(),
                yolov8(),
                googlenet(),
                docker(),
                jira(),
                visualStudio(),
              ],
            },
            links: [website({ url: 'https://optimation.nl' })],
          },
          {
            role: 'Stagiair',
            company: 'ABF Bearings / ABF Motors',
            image: import('@/assets/logos/ABFBearings.jpeg'),
            dates: [new Date('2022-09'), new Date('2023-02')],
            description: `
              - Stage gelopen binnen een technisch georiënteerde werkomgeving.
              - Gewerkt aan een project waarbij machine learning werd toegepast.
              - Ervaring opgedaan met Azure, Google Cloud en Linux-gebaseerde omgevingen.
              - Zowel zelfstandig als in teamverband gewerkt aan technische vraagstukken.
              - Professionele werkervaring opgedaan binnen een bedrijfsomgeving.
            `,
            tagsList: {
              title: 'Technologieën',
              tags: [azure(), azureDevOps(), googleCloud(), linuxUbuntu(), visualStudio()],
            },
            links: [website({ url: 'https://www.abf.store/s/en/' })],
          },
          {
            role: 'Mede-eigenaar',
            company: 'BijGepast',
            image: import('@/assets/logos/BijGepastLogo.png'),
            dates: [new Date('2021-10'), null],
            description: `
              - Mede-eigenaar van BijGepast, een onderneming gericht op websites en digitale oplossingen voor het MKB.
              - Ervaring opgedaan met ondernemerschap, klantgericht denken en het opzetten van digitale projecten.
              - Gewerkt aan conceptontwikkeling, webdesign en technische realisatie van websites.
              - Samen met compagnons gewerkt aan het ontwikkelen van diensten rondom websites, applicatiebeheer en online zichtbaarheid.
            `,
            tagsList: {
              title: 'Technologieën',
              tags: [webFlow(), flutter(), visualStudioCode()],
            },
            links: [website({ url: 'https://www-bijgepast-com.webflow.io/' })],
          },
        ],
      }
    : {
        config: {
          title: 'Experience',
          slug: 'experience',
          icon: 'fa6-solid:suitcase',
          visible: true,
        },
        jobs: [
          {
            role: 'Junior Software Engineer',
            company: 'Optimation',
            image: import('@/assets/logos/optimationbv_logo.jpg'),
            dates: [new Date('2025-08'), null],
            description: `
              - Develops and maintains the Optima Platform, a modular ecosystem for panel-building automation.
              - Builds and improves applications and services with .NET, C#, Blazor, Radzen, and Avalonia.
              - Contributes to Docker-based Linux environments, including CI/CD, version control, and deployment processes.
            `,
            tagsList: {
              title: 'Technologies',
              tags: [
                dotNet(),
                cSharp(),
                blazor(),
                radzen(),
                avalonia(),
                docker(),
                linuxUbuntu(),
                azureDevOps(),
                bitbucket(),
                jira(),
                visualStudio(),
              ],
            },
            links: [website({ url: 'https://optimation.nl' })],
          },
          {
            role: 'Fresh Produce Employee',
            company: 'Dirk van den Broek',
            image: import('@/assets/logos/DirkVanDenBroek.webp'),
            dates: [new Date('2018-06'), new Date('2025-08')],
            description: `
              - Worked at Dirk alongside my studies, starting there at the age of 16.
              - Gained experience in customer service, teamwork, and taking responsibility in a dynamic environment.
              - Learned to keep an overview during busy periods and to guide colleagues when needed.
              - Strengthened communication and interpersonal skills through daily contact with customers, colleagues, and supervisors.
              - This experience contributed to my professional attitude, discipline, and sense of responsibility.
            `,
            tagsList: {
              title: 'Skills',
              tags: [],
            },
            links: [],
          },
          {
            role: 'Graduate Intern',
            company: 'Optimation',
            image: import('@/assets/logos/optimationbv_logo.jpg'),
            dates: [new Date('2025-02'), new Date('2025-07')],
            description: `
              - Completed my graduation internship within the PanelVision project.
              - Worked on an automated system for reading electrical schematics using machine learning.
              - Developed a modular solution with .NET, Python, Docker, YOLOv8, OCR, and image classification.
              - Gained experience with CI/CD, Jira, code reviews, and working in a professional DevOps environment.
            `,
            tagsList: {
              title: 'Technologies',
              tags: [
                dotNet(),
                cSharp(),
                blazor(),
                radzen(),
                python(),
                pytorch(),
                tesseract(),
                yolov8(),
                googlenet(),
                docker(),
                jira(),
                visualStudio(),
              ],
            },
            links: [website({ url: 'https://optimation.nl' })],
          },
          {
            role: 'Intern',
            company: 'ABF Bearings / ABF Motors',
            image: import('@/assets/logos/ABFBearings.jpeg'),
            dates: [new Date('2022-09'), new Date('2023-02')],
            description: `
              - Interned in a technically oriented work environment.
              - Worked on a project in which machine learning was applied.
              - Gained experience with Azure, Google Cloud, and Linux-based environments.
              - Worked both independently and collaboratively on technical challenges.
              - Built professional experience within a company setting.
            `,
            tagsList: {
              title: 'Technologies',
              tags: [azure(), azureDevOps(), googleCloud(), linuxUbuntu(), visualStudio()],
            },
            links: [website({ url: 'https://www.abf.store/s/en/' })],
          },
          {
            role: 'Co-owner',
            company: 'BijGepast',
            image: import('@/assets/logos/BijGepastLogo.png'),
            dates: [new Date('2021-10'), null],
            description: `
              - Co-owner of BijGepast, a business focused on websites and digital solutions for small and medium-sized companies.
              - Gained experience with entrepreneurship, customer-oriented thinking, and setting up digital projects.
              - Worked on concept development, web design, and the technical implementation of websites.
              - Collaborated with partners on services around websites, application management, and online visibility.
            `,
            tagsList: {
              title: 'Technologies',
              tags: [webFlow(), flutter(), visualStudioCode()],
            },
            links: [website({ url: 'https://www-bijgepast-com.webflow.io/' })],
          },
        ],
      };

export default getExperienceSectionData;
