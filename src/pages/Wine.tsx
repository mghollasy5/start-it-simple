
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Wine = () => {
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
        
        <section className="section-padding bg-mediterranean-cream/30 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-cafe-maroon mb-3">
                Our Wine List
              </h2>
              <Separator className="w-24 h-1 bg-cafe-gold mx-auto mb-6" />
              <p className="text-cafe-maroon/80 max-w-2xl mx-auto">
                We offer an extensive selection of fine wines from around the world, carefully chosen to complement our menu and enhance your dining experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-cafe-gold/30 rounded-lg hover:shadow-md transition">
                <h3 className="font-playfair text-xl font-bold text-cafe-maroon mb-4">Red Wines</h3>
                <ul className="space-y-3 text-cafe-maroon/80">
                  <li>French Bordeaux</li>
                  <li>Italian Chianti</li>
                  <li>California Cabernet Sauvignon</li>
                  <li>Spanish Rioja</li>
                </ul>
              </div>

              <div className="p-6 border border-cafe-gold/30 rounded-lg hover:shadow-md transition">
                <h3 className="font-playfair text-xl font-bold text-cafe-maroon mb-4">White Wines</h3>
                <ul className="space-y-3 text-cafe-maroon/80">
                  <li>French Chablis</li>
                  <li>Italian Pinot Grigio</li>
                  <li>German Riesling</li>
                  <li>New Zealand Sauvignon Blanc</li>
                </ul>
              </div>

              <div className="p-6 border border-cafe-gold/30 rounded-lg hover:shadow-md transition">
                <h3 className="font-playfair text-xl font-bold text-cafe-maroon mb-4">Champagne & Sparkling</h3>
                <ul className="space-y-3 text-cafe-maroon/80">
                  <li>French Champagne</li>
                  <li>Italian Prosecco</li>
                  <li>Spanish Cava</li>
                  <li>California Sparkling Wine</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Wine;
