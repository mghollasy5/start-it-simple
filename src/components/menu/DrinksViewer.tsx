import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DrinksViewer = () => {
  const [scale, setScale] = useState<number>(1.0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Wine/Drinks menu images
  const wineMenuImages = [
    '/lovable-uploads/drinks-page-1-red-wine.jpg',        // Red Wine List
    '/lovable-uploads/drinks-page-2-white-wine.jpg',      // White Wine List
    '/lovable-uploads/drinks-page-3-mocktails.jpg',       // Renaissance Mocktails
    '/lovable-uploads/drinks-page-4-bourbon-whiskeys.jpg' // Bourbon & Whiskeys
  ];

  const handleZoomIn = () => {
    setScale(prev => Math.min(3.0, prev + 0.2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(0.5, prev - 0.2));
  };

  const handleReset = () => {
    setScale(1.0);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case 'r':
        case 'R':
          handleReset();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full h-full">
      {/* Full Screen Wine Menu */}
      <div 
        ref={containerRef}
        className="w-full h-full overflow-auto"
      >
        <div className="flex flex-col">
          {wineMenuImages.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={`${image}?v=${Date.now()}`}
                alt={`Wine Menu Page ${index + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrinksViewer;