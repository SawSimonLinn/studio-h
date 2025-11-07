"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Artwork } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { ExternalLink } from 'lucide-react';

type ArtworkCardProps = {
  artwork: Artwork;
};

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === artwork.imageId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative block cursor-pointer overflow-hidden rounded-lg shadow-lg">
          {image && (
            <Image
              src={image.imageUrl}
              alt={artwork.title}
              width={600}
              height={800}
              className="w-full object-cover aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-headline text-white">{artwork.title}</h3>
            <p className="text-sm text-white/80">{artwork.type}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {image && (
                <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                    <Image
                        src={image.imageUrl}
                        alt={artwork.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                    />
                </div>
            )}
          </div>
          <div>
            <DialogHeader>
              <DialogTitle className="font-headline text-3xl mb-2">{artwork.title}</DialogTitle>
              <div className="flex items-center gap-2">
                <Badge variant={artwork.status === 'Sold' ? 'secondary' : 'default'}>
                  {artwork.status}
                </Badge>
                <Badge variant="outline">{artwork.type}</Badge>
              </div>
            </DialogHeader>
            <Separator className="my-4" />
            <DialogDescription className="text-base text-foreground/80 mb-4">
              {artwork.description}
            </DialogDescription>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Medium:</strong> {artwork.medium}</p>
              <p><strong className="text-foreground">Dimensions:</strong> {artwork.dimensions}</p>
            </div>
            <DialogFooter className="mt-6 sm:justify-start">
              <Button asChild>
                <Link href="/commission">
                  Request Similar Piece <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
