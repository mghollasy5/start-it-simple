
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeroSlide } from "@/data/heroSlides";

export const useHeroSlider = (slides: HeroSlide[]) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    // Reset auto-play timer when manually changing slides
    setIsAutoPlaying(true);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(true);
  }, [slides.length]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(true);
  }, [slides.length]);

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    // Increased by 25% more from 7140ms to 8925ms for better readability
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8925); // 25% longer than previous 7140ms

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevSlide();
      } else if (e.key === "ArrowRight") {
        goToNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevSlide, goToNextSlide]);

  const handleCTAClick = (slide: HeroSlide) => {
    // Handle different CTAs based on slide content
    if (slide.cta.includes("Menu")) {
      navigate("/menu");
    } else if (slide.cta.includes("Reservation")) {
      navigate("/reservations");
    } else {
      // Default
      navigate("/menu");
    }
  };

  return {
    currentSlide,
    goToSlide,
    goToPrevSlide,
    goToNextSlide,
    handleCTAClick
  };
};
