import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/new-years-eve-hero.jpg";

const NewYearsEve = () => {
  return (
    <div className="min-h-screen bg-[#E8DCC8]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="New Year's Eve Celebration" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8DCC8]/60 via-transparent to-[#E8DCC8]" />
        </div>
        
        {/* Animated background sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cafe-gold rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 text-cafe-logoRed mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-black mb-4">
              New Year's Eve
            </h1>
            <p className="text-2xl md:text-3xl font-playfair text-cafe-logoRed mb-2 font-bold">
              2025 Celebration
            </p>
            <p className="text-xl text-black/70 mb-8 font-bold">
              Ring in the New Year at Cafe Renaissance
            </p>
            <p className="text-xl md:text-2xl text-amber-900 max-w-2xl mx-auto font-playfair leading-relaxed font-bold">
              Greetings from all of us at the Cafe Renaissance. Wishing you all happy and healthy Holidays. We thank you for the opportunity you have given us throughout the years to serve you and wish to be of service to you in years to come.
            </p>
          </motion.div>

        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#E8DCC8] to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Event Details */}
      <section 
        className="pt-0 pb-16 px-4 relative"
        style={{
          backgroundImage: `url(/lovable-uploads/64115057-a0fd-4cee-87ca-02b9addebedf.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#E8DCC8]/50" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/30 backdrop-blur-sm border border-cafe-logoRed/20 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-black leading-relaxed font-playfair font-bold">
                Join us for a fabulous cuisine and let our staff suggest the perfect dining to celebrate the New Year.
              </p>
              <ul className="mt-6 space-y-3 text-lg md:text-xl text-black font-playfair text-left max-w-2xl mx-auto font-bold">
                <li className="flex items-start gap-3">
                  <span className="text-cafe-logoRed">•</span>
                  <span>Enjoy the beautiful live background piano music</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cafe-logoRed">•</span>
                  <span>A delectable variety of Renaissance Dining options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cafe-logoRed">•</span>
                  <span>Well-crafted flavor combinations and wine pairings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cafe-logoRed">•</span>
                  <span>Fresh seafood, flavorful entrees, all-natural meats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cafe-logoRed">•</span>
                  <span className="text-cafe-logoRed">Complimentary champagne toast</span>
                </li>
              </ul>
              <p className="mt-6 text-lg md:text-xl text-black leading-relaxed font-playfair font-bold">
                ...and an amazing selection of multi-course dinner of your favorite specialties. Fresh seafood, choice aged beef, lamb, poultry and more.
              </p>
              <a 
                href="/new-years-eve-menu-2025.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-block text-2xl md:text-3xl text-cafe-logoRed font-playfair font-bold underline hover:text-cafe-logoRed/80 transition-colors"
              >
                Click here for the menu
              </a>
              <p className="mt-4 text-lg md:text-xl text-black font-playfair font-bold">
                The regular menu will not be offered this evening
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hours Section */}
      <section 
        className="pt-4 pb-12 px-4 relative"
        style={{
          backgroundImage: `url(/lovable-uploads/64115057-a0fd-4cee-87ca-02b9addebedf.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#E8DCC8]/50" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-cafe-logoRed" />
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-black">
                New Year's Eve Hours
              </h2>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 inline-block">
              <p className="text-xl md:text-2xl text-black mb-2 font-playfair font-semibold">
                Open from <span className="text-cafe-logoRed font-bold">3:00 PM</span>
              </p>
              <p className="text-lg md:text-xl text-black/70 font-playfair font-semibold mb-4">
                Last seating at <span className="text-cafe-logoRed font-bold">9:00 PM</span>
              </p>
              <p className="text-lg md:text-xl text-black font-playfair font-bold">
                Please Call to Reserve Your Table
              </p>
              <a href="tel:320-253-9300" className="text-xl md:text-2xl text-cafe-logoRed font-playfair font-bold hover:underline">
                320-253-9300
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewYearsEve;
