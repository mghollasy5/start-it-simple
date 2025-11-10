
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
        
        {/* Contact Content */}
        <section className="section-padding bg-mediterranean-cream/30 mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-cafe-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-black mb-1">Our Address</h3>
                      <p className="text-black text-lg font-semibold">
                        2140 Frontage Road North<br />
                        Waite Park, MN 56387
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-cafe-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-black mb-1">Call us</h3>
                      <p className="text-black text-lg font-semibold">
                        <a href="tel:+13202539300" className="hover:text-cafe-gold transition-colors">1-320-253-9300</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-playfair text-xl font-bold text-black mb-4">Where we are located</h3>
                    <p className="text-black text-lg font-semibold mb-6">
                      Cafe Renaissance is located in JR Square on West Division Street (1.5 Miles West of Crossroads) next to the Slumberland Furniture in Waite Park, Minnesota.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-playfair text-xl font-bold text-black mb-4">How to get here</h3>
                    <div className="space-y-2 text-black text-lg font-semibold">
                      <h4 className="font-bold mb-2">From the Twin Cities:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Take 94 West towards St. Cloud</li>
                        <li>Take Exit 167B and merge on Highway 15 N towards St. Cloud</li>
                        <li>Turn Left on County Road 75 / West Division Street for around 2 Miles. We are on the right.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
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
        
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
