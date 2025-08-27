import type { NavItem, Service, Testimonial, BlogPost, FaqItem } from '@/lib/types';

export const navItems: NavItem[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/services', label: 'services' },
  { href: '/testimonials', label: 'testimonials' },
  { href: '/blog', label: 'blog' },
  { href: '/faq', label: 'faq' },
  { href: '/contact', label: 'contact' },
];

export const getServices = (): Omit<Service, 'name'|'description'|'delivery'>[] => {
    const serviceKeys = ['reunite_lovers', 'attract_love', 'strengthen_relationship', 'stop_breakup', 'custom_spell'];
    
    return serviceKeys.map((key, index) => ({
        key,
        imageUrl: `https://picsum.photos/400/300?random=${index + 1}`,
        dataAiHint: 'spiritual love'
    }));
};

export const getTestimonials = (): Omit<Testimonial, 'quote'|'name'|'location'|'date'>[] => {
    const testimonialKeys = ['testimonial1', 'testimonial2', 'testimonial3', 'testimonial4', 'testimonial5', 'testimonial6'];
    
    return testimonialKeys.map((key, index) => ({
        key,
        avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
        rating: 5,
    }));
};

export const getBlogPosts = (): Omit<BlogPost, 'title'|'excerpt'|'content'>[] => {
     const postKeys = ['post1', 'post2', 'post3', 'post4'];

     return postKeys.map((key, index) => ({
        key,
        slug: `slug-${key}`,
        imageUrl: `https://picsum.photos/800/600?random=${index + 10}`,
        date: new Date(2024, 5, 15 - index * 5).toISOString(),
     }));
};

export const getFaqs = (): Omit<FaqItem, 'question'|'answer'>[] => {
    const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'];

    return faqKeys.map((key) => ({
        key,
    }));
};
