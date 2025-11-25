
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuViewer from "@/components/menu/MenuViewer";

const Menu = () => {
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
        
        {/* Interactive Menu Viewer */}
        <div className="pt-20">
          <MenuViewer />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
