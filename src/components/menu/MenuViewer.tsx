import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MenuViewer = () => {
  const [scale, setScale] = useState<number>(1.0);
  const containerRef = useRef<HTMLDivElement>(null);

  const menuImages = [
    '/lovable-uploads/menu-page-1-appetizers.jpg',
    '/lovable-uploads/menu-page-2-specialties.jpg',
    '/lovable-uploads/menu-page-3-seafood-poultry.jpg',
    '/lovable-uploads/menu-page-4-pasta-pizza.jpg',
    '/lovable-uploads/menu-page-5-gluten-free.jpg'
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
      {/* Full Screen Menu */}
      <div 
        ref={containerRef}
        className="w-full h-full overflow-auto"
      >
        <div className="flex flex-col">
          {menuImages.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={image}
                alt={`Menu Page ${index + 1}`}
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

export default MenuViewer;