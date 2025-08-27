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

export const testimonials: Testimonial[] = [
  {
    quote: "SolutionTemple helped me bring back my fiancé in just 4 days. I’m in tears of joy! Thank you, SolutionTemple.",
    name: "Esther",
    location: "UK",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    quote: "My boyfriend started texting me again after 2 weeks of silence. The spell worked — it’s like a miracle.",
    name: "Joy",
    location: "Nigeria",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    date: "1 month ago",
  },
  {
    quote: "I used to doubt spells, but the rituals from SolutionTemple are done with love and ethics. They are truly gifted.",
    name: "Mike",
    location: "Canada",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4,
    date: "3 weeks ago",
  },
  {
    quote: "The strengthen relationship spell worked wonders. The constant arguments have stopped and we feel closer than ever.",
    name: "Sophia",
    location: "USA",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5,
    date: "5 days ago",
  },
   {
    quote: "I was skeptical, but desperate. The results speak for themselves. My marriage is saved from divorce.",
    name: "David",
    location: "Australia",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    date: "2 months ago",
  },
  {
    quote: "Amazingly accurate and compassionate. The consultation alone was worth it. Highly recommend their services.",
    name: "Isabella",
    location: "Brazil",
    avatar: "https://i.pravatar.cc/150?img=6",
    rating: 5,
    date: "1 week ago",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: '5-signs-you-need-a-love-spell',
    title: '5 Signs You Need a Love Spell',
    excerpt: 'Is your love life in turmoil? Discover the five key indicators that suggest a love spell might be the solution you need to restore harmony and connection.',
    content: `
      <p>In the realm of love and relationships, we often face challenges that seem insurmountable. While communication and effort are key, sometimes we need an energetic boost to clear blockages and realign our paths. Here are five signs that you might benefit from a professionally cast love spell:</p>
      <ol>
        <li><strong>Unexplained Distance:</strong> Your partner has become emotionally or physically distant for no apparent reason.</li>
        <li><strong>Constant Conflict:</strong> Arguments have become the norm, and you struggle to find peaceful moments together.</li>
        <li><strong>Third-Party Interference:</strong> You suspect or know that another person is negatively impacting your relationship.</li>
        <li><strong>Lingering Feelings for an Ex:</strong> You can't move on from a past relationship, and you feel a deep soul connection remains.</li>
        <li><strong>A String of Bad Luck in Love:</strong> You find yourself repeating the same negative patterns in every relationship, unable to find lasting happiness.</li>
      </ol>
      <p>If any of these resonate with you, it could be a sign that your energetic field of love needs cleansing and strengthening. A love spell can help clear negativity and open the pathways to true, lasting love.</p>
    `,
    imageUrl: 'https://picsum.photos/800/600',
    date: '2024-05-15T10:00:00Z',
  },
  {
    slug: 'how-the-full-moon-affects-spell-energy',
    title: 'How the Full Moon Affects Spell Energy',
    excerpt: 'The lunar cycle has a profound impact on spiritual work. Learn how the full moon amplifies energy and why it\'s the most potent time for casting love spells.',
    content: `
      <p>The full moon is a time of peak energetic power, culmination, and release. For centuries, spiritual practitioners have harnessed this lunar phase to amplify their rituals and intentions. When it comes to love spells, the full moon's energy is particularly potent for several reasons:</p>
      <ul>
        <li><strong>Heightened Emotions:</strong> The full moon often brings emotions to the surface, making it an ideal time to work on matters of the heart.</li>
        <li><strong>Manifestation Power:</strong> It represents the completion of a cycle, making it a powerful time to manifest your desires and bring them into reality.</li>
        <li><strong>Illumination:</strong> The bright light of the full moon symbolizes clarity and truth, helping to illuminate the true path of your relationship.</li>
      </ul>
      <p>Casting a love spell during the full moon can significantly enhance its effectiveness, helping to bring about quicker and more powerful results. It is a sacred time to focus your intentions on love, healing, and connection.</p>
    `,
    imageUrl: 'https://picsum.photos/800/600',
    date: '2024-05-22T12:30:00Z',
  },
  {
    slug: 'why-african-love-spells-are-so-powerful',
    title: 'Why African Love Spells Are So Powerful',
    excerpt: 'Rooted in ancient traditions and a deep connection to nature, African love spells are renowned for their efficacy. Explore the secrets behind their power.',
    content: `
      <p>African spiritual practices are among the oldest and most powerful in the world. They are deeply connected to the earth, the ancestors, and the natural flow of energy. Here's why love spells from these traditions are so effective:</p>
      <ul>
        <li><strong>Ancestral Wisdom:</strong> These rituals have been passed down through generations, refined and perfected over centuries. They carry the weight and wisdom of countless healers.</li>
        <li><strong>Natural Ingredients:</strong> African spell work utilizes potent herbs, roots, and natural elements, each with specific energetic properties that align with the intention of the spell.</li>
        <li><strong>Holistic Approach:</strong> The focus is not just on the outcome, but on healing the root cause of the issue. It's about restoring balance and harmony within individuals and the relationship.</li>
      </ul>
      <p>Choosing a practitioner from an authentic African lineage ensures you are receiving a service that is not only powerful but also ethical and deeply respectful of the spiritual forces at play.</p>
    `,
    imageUrl: 'https://picsum.photos/800/600',
    date: '2024-06-01T09:00:00Z',
  },
  {
    slug: 'truth-about-black-magic',
    title: 'The Truth About Black Magic: What I Will Never Do',
    excerpt: 'The term "black magic" often evokes fear. A true spiritual healer works only with positive energy. Understand the ethical principles that guide our work.',
    content: `
      <p>It is crucial to understand the distinction between ethical, light-based spiritual work and manipulative, harmful practices often labeled as "black magic." My work is built on a foundation of light, love, and the universal law of "harm none."</p>
      <p>Here's what I will never do:</p>
      <ul>
        <li><strong>Force Free Will:</strong> My spells work to clear obstacles and enhance existing connections; they never force someone to act against their own free will. True love cannot be coerced.</li>
        <li><strong>Cause Harm:</strong> I will never cast a spell intended to harm another person, break up a happy relationship, or cause suffering. All rituals are performed with positive intentions for the highest good of all involved.</li>
        <li><strong>Use Negative Energies:</strong> My practice is rooted in drawing upon positive, natural, and ancestral energies. There is no place for darkness or malevolence in true healing work.</li>
      </ul>
      <p>When seeking spiritual assistance, always ensure your practitioner adheres to a strict ethical code. Your safety, and the well-being of all involved, should be the highest priority.</p>
    `,
    imageUrl: 'https://picsum.photos/800/600',
    date: '2024-06-10T15:00:00Z',
  },
];

