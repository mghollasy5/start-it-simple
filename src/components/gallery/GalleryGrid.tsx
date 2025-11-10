
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryGridItem from "./GalleryGridItem";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  activeImageIndex: number;
  onImageClick: (image: GalleryImage) => void;
}

const GalleryGrid = ({ images, activeImageIndex, onImageClick }: GalleryGridProps) => {
  // Different animation variants for gallery items
  const imageAnimations = [
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.7 }
    },
    {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7 }
    },
    {
      initial: { opacity: 0, rotate: -5 },
      animate: { opacity: 1, rotate: 0 },
      transition: { duration: 0.7 }
    }
  ];

  // Get random animation variant for each image
  const getRandomAnimation = () => {
    const index = Math.floor(Math.random() * imageAnimations.length);
    return imageAnimations[index];
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          }
        }
      }}
    >
      <AnimatePresence>
        {images.map((image, index) => {
          const isActive = index === activeImageIndex;
          const animation = getRandomAnimation();
          
          return (
            <GalleryGridItem
              key={image.id}
              image={image}
              isActive={isActive}
              animation={animation}
              onClick={onImageClick}
            />
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default GalleryGrid;
