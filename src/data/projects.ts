import { Project } from '../types';
import { mallsProjects } from './projects/mallsProjects';
import { retailProjects } from './projects/retailProjects';
import { villasProjects } from './projects/villasProjects';
import { apartmentsProjects } from './projects/apartmentsProjects';

export const projectsData: Project[] = [
  ...mallsProjects,
  ...retailProjects,
  ...villasProjects,
  ...apartmentsProjects,
];
