
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HeroSlide } from "@/data/heroSlides";

interface HeroSlideImageProps {
  slide: HeroSlide;
  isActive: boolean;
}

const HeroSlideImage: React.FC<HeroSlideImageProps> = ({ slide, isActive }) => {
  return (
    <motion.div
      key={slide.id}
      className={cn(
        "absolute inset-0 w-full h-full",
        isActive ? "z-30" : "z-20"
      )}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isActive ? 1 : 0
        // Removed scale animation to fix zoomed-in appearance
      }}
      exit={{ opacity: 0 }}
      transition={{ 
        opacity: { duration: 1.0 }
        // Removed scale transition
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          transform: "scale(1)"
        }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
    </motion.div>
  );
};

export default HeroSlideImage;
