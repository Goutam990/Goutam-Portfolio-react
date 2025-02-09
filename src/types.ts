export type Section = 'introduction' | 'experience' | 'studies' | 'skills';

export interface NavItem {
  id: Section;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}