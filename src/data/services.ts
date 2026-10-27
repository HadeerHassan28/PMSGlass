import { Service } from '../types';
import { facadeAndHandrailServices } from './services/facadeAndHandrailServices';
import { mirrorServices } from './services/mirrorServices';
import { pergolaServices } from './services/pergolaServices';
import { showerAndHardwareServices } from './services/showerAndHardwareServices';

export const servicesData: Service[] = [
  ...facadeAndHandrailServices,
  ...mirrorServices,
  ...pergolaServices,
  ...showerAndHardwareServices,
];
