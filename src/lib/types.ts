export type NavItem = {
  href: string;
  label: string;
};

export type Service = {
  key: string;
  name: string;
  description: string;
  delivery: string;
  imageUrl: string;
  dataAiHint: string;
};

export type Testimonial = {
  key: string;
  quote: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
};

export type BlogPost = {
  key: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
};

export type FaqItem = {
  key: string;
  question: string;
  answer: string;
};
