
import React, { useState } from "react";
import { motion } from "framer-motion";
import BookContainer from "./BookContainer";
import { menuPages } from "./menuData";

const MenuBookViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextPage = () => {
    if (currentPage < menuPages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setCurrentPage(currentPage + 1);
      setTimeout(() => setIsFlipping(false), 400);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setCurrentPage(currentPage - 1);
      setTimeout(() => setIsFlipping(false), 400);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center">
      <div className="w-full h-screen flex items-center justify-center">
        {/* Elegant title */}
        <motion.div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-playfair font-bold text-cafe-maroon mb-2 text-center">
            {menuPages[currentPage].title}
          </h1>
          <div className="w-16 h-0.5 bg-cafe-gold mx-auto rounded-full" />
        </motion.div>

        <BookContainer
          currentPage={currentPage}
          isFlipping={isFlipping}
          menuPages={menuPages}
          onPrevPage={prevPage}
          onNextPage={nextPage}
        />

        {/* Minimal page indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex space-x-2">
            {menuPages.map((_, index) => (
              <motion.div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentPage ? 'bg-cafe-maroon scale-125' : 'bg-cafe-maroon/30'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuBookViewer;
