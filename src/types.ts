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

export interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  category: 'eCommerce' | 'Reservations' | 'Resource Mgmt' | 'IoT' | 'Community' | 'All';
  description: string;
  longDescription?: string;
  keyFeatures?: string[];
  architectureDetails?: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
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
