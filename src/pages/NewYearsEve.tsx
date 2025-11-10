import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewYearsEve = () => {
  const navigate = useNavigate();

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
        
        {/* Hero Section */}
        <section className="section-padding mt-20 bg-cafe-logoRed/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-cafe-gold" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
              New Year's Eve Celebration
            </h1>
            <Separator className="w-32 h-1 bg-cafe-gold mx-auto mb-8" />
            <p className="text-white text-xl md:text-2xl font-semibold max-w-3xl mx-auto leading-relaxed">
              Ring in the New Year with an unforgettable evening of fine dining, live entertainment, and celebration
            </p>
          </div>
        </section>

        {/* Event Details */}
        <section className="section-padding bg-mediterranean-cream/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white/50 rounded-lg shadow-md">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-cafe-logoRed" />
                <h3 className="font-playfair text-2xl font-bold text-black mb-2">Date</h3>
                <p className="text-black text-xl font-semibold">December 31st, 2024</p>
              </div>
              
              <div className="text-center p-6 bg-white/50 rounded-lg shadow-md">
                <Clock className="w-12 h-12 mx-auto mb-4 text-cafe-logoRed" />
                <h3 className="font-playfair text-2xl font-bold text-black mb-2">Time</h3>
                <p className="text-black text-xl font-semibold">7:00 PM - 1:00 AM</p>
              </div>
              
              <div className="text-center p-6 bg-white/50 rounded-lg shadow-md">
                <Users className="w-12 h-12 mx-auto mb-4 text-cafe-logoRed" />
                <h3 className="font-playfair text-2xl font-bold text-black mb-2">Seating</h3>
                <p className="text-black text-xl font-semibold">Limited Availability</p>
              </div>
            </div>

            {/* Event Highlights */}
            <div className="bg-white/60 rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-6 text-center">
                Evening Highlights
              </h2>
              <Separator className="w-24 h-1 bg-cafe-gold mx-auto mb-8" />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-cafe-logoRed mb-4">
                    Culinary Experience
                  </h3>
                  <ul className="space-y-3 text-black text-xl font-semibold">
                    <li>• Five-course tasting menu</li>
                    <li>• Premium wine pairings</li>
                    <li>• Champagne toast at midnight</li>
                    <li>• Chef's special creations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-cafe-logoRed mb-4">
                    Entertainment
                  </h3>
                  <ul className="space-y-3 text-black text-xl font-semibold">
                    <li>• Live music performances</li>
                    <li>• DJ and dancing</li>
                    <li>• Midnight countdown celebration</li>
                    <li>• Party favors and surprises</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-cafe-gold/20 rounded-lg shadow-lg p-8 mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-black mb-4">
                Reservation Pricing
              </h2>
              <p className="text-black text-5xl font-bold mb-4">$150</p>
              <p className="text-black text-xl font-semibold mb-2">per person</p>
              <p className="text-black text-lg">Includes five-course dinner, wine pairings, and champagne toast</p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                onClick={() => navigate("/reservations")}
                className="bg-cafe-logoRed hover:bg-cafe-logoRed/90 text-white text-xl px-12 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                Reserve Your Table Now
              </Button>
              <p className="text-black text-xl font-semibold mt-6">
                Limited seating available - Book early to secure your spot!
              </p>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default NewYearsEve;
