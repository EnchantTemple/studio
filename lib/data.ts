import type { NavItem, Service, Testimonial, BlogPost, FaqItem } from '@/lib/types';
import messages from '../messages/en.json';

export const navItems: NavItem[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/services', label: 'services' },
  { href: '/testimonials', label: 'testimonials' },
  { href: '/blog', label: 'blog' },
  { href: '/faq', label: 'faq' },
  { href: '/contact', label: 'contact' },
];

const getNestedValue = (obj: any, key: string) => key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);

export const getServices = (): Service[] => {
    const serviceKeys = ['reunite_lovers', 'attract_love', 'strengthen_relationship', 'stop_breakup', 'custom_spell'];
    
    return serviceKeys.map((key, index) => ({
        key,
        name: getNestedValue(messages, `HomePage.Services.${key}_name`) || `Service ${index + 1}`,
        description: getNestedValue(messages, `HomePage.Services.${key}_desc`) || 'Description',
        delivery: getNestedValue(messages, `HomePage.Services.${key}_delivery`) || 'Delivery varies',
        imageUrl: `https://picsum.photos/400/300?random=${index + 1}`,
        dataAiHint: 'spiritual love'
    }));
};

export const getTestimonials = (): Testimonial[] => {
    const testimonialKeys = ['testimonial1', 'testimonial2', 'testimonial3', 'testimonial4', 'testimonial5', 'testimonial6'];
    
    return testimonialKeys.map((key, index) => ({
        key,
        quote: getNestedValue(messages, `TestimonialsPage.${key}_quote`) || 'Great service!',
        name: getNestedValue(messages, `TestimonialsPage.${key}_name`) || `Client ${index + 1}`,
        location: getNestedValue(messages, `TestimonialsPage.${key}_location`) || 'Earth',
        avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
        rating: 5,
        date: getNestedValue(messages, `TestimonialsPage.${key}_date`) || 'Recently',
    }));
};

export const getBlogPosts = (): BlogPost[] => {
     const postKeys = ['post1', 'post2', 'post3', 'post4'];

     return postKeys.map((key, index) => ({
        key,
        slug: `slug-${key}`,
        title: getNestedValue(messages, `BlogPage.${key}_title`) || `Blog Post ${index + 1}`,
        excerpt: getNestedValue(messages, `BlogPage.${key}_excerpt`) || 'Excerpt...',
        content: getNestedValue(messages, `BlogPage.${key}_content`) || '<p>Content</p>',
        imageUrl: `https://picsum.photos/800/600?random=${index + 10}`,
        date: new Date(2024, 5, 15 - index * 5).toISOString(),
     }));
};

export const getFaqs = (): FaqItem[] => {
    const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'];

    return faqKeys.map((key, index) => ({
        key,
        question: getNestedValue(messages, `FaqPage.${key}_question`) || `Question ${index + 1}?`,
        answer: getNestedValue(messages, `FaqPage.${key}_answer`) || 'Answer.'
    }));
};
