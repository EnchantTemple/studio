
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

// These functions provide the base, non-translated data.
// The translation is now handled dynamically in the components.

export const getServices = (): Service[] => {
    const serviceKeys = ['reunite_lovers', 'attract_love', 'strengthen_relationship', 'stop_breakup', 'custom_spell'];
    
    // Using hardcoded English defaults. The `translate` function will fetch from Firestore.
    const defaultMessages: { [key: string]: { name: string, desc: string, delivery: string } } = {
        reunite_lovers: { name: "Reunite Lovers Spell", desc: "Bring back an ex-lover or reconnect emotionally.", delivery: "Delivery: Within 3 days" },
        attract_love: { name: "Attract New Love Spell", desc: "Manifest a soulmate or serious partner.", delivery: "Delivery: Within 5 days" },
        strengthen_relationship: { name: "Strengthen Relationship Spell", desc: "Eliminate third parties, restore peace.", delivery: "Delivery: Within 48 hours" },
        stop_breakup: { name: "Stop Break-Up / Divorce Spell", desc: "Protect your marriage from falling apart.", delivery: "Delivery: Within 2–4 days" },
        custom_spell: { name: "Custom Spell Work", desc: "Tailored to your unique love situation.", delivery: "Delivery: Time varies" }
    };
    
    return serviceKeys.map((key, index) => ({
        key,
        name: defaultMessages[key]?.name || `Service ${index + 1}`,
        description: defaultMessages[key]?.desc || 'Description',
        delivery: defaultMessages[key]?.delivery || 'Delivery varies',
        imageUrl: `https://picsum.photos/400/300?random=${index + 1}`,
        dataAiHint: 'spiritual love'
    }));
};

export const getTestimonials = (): Testimonial[] => {
    const testimonialKeys = ['testimonial1', 'testimonial2', 'testimonial3', 'testimonial4', 'testimonial5', 'testimonial6'];
    
    const defaultMessages: { [key: string]: { quote: string, name: string, location: string, date: string } } = {
        testimonial1: { quote: "SolutionTemple helped me bring back my fiancé in just 4 days. I’m in tears of joy! Thank you, SolutionTemple.", name: "Esther", location: "UK", date: "2 weeks ago" },
        testimonial2: { quote: "My boyfriend started texting me again after 2 weeks of silence. The spell worked — it’s like a miracle.", name: "Joy", location: "Nigeria", date: "1 month ago" },
        testimonial3: { quote: "I used to doubt spells, but the rituals from SolutionTemple are done with love and ethics. They are truly gifted.", name: "Mike", location: "Canada", date: "3 weeks ago" },
        testimonial4: { quote: "The strengthen relationship spell worked wonders. The constant arguments have stopped and we feel closer than ever.", name: "Sophia", location: "USA", date: "5 days ago" },
        testimonial5: { quote: "I was skeptical, but desperate. The results speak for themselves. My marriage is saved from divorce.", name: "David", location: "Australia", date: "2 months ago" },
        testimonial6: { quote: "Amazingly accurate and compassionate. The consultation alone was worth it. Highly recommend their services.", name: "Isabella", location: "Brazil", date: "1 week ago" }
    };

    return testimonialKeys.map((key, index) => ({
        key,
        quote: defaultMessages[key]?.quote || 'Great service!',
        name: defaultMessages[key]?.name || `Client ${index + 1}`,
        location: defaultMessages[key]?.location || 'Earth',
        avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
        rating: 5,
        date: defaultMessages[key]?.date || 'Recently',
    }));
};

