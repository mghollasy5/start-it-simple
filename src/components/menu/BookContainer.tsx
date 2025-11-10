
import React from "react";
import { motion } from "framer-motion";
import { bookVariants } from "./bookAnimations";
import BookPage from "./BookPage";
import BookNavigation from "./BookNavigation";
import { MenuPage } from "./menuData";

interface BookContainerProps {
  currentPage: number;
  isFlipping: boolean;
  menuPages: MenuPage[];
  onPrevPage: () => void;
  onNextPage: () => void;
}

const BookContainer = ({ 
  currentPage, 
  isFlipping, 
  menuPages, 
  onPrevPage, 
  onNextPage 
}: BookContainerProps) => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      style={{
        backgroundImage: `url(/lovable-uploads/fd8efeae-c42a-42b2-80a9-80a3041c8e5a.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <motion.div 
        className="relative w-full max-w-6xl h-[85vh] overflow-hidden"
        variants={bookVariants}
        animate={isFlipping ? "flipping" : "idle"}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        style={{ 
          perspective: "2000px",
          transformStyle: "preserve-3d"
        }}
      >
        <BookPage 
          page={menuPages[currentPage]} 
          currentPage={currentPage}
          isFlipping={isFlipping}
        />

        <BookNavigation
          currentPage={currentPage}
          totalPages={menuPages.length}
          isFlipping={isFlipping}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
        />
      </motion.div>
    </div>
  );
};

export default BookContainer;
