
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Studio-H Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = post.imageId ? PlaceHolderImages.find((img) => img.id === post.imageId) : undefined;

  return (
    <div className="container max-w-3xl px-4 md:px-6 py-12 md:py-20 mx-auto">
      <article className="animation-fade-in">
        <header className="mb-8 md:mb-12 text-center">
          <p className="text-sm text-muted-foreground">{post.date}</p>
          <h1 className="font-headline text-4xl md:text-5xl mt-2">
            {post.title}
          </h1>
        </header>

        {image && (
          <div className="relative aspect-video rounded-lg overflow-hidden my-8 md:my-12 shadow-lg">
            <Image
              src={image.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              priority
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none mx-auto text-foreground/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
