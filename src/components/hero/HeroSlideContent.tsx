
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Utensils, Wine } from "lucide-react";
import { HeroSlide } from "@/data/heroSlides";

interface HeroSlideContentProps {
  slide: HeroSlide;
  onCTAClick: (slide: HeroSlide) => void;
}

const HeroSlideContent: React.FC<HeroSlideContentProps> = ({ slide, onCTAClick }) => {
  return (
    <motion.div 
      key={`content-${slide.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative z-40 h-full flex items-center justify-center"
    >
      <div className="text-center max-w-5xl px-6 md:px-0">
        <div className="inline-flex gap-2 items-center justify-center mb-4">
          <span className="h-[1px] w-10 bg-cafe-gold"></span>
          <span className="text-cafe-gold font-semibold uppercase text-sm tracking-widest">Café Renaissance</span>
          <span className="h-[1px] w-10 bg-cafe-gold"></span>
        </div>
        
        <h1 className="font-dm-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 font-normal tracking-tight text-shadow-lg">
          {slide.title}
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-shadow-md">
          {slide.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button 
            size="lg" 
            onClick={() => onCTAClick(slide)}
            className="bg-cafe-gold hover:bg-cafe-gold/90 text-white font-semibold px-8 py-6 text-lg shadow-lg group transition-all duration-300"
          >
            {slide.cta}
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              {slide.cta.includes("Menu") ? 
                <Utensils className="h-5 w-5" /> : 
                <Wine className="h-5 w-5" />
              }
            </span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSlideContent;
