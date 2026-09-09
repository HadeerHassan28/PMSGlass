import { Project } from '../types';
import { facadeProjects } from './projects/facadeProjects';
import { interiorProjects } from './projects/interiorProjects';
import { specializedProjects } from './projects/specializedProjects';

export const projectsData: Project[] = [
  ...facadeProjects,
  ...interiorProjects,
  ...specializedProjects,
];