export const getBlogPosts = (): BlogPost[] => {
     const postKeys = ['post1', 'post2', 'post3', 'post4'];

     const defaultMessages: { [key: string]: { title: string, excerpt: string, content: string } } = {
        post1: { title: "5 Signs You Need a Love Spell", excerpt: "Is your love life in turmoil? Discover the five key indicators that suggest a love spell might be the solution you need to restore harmony and connection.", content: "<p>In the realm of love and relationships, we often face challenges that seem insurmountable. While communication and effort are key, sometimes we need an energetic boost to clear blockages and realign our paths. Here are five signs that you might benefit from a professionally cast love spell:</p><ol><li><strong >Unexplained Distance:</strong> Your partner has become emotionally or physically distant for no apparent reason.</li><li><strong>Constant Conflict:</strong> Arguments have become the norm, and you struggle to find peaceful moments together.</li><li><strong>Third-Party Interference:</strong> You suspect or know that another person is negatively impacting your relationship.</li><li><strong>Lingering Feelings for an Ex:</strong> You can't move on from a past relationship, and you feel a deep soul connection remains.</li><li><strong>A String of Bad Luck in Love:</strong> You find yourself repeating the same negative patterns in every relationship, unable to find lasting happiness.</li></ol><p>If any of these resonate with you, it could be a sign that your energetic field of love needs cleansing and strengthening. A love spell can help clear negativity and open the pathways to true, lasting love.</p>" },
        post2: { title: "How the Full Moon Affects Spell Energy", excerpt: "The lunar cycle has a profound impact on spiritual work. Learn how the full moon amplifies energy and why it's the most potent time for casting love spells.", content: "<p>The full moon is a time of peak energetic power, culmination, and release. For centuries, spiritual practitioners have harnessed this lunar phase to amplify their rituals and intentions. When it comes to love spells, the full moon's energy is particularly potent for several reasons:</p><ul><li><strong>Heightened Emotions:</strong> The full moon often brings emotions to the surface, making it an ideal time to work on matters of the heart.</li><li><strong>Manifestation Power:</strong> It represents the completion of a cycle, making it a powerful time to manifest your desires and bring them into reality.</li><li><strong>Illumination:</strong> The bright light of the full moon symbolizes clarity and truth, helping to illuminate the true path of your relationship.</li></ul><p>Casting a love spell during the full moon can significantly enhance its effectiveness, helping to bring about quicker and more powerful results. It is a sacred time to focus your intentions on love, healing, and connection.</p>" },
        post3: { title: "Why African Love Spells Are So Powerful", excerpt: "Rooted in ancient traditions and a deep connection to nature, African love spells are renowned for their efficacy. Explore the secrets behind their power.", content: "<p>African spiritual practices are among the oldest and most powerful in the world. They are deeply connected to the earth, the ancestors, and the natural flow of energy. Here's why love spells from these traditions are so effective:</p><ul><li><strong>Ancestral Wisdom:</strong> These rituals have been passed down through generations, refined and perfected over centuries. They carry the weight and wisdom of countless healers.</li><li><strong>Natural Ingredients:</strong> African spell work utilizes potent herbs, roots, and natural elements, each with specific energetic properties that align with the intention of the spell.</li><li><strong>Holistic Approach:</strong> The focus is not just on the outcome, but on healing the root cause of the issue. It's about restoring balance and harmony within individuals and the relationship.</li></ul><p>Choosing a practitioner from an authentic African lineage ensures you are receiving a service that is not only powerful but also ethical and deeply respectful of the spiritual forces at play.</p>" },
        post4: { title: "The Truth About Black Magic: What I Will Never Do", excerpt: "The term 'black magic' often evokes fear. A true spiritual healer works only with positive energy. Understand the ethical principles that guide our work.", content: "<p>It is crucial to understand the distinction between ethical, light-based spiritual work and manipulative, harmful practices often labeled as 'black magic.' My work is built on a foundation of light, love, and the universal law of 'harm none.'</p><p>Here's what I will never do:</p><ul><li><strong>Force Free Will:</strong> My spells work to clear obstacles and enhance existing connections; they never force someone to act against their own free will. True love cannot be coerced.</li><li><strong>Cause Harm:</strong> I will never cast a spell intended to harm another person, to break up a happy relationship, or to cause suffering. All rituals are performed with positive intentions for the highest good of all involved.</li><li><strong>Use Negative Energies:</strong> My practice is rooted in drawing upon positive, natural, and ancestral energies. There is no place for darkness or malevolence in true healing work.</li></ul><p>When seeking spiritual assistance, always ensure your practitioner adheres to a strict ethical code. Your safety, and the well-being of all involved, should be the highest priority.</p>" }
     };

     return postKeys.map((key, index) => ({
        key,
        slug: `slug-${key}`,
        title: defaultMessages[key]?.title || `Blog Post ${index + 1}`,
        excerpt: defaultMessages[key]?.excerpt || 'Excerpt...',
        content: defaultMessages[key]?.content || '<p>Content</p>',
        imageUrl: `https://picsum.photos/800/600?random=${index + 10}`,
        date: new Date(2024, 5, 15 - index * 5).toISOString(),
     }));
};

export const getFaqs = (): FaqItem[] => {
    const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'];
    
    const defaultMessages: { [key: string]: { question: string, answer: string } } = {
        faq1: { question: "Are your spells safe? Do they have any side effects?", answer: "Absolutely. My spells are 100% safe and rooted in positive, ethical energy. I do not engage in black magic or any rituals intended to cause harm. The only \"side effect\" is the positive change you seek." },
        faq2: { question: "How long does it take to see results?", answer: "The manifestation time can vary depending on the complexity of your situation and the energies involved. Some clients see results in as little as 24-48 hours, while others may take a few weeks. Patience and a positive mindset are key. I provide a delivery timeline for each spell on the Services page." },
        faq3: { question: "What information do you need from me?", answer: "To perform the ritual, I will need your full name, and a recent photo if available. For spells involving another person, their name and photo are also very helpful. All information you provide is completely confidential." },
        faq4: { question: "Do you guarantee your spells will work?", answer: "I have over 12 years of experience and a very high success rate. However, due to the nature of spiritual work and the influence of free will, it is unethical to offer a 100% guarantee of a specific outcome. You are paying for my time, expertise, and the powerful ritual I perform on your behalf. I guarantee that I will put my full energy and focus into your case." },
        faq5: { question: "What makes your services different from others?", answer: "My practice is built on a five-generation lineage of African healing wisdom. I combine authentic, ancestral rituals with a strict ethical code. I am a licensed spiritual consultant, and I offer personalized support and complete confidentiality, which sets me apart from many online spell casters." },
        faq6: { question: "Is my personal information kept private?", answer: "Yes, 100%. Your privacy is my top priority. All consultations, contact details, and personal information are strictly confidential and will never be shared with anyone. Please see our Privacy Policy for more details." }
    };

    return faqKeys.map((key, index) => ({
        key,
        question: defaultMessages[key]?.question || `Question ${index + 1}?`,
        answer: defaultMessages[key]?.answer || 'Answer.'
    }));
};
