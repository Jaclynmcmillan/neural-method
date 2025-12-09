export interface NavItem {
  label: string;
  path?: string;
  children?: NavChild[];
}

export interface NavChild {
  label: string;
  description: string;
  path: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectDetails: string;
}