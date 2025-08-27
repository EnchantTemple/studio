import type { NavItem, Service, Testimonial, BlogPost, FaqItem } from '@/lib/types';
import { getTranslations } from 'next-intl/server';

export const navItems: NavItem[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/services', label: 'services' },
  { href: '/testimonials', label: 'testimonials' },
  { href: '/blog', label: 'blog' },
  { href: '/faq', label: 'faq' },
  { href: '/contact', label: 'contact' },
];

export const getServices = async (t: (key: string) => string): Promise<Service[]> => [
  {
    key: 'reunite_lovers',
    name: t('reunite_lovers_name'),
    description: t('reunite_lovers_desc'),
    delivery: t('reunite_lovers_delivery'),
    imageUrl: 'https://picsum.photos/400/300?random=1',
    dataAiHint: 'reuniting couple'
  },
  {
    key: 'attract_love',
    name: t('attract_love_name'),
    description: t('attract_love_desc'),
    delivery: t('attract_love_delivery'),
    imageUrl: 'https://picsum.photos/400/300?random=2',
    dataAiHint: 'happy couple'
  },
  {
    key: 'strengthen_relationship',
    name: t('strengthen_relationship_name'),
    description: t('strengthen_relationship_desc'),
    delivery: t('strengthen_relationship_delivery'),
    imageUrl: 'https://picsum.photos/400/300?random=3',
    dataAiHint: 'holding hands'
  },
  {
    key: 'stop_breakup',
    name: t('stop_breakup_name'),
    description: t('stop_breakup_desc'),
    delivery: t('stop_breakup_delivery'),
    imageUrl: 'https://picsum.photos/400/300?random=4',
    dataAiHint: 'sad couple'
  },
  {
    key: 'custom_spell',
    name: t('custom_spell_name'),
    description: t('custom_spell_desc'),
    delivery: t('custom_spell_delivery'),
    imageUrl: 'https://picsum.photos/400/300?random=5',
    dataAiHint: 'mystical abstract'
  },
];

export const getTestimonials = async (t: (key: string) => string): Promise<Testimonial[]> => [
    {
        quote: t('testimonial1_quote'),
        name: t('testimonial1_name'),
        location: t('testimonial1_location'),
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        date: t('testimonial1_date'),
    },
    {
        quote: t('testimonial2_quote'),
        name: t('testimonial2_name'),
        location: t('testimonial2_location'),
        avatar: "https://i.pravatar.cc/150?img=2",
        rating: 5,
        date: t('testimonial2_date'),
    },
    {
        quote: t('testimonial3_quote'),
        name: t('testimonial3_name'),
        location: t('testimonial3_location'),
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 4,
        date: t('testimonial3_date'),
    },
    {
        quote: t('testimonial4_quote'),
        name: t('testimonial4_name'),
        location: t('testimonial4_location'),
        avatar: "https://i.pravatar.cc/150?img=4",
        rating: 5,
        date: t('testimonial4_date'),
    },
    {
        quote: t('testimonial5_quote'),
        name: t('testimonial5_name'),
        location: t('testimonial5_location'),
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        date: t('testimonial5_date'),
    },
    {
        quote: t('testimonial6_quote'),
        name: t('testimonial6_name'),
        location: t('testimonial6_location'),
        avatar: "https://i.pravatar.cc/150?img=6",
        rating: 5,
        date: t('testimonial6_date'),
    },
];

export const getBlogPosts = async (t: (key: string) => string): Promise<BlogPost[]> => [
    {
        slug: '5-signs-you-need-a-love-spell',
        title: t('post1_title'),
        excerpt: t('post1_excerpt'),
        content: t('post1_content', {
            p1: t('post1_content_p1'),
            ol_li1: t('post1_content_ol_li1'),
            ol_li2: t('post1_content_ol_li2'),
            ol_li3: t('post1_content_ol_li3'),
            ol_li4: t('post1_content_ol_li4'),
            ol_li5: t('post1_content_ol_li5'),
            p2: t('post1_content_p2'),
        }),
        imageUrl: 'https://picsum.photos/800/600',
        date: '2024-05-15T10:00:00Z',
    },
    {
        slug: 'how-the-full-moon-affects-spell-energy',
        title: t('post2_title'),
        excerpt: t('post2_excerpt'),
        content: t('post2_content', {
            p1: t('post2_content_p1'),
            ul_li1: t('post2_content_ul_li1'),
            ul_li2: t('post2_content_ul_li2'),
            ul_li3: t('post2_content_ul_li3'),
            p2: t('post2_content_p2'),
        }),
        imageUrl: 'https://picsum.photos/800/600',
        date: '2024-05-22T12:30:00Z',
    },
    {
        slug: 'why-african-love-spells-are-so-powerful',
        title: t('post3_title'),
        excerpt: t('post3_excerpt'),
        content: t('post3_content', {
            p1: t('post3_content_p1'),
            ul_li1: t('post3_content_ul_li1'),
            ul_li2: t('post3_content_ul_li2'),
            ul_li3: t('post3_content_ul_li3'),
            p2: t('post3_content_p2'),
        }),
        imageUrl: 'https://picsum.photos/800/600',
        date: '2024-06-01T09:00:00Z',
    },
    {
        slug: 'truth-about-black-magic',
        title: t('post4_title'),
        excerpt: t('post4_excerpt'),
        content: t('post4_content', {
            p1: t('post4_content_p1'),
            p2: t('post4_content_p2'),
            ul_li1: t('post4_content_ul_li1'),
            ul_li2: t('post4_content_ul_li2'),
            ul_li3: t('post4_content_ul_li3'),
            p3: t('post4_content_p3'),
        }),
        imageUrl: 'https://picsum.photos/800/600',
        date: '2024-06-10T15:00:00Z',
    },
];

export const getFaqs = async (t: (key: string) => string): Promise<FaqItem[]> => [
    {
        question: t('faq1_question'),
        answer: t('faq1_answer'),
    },
    {
        question: t('faq2_question'),
        answer: t('faq2_answer'),
    },
    {
        question: t('faq3_question'),
        answer: t('faq3_answer'),
    },
    {
        question: t('faq4_question'),
        answer: t('faq4_answer'),
    },
    {
        question: t('faq5_question'),
        answer: t('faq5_answer'),
    },
    {
        question: t('faq6_question'),
        answer: t('faq6_answer'),
    },
];
