import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SolutionTemple, our 5th-generation African healer circle, our certifications, and our core values of ethical spell casting.',
};

const certifications = [
    { name: "Energy Healing License", board: "Holistic Practitioner Board" },
    { name: "Spiritual Wellness Certification", board: "Global Occult Council (G.O.C.)" },
    { name: "Registered Member", board: "Spiritual Advisors Network (SAN)" }
];

const coreValues = [
    { name: "Ethical Spell Casting", description: "All rituals are performed with pure intentions, ensuring no harm comes to anyone." },
    { name: "100% Confidentiality", description: "Your privacy is paramount. All consultations and work are kept strictly confidential." },
    { name: "No Black Magic", description: "We strictly avoid any harmful intent or dark arts, focusing only on positive, light-based energy." }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Our Sacred Heritage</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            A legacy of healing passed down through five generations.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">A Lineage of Divine Gifts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SolutionTemple is a 5th-generation African healer circle. Each spiritual consultant in the circle is born with the divine gift of energetic alignment and emotional healing. Our journey began in the sacred lands of Benin, where our elders passed down secret ancestral rituals for love and harmony.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine ancient wisdom with a modern understanding of energy dynamics to provide effective, ethical, and compassionate guidance to souls across the globe.
              </p>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/700"
                alt="A portrait of a wise spiritual healer"
                data-ai-hint="spiritual healer portrait"
                width={600}
                height={700}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">Our Credentials & Guarantees</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center justify-center gap-2"><Zap className="text-accent"/> Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4 text-left">
                            {certifications.map(cert => (
                                <li key={cert.name} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold">{cert.name}</p>
                                        <p className="text-sm text-muted-foreground">{cert.board}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center justify-center gap-2"><Shield className="text-accent"/> Core Values</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4 text-left">
                             {coreValues.map(value => (
                                <li key={value.name} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold">{value.name}</p>
                                        <p className="text-sm text-muted-foreground">{value.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">Ready to Change Your Life?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us guide you on your journey to love and happiness. Your confidential consultation awaits.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-now">Book Your Spell Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
