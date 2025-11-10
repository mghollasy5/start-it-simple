
import React from "react";
import { motion } from "framer-motion";

interface BookSpineProps {
  isFlipping: boolean;
}

const BookSpine = ({ isFlipping }: BookSpineProps) => {
  return (
    <motion.div 
      className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-b from-amber-800 via-amber-900 to-amber-800 rounded-l-2xl shadow-inner"
      animate={{ 
        boxShadow: isFlipping 
          ? "inset 4px 0 8px rgba(0,0,0,0.3)" 
          : "inset 2px 0 4px rgba(0,0,0,0.2)"
      }}
    >
      {/* Spine details */}
      <div className="absolute top-4 left-1 right-1 h-0.5 bg-amber-700 opacity-50"></div>
      <div className="absolute bottom-4 left-1 right-1 h-0.5 bg-amber-700 opacity-50"></div>
    </motion.div>
  );
};

export default BookSpine;
