import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DrinksViewer from "@/components/menu/DrinksViewer";

const Drinks = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(/lovable-uploads/64115057-a0fd-4cee-87ca-02b9addebedf.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10">
        <Navbar />
        
        {/* Interactive Drinks Viewer */}
        <div className="pt-20">
          <DrinksViewer />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Drinks;