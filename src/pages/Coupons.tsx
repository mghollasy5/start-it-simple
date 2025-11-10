
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

const Coupons = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[30vh] bg-cover bg-center pt-20"
        style={{
          backgroundImage: "url('/lovable-uploads/fd0efe42-ad82-4eec-92f9-2afb719ba4b7.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cafe-maroon/80 to-black/70 backdrop-blur-[1px]"></div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="transform transition-all duration-700 hover:scale-105">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-3 font-bold tracking-wide">
              Special Offers
            </h1>
            <div className="flex justify-center">
              <div className="w-16 h-0.5 bg-cafe-gold mx-auto mb-3"></div>
            </div>
            <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg italic">
              Exclusive offers and promotions for our valued guests
            </p>
          </div>
        </div>
      </section>

      {/* Coupons Content */}
      <section className="section-padding bg-mediterranean-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-mediterranean-navy mb-3">
              Current Promotions
            </h2>
            <Separator className="w-24 h-1 bg-mediterranean-gold mx-auto mb-6" />
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              Enhance your dining experience with our special offers. Check back regularly for seasonal promotions and exclusive deals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Coupon Cards */}
            <div className="border-2 border-dashed border-mediterranean-gold p-8 rounded-lg bg-white relative overflow-hidden">
              <Ticket className="absolute top-4 right-4 text-mediterranean-gold/20 w-12 h-12" />
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-mediterranean-navy">Wine Wednesday</h3>
                <p className="text-foreground text-base">
                  Enjoy 50% off select bottles of wine every Wednesday with the purchase of two dinner entrees.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-mediterranean-navy/60">
                    Valid every Wednesday. Cannot be combined with other offers. Please mention this offer when making your reservation.
                  </p>
                </div>
                <Button className="bg-mediterranean-gold hover:bg-mediterranean-gold/90 text-black">
                  Reserve Now
                </Button>
              </div>
            </div>
            
            <div className="border-2 border-dashed border-mediterranean-gold p-8 rounded-lg bg-white relative overflow-hidden">
              <Ticket className="absolute top-4 right-4 text-mediterranean-gold/20 w-12 h-12" />
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-mediterranean-navy">Prix Fixe Menu</h3>
                <p className="text-foreground text-base">
                  Experience our chef's selection with a special three-course prix fixe menu available Sunday through Thursday.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-mediterranean-navy/60">
                    $65 per person. Available Sunday-Thursday from 5:00pm to 6:30pm. Reservations recommended.
                  </p>
                </div>
                <Button className="bg-mediterranean-gold hover:bg-mediterranean-gold/90 text-black">
                  View Menu
                </Button>
              </div>
            </div>
            
            <div className="border-2 border-dashed border-mediterranean-gold p-8 rounded-lg bg-white relative overflow-hidden col-span-full">
              <Ticket className="absolute top-4 right-4 text-mediterranean-gold/20 w-12 h-12" />
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-mediterranean-navy">Join Our Email List</h3>
                <p className="text-foreground text-base">
                  Subscribe to our newsletter to receive exclusive offers and updates about special events at Cafe Renaissance.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-mediterranean-navy/60">
                    New subscribers receive a complimentary dessert on their next visit.
                  </p>
                </div>
                <Button className="bg-mediterranean-gold hover:bg-mediterranean-gold/90 text-black">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Coupons;
