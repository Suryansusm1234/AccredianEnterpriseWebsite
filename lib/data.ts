import type {
  CATStep,
  CourseSegment,
  DeliveryStep,
  DomainCard,
  EdgeStep,
  FAQItem,
  NavLink,
  SkillGroup,
  StatItem,
  Testimonial,
  Partner
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#"},
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  
  { label: "Resources", href: "#resources" },
  
  { label: "FAQ", href: "#faq" },
];

export const STATS: StatItem[] = [
  { value: "10K+", label: "Professionals Trained" },
  { value: "200+", label: "Live Sessions Conducted" },
  { value: "5K+", label: "Active Learners Monthly" },
];

export const EDGE_STEPS: EdgeStep[] = [
  { icon: "architecture", label: "Tailored Solutions" },
  { icon: "lightbulb", label: "Innovative Framework" },
  { icon: "layers", label: "Diverse Offerings" },
  { icon: "schedule", label: "Flexible Delivery" },
  { icon: "school", label: "Expert Guidance" },
];

export const DOMAIN_CARDS: DomainCard[] = [
  { icon: "lightbulb", title: "Product & Innovation Hub" },
  { icon: "psychology", title: "Gen-AI Mastery" },
  { icon: "groups", title: "Leadership Elevation" },
  { icon: "bar_chart", title: "Tech & Data Insights" },
  { icon: "settings", title: "Operations Excellence" },
  { icon: "language", title: "Digital Enterprise" },
  { icon: "payments", title: "Fintech Innovation Lab" },
];

export const COURSE_SEGMENTS: CourseSegment[] = [
  {
    title: "Program Specific",
    description: "Core competencies tailored for specific career paths.",
    imageSrc: "/images/program-specific.svg",
    imageAlt: "Person typing on a laptop with data overlays",
  },
  {
    title: "Industry Specific",
    description: "Deep dives into vertical-focused technologies.",
    imageSrc: "/images/industry-specific.svg",
    imageAlt: "Glass skyscraper representing corporate industry",
  },
  {
    title: "Topic Specific",
    description: "Concentrated modules on niche technical skills.",
    imageSrc: "/images/topic-specific.svg",
    imageAlt: "Notebook and laptop on a clean desk",
  },
  {
    title: "Level Specific",
    description: "From entry-level basics to executive mastery.",
    imageSrc: "/images/level-specific.svg",
    imageAlt: "Diverse group collaborating on a whiteboard",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { title: "Tech Professionals", subtitle: "Full-stack & AI mastery" },
  { title: "Non-Tech Teams", subtitle: "Data literacy & tools" },
  { title: "Emerging Talent", subtitle: "Foundation & soft skills" },
  { title: "Senior Leaders", subtitle: "Strategic decision making" },
];

export const CAT_STEPS: CATStep[] = [
  {
    letter: "C",
    title: "Concept Mastery",
    description: "Foundational knowledge through expert-led sessions.",
  },
  {
    letter: "A",
    title: "Application Focus",
    description: "Real-world projects and industry case studies.",
  },
  {
    letter: "T",
    title: "Tools Proficiency",
    description: "Hands-on mastery of industry-standard software.",
  },
];

export const DELIVERY_STEPS: DeliveryStep[] = [
  {
    number: 1,
    icon: "bar_chart_4_bars",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
  },
  {
    number: 2,
    icon: "present_to_all",
    title: "Customized Training Plan",
    description:
      "Create a tailored roadmap addressing organizational goals.",
  },
  {
    number: 3,
    icon: "smart_display",
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "ADP",
    role: "L&D Head",
    company: "ADP",
    quote:
      "The Gen-AI mastery course completely transformed how our product teams approach development. Highly recommended for technical scaling.",
  },
  {
    name: "Bayer",
    role: "L&D Head",
    company: "Bayer",
    quote:
      "Professional, insightful, and impact-driven. The customized delivery model fits perfectly into our busy corporate calendar.",
  },
];

export const FAQS: FAQItem[] = [
  {
    tab: "About the Course",
    question: "What types of corporate training programs does Accredian offer?",
    answer:
      "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
  },
  {
    tab: "About the Course",
    question: "What domain specializations are available?",
    answer:
      "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
  },
  {
    tab: "About the Delivery",
    question: "Can the courses be customized for specific industries or teams?",
    answer:
      "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
  },
  {
    tab: "About the Delivery",
    question: "Who are the instructors for these programs?",
    answer:
      "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
  },
  {
    tab: "About the Delivery",
    question: "What formats are the programs delivered in?",
    answer:
      "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
  },
  {
    tab: "Miscellaneous",
    question: "What is the ideal team size for corporate training?",
    answer:
      "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
  },
  {
    tab: "Miscellaneous",
    question: "How do we get started with Accredian?",
    answer:
      "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
  },
  
];

export const PARTNERS = [{name:"RELIANCE",url :"/images/rel.png" },
   {name :"HCLTech" ,url:"/images/hcl.png"}, 
   {name :"IBM", url:"/images/ibm.png"}, 
   {name :"CRIF", url:"/images/crif.png"}, 
   {name :"ADP", url:"/images/adp.svg"}, 
   {name :"Bayer", url:"/images/bayer.svg"}];

export const FAQ_TABS = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous",
];

