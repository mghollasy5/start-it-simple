import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MenuViewer = () => {
  const [scale, setScale] = useState<number>(1.0);
  const containerRef = useRef<HTMLDivElement>(null);

  const menuImages = [
    '/lovable-uploads/8362fa52-192b-4831-a664-c955a5e86fcc.png',
    '/lovable-uploads/52cf9e40-92bc-4c40-8683-85195b1174b9.png',
    '/lovable-uploads/9dd04517-dc56-42a3-8d39-8b81ec3cad84.png',
    '/lovable-uploads/d2b53dd6-e44b-404d-8b8c-569e3c155e7d.png',
    '/lovable-uploads/32191e01-0acc-46df-a8cd-97bfdfa318aa.png'
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