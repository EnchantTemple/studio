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

export const getServices = (): Service[] => {
    const serviceKeys = ['reunite_lovers', 'attract_love', 'strengthen_relationship', 'stop_breakup', 'custom_spell'];
    
    return serviceKeys.map((key, index) => ({
        key,
        name: `Service ${index + 1}`, // Placeholder, will be translated
        description: 'Description', // Placeholder
        delivery: 'Delivery varies', // Placeholder
        imageUrl: `https://picsum.photos/400/300?random=${index + 1}`,
        dataAiHint: 'spiritual love'
    }));
};

export const getTestimonials = (): Testimonial[] => {
    const testimonialKeys = ['testimonial1', 'testimonial2', 'testimonial3', 'testimonial4', 'testimonial5', 'testimonial6'];
    
    return testimonialKeys.map((key, index) => ({
        key,
        quote: 'Great service!', // Placeholder
        name: `Client ${index + 1}`, // Placeholder
        location: 'Earth', // Placeholder
        avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
        rating: 5,
        date: 'Recently', // Placeholder
    }));
};

export const getBlogPosts = (): BlogPost[] => {
     const postKeys = ['post1', 'post2', 'post3', 'post4'];

     return postKeys.map((key, index) => ({
        key,
        slug: `slug-${key}`,
        title: `Blog Post ${index + 1}`, // Placeholder
        excerpt: 'Excerpt...', // Placeholder
        content: '<p>Content</p>', // Placeholder
        imageUrl: `https://picsum.photos/800/600?random=${index + 10}`,
        date: new Date(2024, 5, 15 - index * 5).toISOString(),
     }));
};

export const getFaqs = (): FaqItem[] => {
    const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'];

    return faqKeys.map((key, index) => ({
        key,
        question: `Question ${index + 1}?`, // Placeholder
        answer: 'Answer.' // Placeholder
    }));
};