export const SITE_COPY = {
  brand: "Accredian",
  loginLabel: "Login",
  enquireLabel: "Enquire Now",
  navbar: {
    primaryNavLabel: "Primary navigation",
    mobileNavLabel: "Mobile navigation",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
  },
  hero: {
    eyebrow: "NEXT-GEN ENTERPRISE EXPERTISE",
    title: "Build future-ready teams with enterprise learning that scales.",
    description:
      "Accredian helps high-growth organizations close capability gaps with tailored, instructor-led programs across AI, product, data, leadership, and digital transformation.",
    primaryCta: "Enquire Now",
    secondaryCta: "Explore Programs",
    imageSrc: "/images/enterprise-hero.svg",
    imageAlt: "Enterprise training dashboard with collaboration illustrations",
    checklist: [
      "Cohort-based learning journeys",
      "Industry-led projects and mentoring",
      "Flexible delivery for distributed teams",
    ],
  },
  trackRecord: {
    label: "OUR TRACK RECORD",
    title: "Training outcomes trusted by enterprise teams.",
  },
  partnerships: {
    title: "Trusted by leading enterprises and transformation teams.",
  },
  edge: {
    title: "The Accredian Edge",
    description:
      "A modular learning model built to match organizational goals, delivery preferences, and business outcomes.",
  },
  domain: {
    titlePrefix: "Our",
    titleAccent: "Domain Expertise",
    description:
      "Enterprise-ready learning paths spanning strategic, technical, and cross-functional capabilities.",
  },
  segmentation: {
    title: "Course Segmentation for every learning need.",
    description:
      "Choose from targeted pathways designed around role, industry, topic depth, and learner maturity.",
  },
  skills: {
    title: "Skill enhancement pathways for every cohort.",
    description:
      "From technical upskilling to leadership acceleration, our enterprise pathways help every team contribute with confidence.",
  },
  cat: {
    title: "The CAT Framework",
    description:
      "Our learning design blends conceptual understanding, applied problem-solving, and tool fluency to create measurable business impact.",
    impact: "IMPACT",
  },
  delivery: {
    titlePrefix: "How We",
    titleAccent: "Deliver Results",
    titleSuffix: "That Matter?",
  },
  testimonials: {
    title: "Testimonials from Our Partners",
    description:
      "Hear how learning teams use Accredian to build momentum across products, operations, and leadership pipelines.",
  },
  faq: {
    title: "Frequently asked questions.",
    description:
      "Everything you need to know before planning your next enterprise cohort.",
  },
  footer: {
    solutionsHeading: "Solutions",
    companyHeading: "Company",
    tagline:
      "Cultivate high-performance teams through expert learning with customized enterprise solutions.",
    ctaTitle: "Build your next high-impact cohort.",
    ctaDescription:
      "Connect with our enterprise advisors to design a training plan tailored to your teams.",
    copyright: "© 2026 Accredian. All rights reserved.",
    contactSupport: "Contact Support",
    career: "Career",
  },
} as const;
