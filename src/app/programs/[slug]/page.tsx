
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { programs } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

type ProgramPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: ProgramPageProps): Metadata {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    return {
      title: 'Program Not Found',
    };
  }

  return {
    title: `${program.title} | Studio-H Programs`,
    description: program.longDescription,
  };
}

export default function ProgramPage({ params }: ProgramPageProps) {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  const programImages = program.imageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <div className="container max-w-5xl px-4 md:px-6 py-12 md:py-20 mx-auto">
      <article className="animation-fade-in">
        <header className="mb-8 md:mb-12">
          <h1 className="font-headline text-4xl md:text-5xl">
            {program.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{program.description}</p>
        </header>

        {programImages.length > 0 && (
          <Carousel className="w-full my-8 md:my-12 shadow-lg rounded-lg overflow-hidden">
            <CarouselContent>
              {programImages.map((image, index) => (
                image && (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video">
                      <Image
                        src={image.imageUrl}
                        alt={`${program.title} showcase image ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                )
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        )}

        <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
                <h2 className="font-headline text-2xl mb-4">What You'll Learn</h2>
                <ul className="space-y-3">
                    {program.learningPoints.map(point => (
                    <li key={point} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                    </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="font-headline text-2xl mb-4">Program Details</h2>
                <div
                    className="prose prose-lg max-w-none mx-auto text-foreground/80"
                    dangerouslySetInnerHTML={{ __html: program.longDescription }}
                />
            </div>
        </div>

        {program.studentWork && program.studentWork.length > 0 && (
            <>
                <Separator className="my-12 md:my-20" />
                <section className="text-center">
                    <h2 className="font-headline text-3xl md:text-4xl">Student Showcase</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        See what our talented students have created in this program.
                    </p>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-4xl mx-auto mt-12"
                    >
                        <CarouselContent>
                            {program.studentWork.map((work) => {
                                const studentImage = PlaceHolderImages.find((img) => img.id === work.imageId);
                                return (
                                    <CarouselItem key={work.id} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1">
                                            <Card className="overflow-hidden">
                                                {studentImage && (
                                                    <div className="aspect-[4/5] relative">
                                                        <Image
                                                            src={studentImage.imageUrl}
                                                            alt={work.description}
                                                            fill
                                                            className="object-cover"
                                                            data-ai-hint={studentImage.imageHint}
                                                        />
                                                    </div>
                                                )}
                                                <CardContent className="p-4 text-left">
                                                    <p className="font-semibold text-sm">{work.studentName}</p>
                                                    <p className="text-xs text-muted-foreground">{work.description}</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section>
            </>
        )}

        <div className="mt-12 md:mt-20 text-center">
            <Button asChild size="lg">
                <Link href="/contact">
                    Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}
