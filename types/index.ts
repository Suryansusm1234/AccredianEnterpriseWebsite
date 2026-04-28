export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface EdgeStep {
  icon: string;
  label: string;
}

export interface DomainCard {
  icon: string;
  title: string;
}

export interface CourseSegment {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SkillGroup {
  title: string;
  subtitle: string;
}

export interface CATStep {
  letter: string;
  title: string;
  description: string;
}

export interface DeliveryStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface FAQItem {
  tab :string,
  question: string;
  answer: string;
}
export interface Partner{
  name : string;
  url: string;
}