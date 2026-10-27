export interface LocalizedString {
  ar: string;
  en: string;
}

export interface LocalizedStringArray {
  ar: string[];
  en: string[];
}

export type CategoryType = 'all' | 'malls' | 'retail' | 'villas' | 'apartments';

export type ServiceId =
  | 'facades'
  | 'handrails'
  | 'mirrors'
  | 'pergolas'
  | 'decorative-mirrors'
  | 'showers'
  | 'accessories';

export interface ProjectSpec {
  label: LocalizedString;
  value: LocalizedString;
}

export interface Project {
  id: string;
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  category: CategoryType;
  client: LocalizedString;
  location: LocalizedString;
  year: string;
  area: string;
  glassType: LocalizedString;
  hardwareType: LocalizedString;
  mainImage: string;
  galleryImages: string[];
  description: LocalizedString;
  scopeOfWork: LocalizedStringArray;
  specs: ProjectSpec[];
  featured?: boolean;
}

export interface ServiceSpec {
  title: LocalizedString;
  description: LocalizedString;
}

export interface Service {
  id: ServiceId | string;
  title: LocalizedString;
  subtitle: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  iconName: string;
  mainImage: string;
  gallery: string[];
  features: LocalizedStringArray;
  applications: LocalizedStringArray;
  technicalSpecs: ServiceSpec[];
}
