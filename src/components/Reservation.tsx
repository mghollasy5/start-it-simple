
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone } from "lucide-react";

const Reservation = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-mediterranean-cream/40 to-mediterranean-cream/20 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border border-cafe-gold/30 bg-white/80 backdrop-blur-sm shadow-md p-8 text-center">
          <h2 className="text-2xl font-playfair font-bold text-cafe-navy mb-2">
            For Reservations
          </h2>
          <Separator className="w-16 h-0.5 bg-cafe-gold mx-auto mb-4" />
          
          <p className="text-cafe-navy/80 mb-6">
            We invite you to call for a reservation to ensure your dining experience is extraordinary.
          </p>
          
          <a href="tel:+13202539300" className="inline-block">
            <Button 
              className="bg-cafe-gold hover:bg-cafe-gold/90 text-black font-medium"
            >
              <Phone size={16} className="mr-2" />
              Call (320) 253-9300
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
