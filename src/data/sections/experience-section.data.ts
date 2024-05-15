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
        - In tristique vulputate augue vel egestas.
        - Quisque ac imperdiet tortor, at lacinia ex.
        - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
        - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
        - Nunc malesuada leo et est iaculis facilisis.
        - Fusce eu urna ut magna malesuada fringilla.
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
        - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
        - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
        - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
        - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
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
        Nulla volutpat justo ante, rhoncus posuere massa egestas in:

        - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
        - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

        Donec non vulputate augue 🤓
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
