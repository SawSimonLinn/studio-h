
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Studio-H',
};

export default function BlogPage() {
  return (
    <div className="container max-w-5xl px-4 md:px-6 py-12 md:py-20 mx-auto">
      <div className="animation-fade-in text-center">
        <h1 className="font-headline text-4xl md:text-6xl">From the Studio</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          News, thoughts, and updates from the world of Studio-H.
        </p>
      </div>

      <div className="mt-12 md:mt-16 grid gap-12 animation-fade-in" style={{ animationDelay: '0.2s' }}>
        {blogPosts.map((post) => {
          const image = post.imageId ? PlaceHolderImages.find(img => img.id === post.imageId) : undefined;
          return (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
              <Card className="grid md:grid-cols-5 gap-6 md:gap-8 items-center overflow-hidden transition-shadow hover:shadow-lg">
                {image && (
                  <div className="md:col-span-2 aspect-video md:aspect-[4/3] relative">
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                )}
                <div className={image ? "md:col-span-3" : "md:col-span-5"}>
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <CardTitle className="font-headline text-2xl md:text-3xl mt-1 group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{post.excerpt}</CardDescription>
                    <div className="mt-4 font-semibold text-accent inline-flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
