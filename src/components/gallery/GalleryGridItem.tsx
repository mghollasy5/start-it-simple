
import React from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface GalleryGridItemProps {
  image: GalleryImage;
  isActive: boolean;
  animation: {
    initial: any;
    animate: any;
    transition: any;
  };
  onClick: (image: GalleryImage) => void;
}

const GalleryGridItem = ({ image, isActive, animation, onClick }: GalleryGridItemProps) => {
  return (
    <motion.div
      layout
      key={image.id}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
      className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      variants={{
        hidden: animation.initial,
        show: animation.animate
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div 
        className="group relative cursor-pointer overflow-hidden"
        onClick={() => onClick(image)}
      >
        <AspectRatio ratio={4/3}>
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        </AspectRatio>
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full p-4"
          >
            <p className="text-white text-sm font-medium">{image.caption}</p>
            <p className="text-white/80 text-xs mt-1">Click to view full size</p>
          </motion.div>
        </motion.div>
        {/* Zoom indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GalleryGridItem;
