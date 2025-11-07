
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { programs } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
    title: 'Our Programs | Studio-H',
};

export default function ProgramsPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-20 mx-auto">
        <div className="animation-fade-in text-center">
            <h1 className="font-headline text-4xl md:text-6xl">Our Programs</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                From foundational skills to advanced techniques, find the perfect class to nurture your creativity.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animation-fade-in" style={{ animationDelay: '0.2s' }}>
            {programs.map((program) => {
              const image = PlaceHolderImages.find((img) => img.id === program.imageId);
              return (
                <Card key={program.id} className="overflow-hidden text-left flex flex-col">
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
                  <CardContent className="flex-grow">
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
    </div>
  );
}
