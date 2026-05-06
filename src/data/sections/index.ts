import type { Sections } from '@/types/data';
import type { SiteLocale } from '../locales';
import educationData from './education-section.data';
import experienceData from './experience-section.data';
import favoritesData from './favorites-section.data';
import mainData from './main-section.data';
import portfolioData from './portfolio-section.data';
import skillsData from './skills-section.data';
import testimonialsData from './testimonials-section.data';

export const getSections = (locale: SiteLocale = 'nl'): Sections => ({
  main: mainData(locale),
  skills: skillsData(locale),
  experience: experienceData(locale),
  portfolio: portfolioData(locale),
  education: educationData(locale),
  testimonials: testimonialsData(locale),
  favorites: favoritesData(locale),
});

export default getSections;
