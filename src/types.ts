export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  isEmail?: boolean;
}

export interface ExpertiseCategory {
  title: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

export interface SubProject {
  id?: string;
  name: string;
  imageUrl: string;
  description?: string;
  tags?: string[];
  link?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  category: 'eCommerce' | 'Reservations' | 'Resource Mgmt' | 'IoT' | 'Community' | 'CMS & eCommerce' | 'CMS' | 'All';
  description: string;
  imageUrl?: string;
  images?: string[];
  subProjects?: SubProject[];
  longDescription?: string;
  keyFeatures?: string[];
  architectureDetails?: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface SkillDetail {
  name: string;
  level?: string;
  years?: string;
  description?: string;
  projects?: string[];
  highlights?: string[];
  isPrimary?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: string[];
  detailedSkills?: SkillDetail[];
}

export interface AchievementItem {
  label: string;
  subtext: string;
  iconName: string;
  highlight?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedIn: string;
  portfolio: string;
  location: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  description: string;
  imageUrl: string;
  credentialUrl?: string;
  verifyUrl?: string;
  skills?: string[];
  badgeText?: string;
}

export interface AppLinkItem {
  id?: string;
  name: string;
  url: string;
  description?: string;
  badge?: string;
  isExternal?: boolean;
}

