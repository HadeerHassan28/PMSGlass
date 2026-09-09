import { Service } from '../types';
import { architecturalServices } from './services/architecturalServices';
import { interiorServices } from './services/interiorServices';

export const servicesData: Service[] = [
  ...architecturalServices,
  ...interiorServices,
];
