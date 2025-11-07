"use client";

import { useState, useMemo } from 'react';
import type { Artwork, ArtworkType } from '@/lib/data';
import { artworkTypes } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArtworkCard } from './artwork-card';

type GalleryClientProps = {
  artworks: Artwork[];
};

export default function GalleryClient({ artworks }: GalleryClientProps) {
  const [filter, setFilter] = useState<ArtworkType>('All');

  const filteredArtworks = useMemo(() => {
    if (filter === 'All') {
      return artworks;
    }
    return artworks.filter((artwork) => artwork.type === filter);
  }, [filter, artworks]);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-2 my-8 md:my-12 animation-fade-in" style={{ animationDelay: '0.2s' }}>
        {artworkTypes.map((type) => (
          <Button
            key={type}
            variant={filter === type ? 'default' : 'outline'}
            onClick={() => setFilter(type)}
            className="capitalize"
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animation-fade-in" style={{ animationDelay: '0.4s' }}>
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </>
  );
}
