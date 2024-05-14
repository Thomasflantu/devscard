import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { C, astro, cSharp, dotNet, firebase, java, kotlin, nodeJs, postgreSql, react, typescript, webFlow } from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({
          level: 1,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        typescript({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        postgreSql({ level: 1 }),
        firebase({ level: 1 }),
        C({level: 2}),
        cSharp({level: 2}),
        java({level: 5}),
        kotlin({level: 4}),
        dotNet({level: 3}),
        nodeJs({level: 3}),
        webFlow({level: 3, description: 'Op dit moment gebruik ik webflow met mijn eigen bedrijf BijGepast ' + 
        'https://bijgepast.com'}),

      ],
    },
    {
      title: 'I want to learn',
      skills: [astro({description: 'De website is gemaakt met Astro, maar persoonlijk weet ik er nog niet veel over, '+ 
      'dus zou ik er graag meer over willen leren'})],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:nl', name: 'Nederlands - moedertaal' },
        { icon: 'circle-flags:us', name: 'English - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
