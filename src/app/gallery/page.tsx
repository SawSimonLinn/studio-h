
import { artworks } from '@/lib/data';
import GalleryClient from './gallery-client';

export const metadata = {
  title: 'Gallery | Studio-H',
};

export default function GalleryPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-20 mx-auto">
      <div className="animation-fade-in text-center">
        <h1 className="font-headline text-4xl md:text-6xl">Artwork Gallery</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated collection of paintings, sketches, and digital creations.
        </p>
      </div>
      
      <GalleryClient artworks={artworks} />
    </div>
  );
}
