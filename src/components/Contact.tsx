import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding bg-mediterranean-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-cafe-maroon mb-3">
            Visit Us
          </h2>
          <Separator className="w-24 h-1 bg-cafe-gold mx-auto mb-6" />
          <p className="text-cafe-maroon/80 max-w-2xl mx-auto">
            We look forward to welcoming you to Cafe Renaissance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-cafe-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-cafe-maroon mb-1">Location</h3>
                  <p className="text-cafe-maroon/80">
                    2140 Frontage Road North<br />
                    Waite Park, MN 56387
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-cafe-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-cafe-maroon mb-1">Phone</h3>
                  <p className="text-cafe-maroon/80">
                    <a href="tel:+13202539300" className="hover:text-cafe-gold transition-colors">(320) 253-9300</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-cafe-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-cafe-maroon mb-1">Hours</h3>
                  <p className="text-cafe-maroon/80">
                    <span className="font-medium">Monday-Saturday:</span> 3:00 PM - 9:00 PM<br />
                    <span className="font-medium">Sunday:</span> Closed<br />
                    <span className="text-sm mt-2 block">Open on Valentine's Day, Mother's Day and New Year's Eve</span>
                    <span className="text-sm block">Closed on major holidays</span>
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-cafe-gold hover:bg-cafe-gold/90 text-black w-full md:w-auto">
              Make a Reservation
            </Button>
          </div>
          
          <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.8674793276547!2d-94.24772772346612!3d45.547999271070385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b45f833d3971c7%3A0x26d18c4trinity0123!2s2140%20Frontage%20Rd%20N%2C%20Waite%20Park%2C%20MN%2056387!5e0!3m2!1sen!2sus!4v1712434567890!5m2!1sen!2sus"
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
