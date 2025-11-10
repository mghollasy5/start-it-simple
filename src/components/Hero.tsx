
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSlideContent from "@/components/hero/HeroSlideContent";
import HeroSlideImage from "@/components/hero/HeroSlideImage";
import HeroNavigation from "@/components/hero/HeroNavigation";
import { heroSlides } from "@/data/heroSlides";
import { useHeroSlider } from "@/hooks/useHeroSlider";

const Hero = () => {
  const { 
    currentSlide, 
    goToSlide, 
    goToPrevSlide, 
    goToNextSlide, 
    handleCTAClick 
  } = useHeroSlider(heroSlides);

  return (
    <div className="relative h-screen w-full overflow-hidden z-20">
      {/* Hero Images */}
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => (
          <HeroSlideImage 
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
          />
        ))}
      </AnimatePresence>

      {/* Hero Content */}
      <AnimatePresence mode="wait">
        <HeroSlideContent
          slide={heroSlides[currentSlide]}
          onCTAClick={handleCTAClick}
        />
      </AnimatePresence>

      {/* Hero Navigation */}
      <HeroNavigation
        slides={heroSlides}
        currentSlide={currentSlide}
        goToPrevSlide={goToPrevSlide}
        goToNextSlide={goToNextSlide}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default Hero;
