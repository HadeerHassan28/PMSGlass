import { Service } from '@/types';
import { facadeServices } from './facadeServices';
import { railingsAndTemperedServices } from './railingsAndTemperedServices';

export const architecturalServices: Service[] = [
  ...facadeServices,
  ...railingsAndTemperedServices,
];
