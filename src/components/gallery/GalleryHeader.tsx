
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const GalleryHeader = () => {
  return (
    <div className="text-center mb-14">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-mediterranean-navy mb-3"
      >
        Our Restaurant
      </motion.h2>
      <Separator className="w-24 h-1 bg-mediterranean-gold mx-auto mb-6" />
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-foreground text-lg max-w-2xl mx-auto"
      >
        Take a visual tour of our restaurant and see the elegant setting that awaits you at Cafe Renaissance.
      </motion.p>
    </div>
  );
};

export default GalleryHeader;