export const services: Service[] = [
  {
    name: 'Reunite Lovers Spell',
    description: 'Bring back an ex-lover or reconnect emotionally.',
    delivery: 'Within 3 days',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    dataAiHint: 'reuniting couple'
  },
  {
    name: 'Attract New Love Spell',
    description: 'Manifest a soulmate or serious partner.',
    delivery: 'Within 5 days',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    dataAiHint: 'happy couple'
  },
  {
    name: 'Strengthen Relationship Spell',
    description: 'Eliminate third parties, restore peace.',
    delivery: 'Within 48 hours',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    dataAiHint: 'holding hands'
  },
  {
    name: 'Stop Break-Up / Divorce Spell',
    description: 'Protect your marriage from falling apart.',
    delivery: 'Within 2–4 days',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    dataAiHint: 'sad couple'
  },
  {
    name: 'Custom Spell Work',
    description: 'Tailored to your unique love situation.',
    delivery: 'Time varies',
    imageUrl: 'https://picsum.photos/400/300?random=5',
    dataAiHint: 'mystical abstract'
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Are your spells safe? Do they have any side effects?',
    answer:
      'Absolutely. My spells are 100% safe and rooted in positive, ethical energy. I do not engage in black magic or any rituals intended to cause harm. The only "side effect" is the positive change you seek.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'The manifestation time can vary depending on the complexity of your situation and the energies involved. Some clients see results in as little as 24-48 hours, while others may take a few weeks. Patience and a positive mindset are key. I provide a delivery timeline for each spell on the Services page.',
  },
  {
    question: 'What information do you need from me?',
    answer:
      'To perform the ritual, I will need your full name, and a recent photo if available. For spells involving another person, their name and photo are also very helpful. All information you provide is completely confidential.',
  },
  {
    question: 'Do you guarantee your spells will work?',
    answer:
      "I have over 12 years of experience and a very high success rate. However, due to the nature of spiritual work and the influence of free will, it is unethical to offer a 100% guarantee of a specific outcome. You are paying for my time, expertise, and the powerful ritual I perform on your behalf. I guarantee that I will put my full energy and focus into your case.",
  },
  {
    question: 'What makes your services different from others?',
    answer:
      "My practice is built on a five-generation lineage of African healing wisdom. I combine authentic, ancestral rituals with a strict ethical code. I am a licensed spiritual consultant, and I offer personalized support and complete confidentiality, which sets me apart from many online spell casters.",
  },
  {
    question: 'Is my personal information kept private?',
    answer:
      'Yes, 100%. Your privacy is my top priority. All consultations, contact details, and personal information are strictly confidential and will never be shared with anyone. Please see our Privacy Policy for more details.',
  },
];
