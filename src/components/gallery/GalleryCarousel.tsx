
import React from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
}

const GalleryCarousel = ({ images }: GalleryCarouselProps) => {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-lg overflow-hidden shadow-xl"
      >
        <Carousel className="w-full" opts={{ loop: true, align: "center" }}>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="md:basis-4/5 lg:basis-3/4">
                <div className="p-1">
                  <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
                    <motion.img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                      <p className="text-white font-medium text-lg">{image.caption}</p>
                    </div>
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/30 hover:bg-white/50 border-none" />
          <CarouselNext className="right-4 bg-white/30 hover:bg-white/50 border-none" />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default GalleryCarousel;
