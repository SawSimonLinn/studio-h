
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'About | Studio-H',
};

const instructors = [
  {
    name: 'Teacher Harry',
    role: 'Founder & Digital Art Specialist',
    story: 'A master of the digital canvas, Teacher Harry brings characters and worlds to life. His background in game design and animation provides students with cutting-edge skills and a deep understanding of visual storytelling in the digital age. He founded Studio-H to create a space where creativity flourishes.',
    imageId: 'instructor-1',
  },
  {
    name: 'Elara Vance',
    role: 'Lead Oil Painting Instructor',
    story: 'With over 15 years of experience in oil painting, Elara\'s work explores the interplay of light and emotion. She is passionate about mentoring aspiring artists and helping them find their unique voice.',
    imageId: 'about-portrait',
  },
  {
    name: 'Teacher Allie',
    role: 'Drawing & Sketching Guru',
    story: 'Teacher Allie believes that drawing is the foundation of all art. Her patient and methodical approach helps students master the fundamentals of form, perspective, and composition, building a strong base for any artistic pursuit.',
    imageId: 'instructor-2',
  },
  {
    name: 'Teacher Htet',
    role: 'Watercolor & Mixed Media Artist',
    story: 'Teacher Htet is known for her fluid and expressive watercolor works. She encourages students to experiment and embrace the unpredictable beauty of the medium, combining it with other materials to create truly unique pieces.',
    imageId: 'instructor-3',
  },
];

export default function AboutPage() {
  const founder = instructors[0];
  const team = instructors.slice(1);

  return (
    <div className="container max-w-5xl px-4 md:px-6 py-12 md:py-20 mx-auto">
      <div className="animation-fade-in text-center">
        <h1 className="font-headline text-4xl md:text-6xl">
          The Heart of the Studio
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
        Studio-H began not in a grand studio, but in a small corner of a room filled with sketchbooks and scattered pencils. It was born from a lifelong passion for capturing the world not just as it is, but as it could be. We believe that art is a language that transcends words, a way to share stories, evoke emotions, and explore the boundless realms of imagination.
        </p>
      </div>

      {/* Founder Section */}
      <div className="mt-12 md:mt-20 grid md:grid-cols-5 gap-12 items-start animation-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="md:col-span-2">
          <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src={PlaceHolderImages.find((img) => img.id === founder.imageId)?.imageUrl || ''}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              data-ai-hint={PlaceHolderImages.find((img) => img.id === founder.imageId)?.imageHint}
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-8">
          <div>
            <h2 className="font-headline text-3xl">Meet the Founder</h2>
            <p className="mt-1 text-lg font-semibold text-accent">{founder.name} - {founder.role}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {founder.story}
            </p>
          </div>
        </div>
      </div>
      
      <Separator className="my-12 md:my-20" />

      {/* Instructors Section */}
      <div className="animation-fade-in text-center" style={{ animationDelay: '0.4s' }}>
        <h2 className="font-headline text-4xl md:text-5xl">Our Instructors</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A team of passionate and experienced artists dedicated to guiding your creative journey.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((instructor) => {
                const image = PlaceHolderImages.find((img) => img.id === instructor.imageId);
                return (
                    <Card key={instructor.name} className="text-left overflow-hidden">
                        {image && (
                            <div className="aspect-[4/5] relative">
                                <Image
                                src={image.imageUrl}
                                alt={instructor.name}
                                fill
                                className="object-cover"
                                data-ai-hint={image.imageHint}
                                />
                            </div>
                        )}
                        <CardContent className="p-6">
                            <h3 className="font-headline text-xl">{instructor.name}</h3>
                            <p className="text-sm text-accent font-semibold">{instructor.role}</p>
                            <p className="mt-2 text-sm text-muted-foreground">{instructor.story}</p>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
      </div>
    </div>
  );
}
