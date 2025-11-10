
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookNavigationProps {
  currentPage: number;
  totalPages: number;
  isFlipping: boolean;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const BookNavigation = ({ 
  currentPage, 
  totalPages, 
  isFlipping, 
  onPrevPage, 
  onNextPage 
}: BookNavigationProps) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto"
      >
        <Button
          onClick={onPrevPage}
          disabled={currentPage === 0 || isFlipping}
          className={`bg-cafe-maroon/90 hover:bg-cafe-maroon text-white shadow-lg transition-all duration-300 relative overflow-hidden ${
            currentPage === 0 || isFlipping ? 'opacity-30 cursor-not-allowed' : ''
          }`}
          size="icon"
        >
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full scale-0"
            whileTap={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <ChevronLeft className="w-5 h-5 relative z-10" />
        </Button>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto"
      >
        <Button
          onClick={onNextPage}
          disabled={currentPage === totalPages - 1 || isFlipping}
          className={`bg-cafe-maroon/90 hover:bg-cafe-maroon text-white shadow-lg transition-all duration-300 relative overflow-hidden ${
            currentPage === totalPages - 1 || isFlipping ? 'opacity-30 cursor-not-allowed' : ''
          }`}
          size="icon"
        >
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full scale-0"
            whileTap={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <ChevronRight className="w-5 h-5 relative z-10" />
        </Button>
      </motion.div>
    </div>
  );
};

export default BookNavigation;
