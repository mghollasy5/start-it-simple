
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroNavigationProps {
  slides: { id: number }[];
  currentSlide: number;
  goToPrevSlide: () => void;
  goToNextSlide: () => void;
  goToSlide: (index: number) => void;
}

const HeroNavigation: React.FC<HeroNavigationProps> = ({ 
  slides, 
  currentSlide, 
  goToPrevSlide, 
  goToNextSlide, 
  goToSlide 
}) => {
  return (
    <>
      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "transition-all duration-500 ease-in-out",
              currentSlide === index
                ? "w-12 h-1.5 bg-cafe-gold rounded-sm"
                : "w-3 h-1.5 bg-white/40 rounded-sm hover:bg-white/70"
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-cafe-gold/90 text-white p-3 rounded-full transition-colors duration-300 backdrop-blur-sm z-30"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-cafe-gold/90 text-white p-3 rounded-full transition-colors duration-300 backdrop-blur-sm z-30"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>
    </>
  );
};

export default HeroNavigation;
