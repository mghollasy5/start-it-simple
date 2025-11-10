
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants } from "./bookAnimations";
import { MenuPage } from "./menuData";

interface BookPageProps {
  page: MenuPage;
  currentPage: number;
  isFlipping: boolean;
}

const BookPage = ({ page, currentPage, isFlipping }: BookPageProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ perspective: "2000px" }}>
      <AnimatePresence mode="wait" custom={1}>
        <motion.div
          key={currentPage}
          custom={1}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="w-full h-full relative z-10 flex items-center justify-center"
          style={{ 
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden"
          }}
        >
          {/* Main menu image - directly placed without extra spacing */}
          <img
            src={page.image}
            alt={page.title}
            className="w-full h-full object-contain"
            style={{ 
              filter: "contrast(1.02) saturate(1.05)",
              imageRendering: "crisp-edges"
            }}
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BookPage;
