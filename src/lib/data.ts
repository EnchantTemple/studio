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

export const getMessages = async (locale: string) => {
    try {
        return (await import(`../../messages/${locale}.json`)).default;
    } catch (e) {
        return (await import(`../../messages/en.json`)).default;
    }
}

const getNestedValue = (obj: any, key: string) => key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);


export const getServices = async (locale: string): Promise<Service[]> => {
    const t = await getMessages(locale);
    const serviceKeys = ['reunite_lovers', 'attract_love', 'strengthen_relationship', 'stop_breakup', 'custom_spell'];
    
    return serviceKeys.map((key, index) => ({
        key,
        name: getNestedValue(t, `HomePage.Services.${key}_name`) || `Service ${index + 1}`,
        description: getNestedValue(t, `HomePage.Services.${key}_desc`) || 'Description',
        delivery: getNestedValue(t, `HomePage.Services.${key}_delivery`) || 'Delivery varies',
        imageUrl: `https://picsum.photos/400/300?random=${index + 1}`,
        dataAiHint: 'spiritual love'
    }));
};

export const getTestimonials = async (locale: string): Promise<Testimonial[]> => {
    const t = await getMessages(locale);
    const testimonialKeys = ['testimonial1', 'testimonial2', 'testimonial3', 'testimonial4', 'testimonial5', 'testimonial6'];
    
    return testimonialKeys.map((key, index) => ({
        quote: getNestedValue(t, `TestimonialsPage.${key}_quote`) || 'Great service!',
        name: getNestedValue(t, `TestimonialsPage.${key}_name`) || `Client ${index + 1}`,
        location: getNestedValue(t, `TestimonialsPage.${key}_location`) || 'Earth',
        avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
        rating: 5,
        date: getNestedValue(t, `TestimonialsPage.${key}_date`) || 'Recently',
    }));
};

export const getBlogPosts = async (locale: string): Promise<BlogPost[]> => {
     const t = await getMessages(locale);
     const postKeys = ['post1', 'post2', 'post3', 'post4'];

     return postKeys.map((key, index) => ({
        slug: `slug-${key}`,
        title: getNestedValue(t, `BlogPage.${key}_title`) || `Blog Post ${index + 1}`,
        excerpt: getNestedValue(t, `BlogPage.${key}_excerpt`) || 'Excerpt...',
        content: getNestedValue(t, `BlogPage.${key}_content`) || '<p>Content</p>',
        imageUrl: `https://picsum.photos/800/600?random=${index + 10}`,
        date: new Date(2024, 5, 15 - index * 5).toISOString(),
     }));
};

export const getFaqs = async (locale: string): Promise<FaqItem[]> => {
    const t = await getMessages(locale);
    const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'];

    return faqKeys.map((key, index) => ({
        question: getNestedValue(t, `FaqPage.${key}_question`) || `Question ${index + 1}?`,
        answer: getNestedValue(t, `FaqPage.${key}_answer`) || 'Answer.'
    }));
};
