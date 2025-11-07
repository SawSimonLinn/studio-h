
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { programs } from '@/lib/data';

const howItWorksSteps = [
    {
      step: 1,
      title: 'Choose Your Program',
      description: 'Browse our available programs and find the one that ignites your passion, whether you\'re a beginner or an experienced artist.',
    },
    {
      step: 2,
      title: 'Register Online',
      description: 'Sign up for your chosen class through our simple and secure online registration form to reserve your spot.',
    },
    {
      step: 3,
      title: 'Start Creating',
      description: 'Join our welcoming studio environment and begin your artistic journey with expert guidance from our instructors.',
    },
];

const learningPoints = [
    'Fundamental drawing and sketching techniques',
    'Color theory and mixing',
    'Oil, acrylic, and watercolor painting',
    'Digital painting and illustration software',
    'Composition and perspective',
    'Portfolio development',
];

const testimonials = [
    {
        id: 'testimonial-1',
        name: 'Alex Johnson',
        avatarId: 'avatar-1',
        quote: 'Studio-H transformed my hobby into a real passion. The instructors are incredibly supportive and the atmosphere is so inspiring. I\'ve learned more here in six months than I did in years on my own.',
    },
    {
        id: 'testimonial-2',
        name: 'Samantha Lee',
        avatarId: 'avatar-2',
        quote: 'The digital art program was fantastic. I came in with zero experience and now I feel confident creating my own illustrations. A wonderful community to be a part of!',
    },
    {
        id: 'testimonial-3',
        name: 'Michael Chen',
        avatarId: 'avatar-3',
        quote: 'A truly top-notch studio. The "How It Works" process was seamless, and the weekly classes are the highlight of my week. Highly recommend to anyone looking to explore their creative side.',
    },
];


export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <>
      <div className="relative h-[calc(90vh-5rem)] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-primary-foreground p-4">
          <div className="animation-fade-in text-center" style={{ animationDelay: '0.2s' }}>
            <Badge className="text-sm">Welcome to Studio-H</Badge>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl text-white mt-4">
              Where Your Artistic Journey Begins
            </h1>
            <p className="mt-4 mx-auto text-lg md:text-xl text-white/90 max-w-2xl">
              An independent art studio offering classes and workshops for all skill levels.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/programs">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <main className="container px-4 md:px-6 py-12 md:py-20 mx-auto">
        {/* Art Studio Programs */}
        <section className="text-center animation-fade-in">
          <h2 className="font-headline text-3xl md:text-5xl">The Art Studio Programs</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From foundational skills to advanced techniques, find the perfect class to nurture your creativity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {programs.map((program) => {
              const image = PlaceHolderImages.find((img) => img.id === program.imageId);
              return (
                <Card key={program.id} className="overflow-hidden text-left">
                  {image && (
                    <div className="aspect-video relative">
                      <Image
                        src={image.imageUrl}
                        alt={program.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                        <Link href={`/programs/${program.slug}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-20 md:mt-32 animation-fade-in">
            <div className="text-center">
                <h2 className="font-headline text-3xl md:text-5xl">How It Works</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting started at Studio-H is simple. Here’s your path from aspiring artist to creator.
                </p>
            </div>
            <div className="relative mt-12 max-w-4xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
                {howItWorksSteps.map((step, index) => (
                <div key={step.step} className={`relative flex items-start mb-12 last:mb-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-left' : 'md:pl-8 md:text-right'}`}>
                        <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl z-10">
                                {step.step}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-headline text-2xl">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>

        {/* Tuition and Learning */}
        <section className="mt-20 md:mt-32 animation-fade-in">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="font-headline text-3xl">Weekly Class Tuition</h3>
              <p className="mt-2 text-muted-foreground">Invest in your passion with our straightforward weekly plan.</p>
              <div className="my-6">
                <span className="text-5xl font-bold">95,000 Ks</span>
                <span className="text-muted-foreground">/week</span>
              </div>
              <p className="text-sm text-muted-foreground">Includes all materials, open studio access, and personalized instruction.</p>
              <Button asChild size="lg" className="w-full mt-6">
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
            <div>
              <h3 className="font-headline text-3xl">What You'll Learn</h3>
              <p className="mt-2 text-muted-foreground">Our curriculum is designed to give you a well-rounded artistic education.</p>
              <ul className="mt-6 space-y-3">
                {learningPoints.map(point => (
                  <li key={point} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-20 md:mt-32 text-center animation-fade-in">
          <h2 className="font-headline text-3xl md:text-5xl">What Our Students Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the experiences of artists who have grown with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => {
              const avatarImage = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
              return (
              <Card key={testimonial.id} className="text-left flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="mt-4">
                  {avatarImage && (
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} className="object-cover"/>
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </CardFooter>
              </Card>
            )})}
          </div>
        </section>
      </main>
    </>
  );
}
