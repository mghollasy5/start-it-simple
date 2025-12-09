import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NewYearsEve = () => {
  const menuImages = [
    '/lovable-uploads/nye-menu-page-1.jpg',
    '/lovable-uploads/nye-menu-page-2.jpg',
  ];

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
        
        {/* NYE Menu Images */}
        <div className="pt-20">
          <div className="w-full h-full">
            <div className="flex flex-col">
              {menuImages.map((image, index) => (
                <div key={index} className="w-full">
                  <img
                    src={`${image}?v=${Date.now()}`}
                    alt={`New Year's Eve Menu Page ${index + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default NewYearsEve;
