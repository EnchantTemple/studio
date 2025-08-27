export type NavItem = {
  href: string;
  label: string;
};

export type Service = {
  name: string;
  description: string;
  delivery: string;
  imageUrl: string;
  dataAiHint: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
