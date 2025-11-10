
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import EmploymentForm from "@/components/EmploymentForm";

const Employment = () => {
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
        
        {/* Employment Content */}
        <section className="section-padding bg-mediterranean-cream/30 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-black mb-3">
                Career Opportunities
              </h2>
              <Separator className="w-24 h-1 bg-cafe-gold mx-auto mb-6" />
              <p className="text-black text-xl font-semibold max-w-2xl mx-auto mb-4 leading-relaxed">
                At Cafe Renaissance, we're always looking for talented individuals who are passionate about hospitality and fine dining.
                Complete the application form below to join our team.
              </p>
            </div>

            {/* Employment Form */}
            <div className="bg-mediterranean-cream/40 backdrop-blur-sm shadow-md rounded-lg overflow-hidden mb-16">
              <div className="bg-cafe-gold/20 p-6 border-b border-cafe-gold/30">
                <h3 className="font-playfair text-2xl font-bold text-black">
                  Employment Application
                </h3>
                <p className="text-black text-xl font-semibold mt-2 mb-4 leading-relaxed">
                  Please fill out the application form completely. Required fields are marked with an asterisk (*).
                </p>
              </div>
              <EmploymentForm />
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Employment;
