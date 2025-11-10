
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, RefreshCw } from "lucide-react";

interface MenuHeroProps {
  downloadPDF: () => Promise<void>;
  isDownloading: boolean;
}

const MenuHero = ({ downloadPDF, isDownloading }: MenuHeroProps) => {
  return (
    <section className="py-12 md:py-16 px-6 bg-gradient-to-r from-cafe-maroon to-cafe-maroon/90 text-white mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-3"
        >
          Our Exquisite Menu
        </motion.h1>
        <Separator className="w-24 h-1 bg-cafe-gold mx-auto mb-4" />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base text-white/90 max-w-2xl mx-auto mb-6"
        >
          Discover our carefully curated selection of Mediterranean and European dishes, 
          crafted with passion and the finest ingredients.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <Button 
            onClick={downloadPDF}
            disabled={isDownloading}
            className="bg-cafe-gold hover:bg-cafe-gold/90 text-cafe-maroon font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Download Full Menu
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHero;
