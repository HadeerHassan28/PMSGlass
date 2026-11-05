import { Project, CategoryType } from '../types';
import { mallsProjects } from './projects/mallsProjects';
import { retailProjects } from './projects/retailProjects';
import { villasProjects } from './projects/villasProjects';
import { apartmentsProjects } from './projects/apartmentsProjects';

export { mallsProjects, retailProjects, villasProjects, apartmentsProjects };

export const projectCategoriesMap: Record<Exclude<CategoryType, 'all'>, Project[]> = {
  malls: mallsProjects,
  retail: retailProjects,
  villas: villasProjects,
  apartments: apartmentsProjects,
};

export const projectsData: Project[] = [
  ...(mallsProjects && mallsProjects.length > 0 ? mallsProjects : []),
  ...(retailProjects && retailProjects.length > 0 ? retailProjects : []),
  ...(villasProjects && villasProjects.length > 0 ? villasProjects : []),
  ...(apartmentsProjects && apartmentsProjects.length > 0 ? apartmentsProjects : []),
];
