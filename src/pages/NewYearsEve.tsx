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
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="New Year's Eve Celebration" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/60 via-transparent to-[#0a0a1a]" />
        </div>
        
        {/* Animated background stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
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
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4">
              New Year's Eve
            </h1>
            <p className="text-2xl md:text-3xl font-playfair text-yellow-400 mb-2">
              2025 Celebration
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Ring in the New Year at Cafe Renaissance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-gray-200"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <span>December 31, 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span>7:00 PM - 1:00 AM</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Event Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              An Unforgettable Evening
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Five-Course Dinner",
                description: "Exquisite Italian cuisine featuring our chef's special holiday menu with premium ingredients",
                icon: "🍽️"
              },
              {
                title: "Live Entertainment",
                description: "Enjoy live music and entertainment throughout the evening",
                icon: "🎵"
              },
              {
                title: "Champagne Toast",
                description: "Welcome 2025 with a complimentary champagne toast at midnight",
                icon: "🥂"
              },
              {
                title: "Party Favors",
                description: "Festive hats, noisemakers, and party accessories for all guests",
                icon: "🎉"
              },
              {
                title: "Midnight Countdown",
                description: "Join us for the exciting countdown to the New Year",
                icon: "⏰"
              },
              {
                title: "Photo Opportunities",
                description: "Capture memories at our elegant New Year's photo backdrop",
                icon: "📸"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-playfair font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Reserve Your Table
          </h2>
          <p className="text-gray-300 mb-8">
            Seating is limited. Reserve early to secure your spot for this magical evening.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/reservations">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8"
              >
                Make a Reservation
              </Button>
            </Link>
            <a href="tel:+17816531255">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </a>
          </div>

        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default NewYearsEve;
