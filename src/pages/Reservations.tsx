import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Reservations = () => {
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
        
        {/* Reservations Content */}
        <section className="section-padding bg-mediterranean-cream/30 mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-black mb-3">
                Make a Reservation
              </h2>
              <Separator className="w-24 h-1 bg-cafe-gold mx-auto mb-6" />
              <p className="text-black text-lg max-w-2xl mx-auto font-playfair font-semibold">
                For reservations, please call us at <a href="tel:+13202539300" className="text-cafe-logoRed font-bold">(320) 253-9300</a>. 
                We look forward to providing you with an exceptional dining experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-cafe-logoRed mb-4">Reservation Information</h3>
                    <p className="text-black text-base mb-6 font-playfair font-semibold">
                      To ensure we can accommodate your dining preferences, we recommend making reservations at least a few days in advance, especially for weekend dining or special occasions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-cafe-logoRed mb-3">Hours</h4>
                    <div className="space-y-3 font-playfair text-base font-semibold">
                      <p className="text-black">
                        Monday-Saturday 3pm to 9pm (last seating), New Year's Eve, Mother's Day, Valentine's Day
                      </p>
                      <p className="text-black">
                        <span className="font-bold">Closed:</span> Sundays, Thanksgiving, Christmas Eve, Christmas Day, Easter, Labor Day, 4th of July
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-cafe-logoRed mb-3">Venetian Room & Private Events</h4>
                    <p className="text-black text-base mb-4 font-playfair font-semibold">
                      Our elegant Venetian Room seats up to 50 guests, perfect for intimate celebrations, corporate events, and special occasions.
                    </p>
                    <Button 
                      className="bg-cafe-logoRed hover:bg-cafe-logoRed/90 text-white font-playfair"
                      asChild
                    >
                      <a href="tel:+13202539300">Call Us: (320) 253-9300</a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl font-bold text-cafe-logoRed mb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-playfair text-lg font-bold mb-2 text-black">Phone</h4>
                    <p className="text-black text-base font-playfair font-semibold">
                      <a href="tel:+13202539300" className="text-cafe-logoRed">(320) 253-9300</a>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-playfair text-lg font-bold mb-2 text-cafe-logoRed">Address</h4>
                    <p className="text-black text-base font-playfair font-semibold">
                      2140 Frontage Road North<br />
                      Waite Park, MN 56387
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-playfair text-lg font-bold mb-2 text-cafe-logoRed">Location Details</h4>
                    <p className="text-black text-base font-playfair font-semibold">
                      Located in JR Square on West Division Street (1.5 Miles West of Crossroads) next to Slumberland Furniture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Reservations;