export interface ServiceItem {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  image: string;
  badge?: string;
  priceStart?: number;
  currency?: string;
  duration?: string;
  features?: string[];
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  description?: string;
  defaultSliderPosition?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  location: string;
  date: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  excerpt: string;
  content: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
  telefono?: string;
}
