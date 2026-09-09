import { Service } from '@/types';
import { showerServices } from './showerServices';
import { partitionAndMirrorServices } from './partitionAndMirrorServices';

export const interiorServices: Service[] = [
  ...showerServices,
  ...partitionAndMirrorServices,
];
