import cvFile from '../assets/cv/Nil Nguyen_v2.pdf';

/**
 * Navigation sections for the portfolio
 */
export const NAV_SECTIONS = [
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experiences' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Social media links
 */
export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/nqnil69',
    icon: 'facebook',
    ariaLabel: 'View Facebook profile',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nguyen.nil/',
    icon: 'instagram',
    ariaLabel: 'View Instagram profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nilnguyen/',
    icon: 'linkedin',
    ariaLabel: 'View LinkedIn profile',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/nilnguyen2k',
    icon: 'github',
    ariaLabel: 'View GitHub profile',
  },
];

/**
 * Skill categories
 */
export const SKILL_CATEGORIES = [
  {
    id: 'iac',
    name: 'Infrastructure as Code',
    skills: [
      { name: 'Terraform', level: 90 },
      { name: 'Pulumi', level: 80 },
    ],
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    skills: [
      { name: 'Jenkins', level: 90 },
      { name: 'GitLab CI', level: 85 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'Bitbucket Pipeline', level: 80 },
    ],
  },
  {
    id: 'containers',
    name: 'Containers & Orchestration',
    skills: [
      { name: 'Containerd', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Docker Swarm', level: 75 },
      { name: 'Kubernetes', level: 90 },
      { name: 'Helm', level: 85 },
      { name: 'ECS', level: 85 },
    ],
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Logging',
    skills: [
      { name: 'CloudWatch', level: 85 },
      { name: 'CloudTrail', level: 80 },
      { name: 'ELK/EFK Stack', level: 80 },
      { name: 'Grafana', level: 85 },
      { name: 'Loki', level: 75 },
      { name: 'Prometheus', level: 85 },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud Platforms',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Azure', level: 80 },
      { name: 'Google Cloud', level: 70 },
    ],
  },
  {
    id: 'automation',
    name: 'Automation & Scripting',
    skills: [
      { name: 'Ansible', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'Golang', level: 80 },
      { name: 'Bash', level: 85 },
      { name: 'PowerShell', level: 70 },
    ],
  },
  {
    id: 'selfhosting',
    name: 'Self Hosting',
    skills: [
      { name: 'Jira', level: 85 },
      { name: 'Confluence', level: 85 },
      { name: 'Odoo', level: 75 },
      { name: 'N8N', level: 80 },
      { name: 'Langfuse', level: 75 },
      { name: 'MetaMCP', level: 70 },
      { name: 'LiteLLM', level: 75 },
      { name: 'AnythingLLM', level: 75 },
    ],
  },
  {
    id: 'other',
    name: 'Others',
    skills: [
      { name: 'SonarQube', level: 80 },
      { name: 'K6', level: 75 },
      { name: 'Nginx', level: 90 },
      { name: 'Caddy', level: 75 },
      { name: 'CloudFlare', level: 80 },
    ],
  },
];

/**
 * Resume download URL
 */
export const RESUME_URL = cvFile;

/**
 * Contact email
 */
export const CONTACT_EMAIL = 'nqnil2412@gmail.com';
