import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValentinesDay = () => {
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/90 via-red-800/80 to-pink-900/90" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/921b1d62-90ab-42c8-bbba-548ba4216148.png')] bg-cover bg-center opacity-30" />
        
        {/* Floating Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-300/30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 20}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
              size={Math.random() * 30 + 20}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Heart className="w-16 h-16 text-pink-300 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4 drop-shadow-lg">
            Valentine's Day
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 font-light tracking-wide">
            Celebrate Love at Café Renaissance
          </p>
          <p className="text-lg text-pink-200 mt-2">
            Friday, February 14th, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Romantic Dinner Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-rose-800 mb-6">
              A Romantic Evening Awaits
            </h2>
          </div>


          {/* Menu Preview */}
          <div className="bg-gradient-to-br from-rose-800 to-red-900 rounded-3xl p-8 md:p-12 text-white mb-16 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              Valentine's Day Special Menu
            </h2>
            <p className="text-2xl md:text-3xl text-pink-100 mb-6 max-w-2xl mx-auto">
              Join us for a fabulous cuisine and let our staff suggest the perfect dining experience to celebrate Valentine's Day.
            </p>
            <a 
              href="/Valentines_Day_Menu.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-200 hover:text-white underline text-2xl md:text-3xl transition-colors"
            >
              Click here to view the menu
            </a>
          </div>

          {/* Reservation CTA */}
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h2 className="text-3xl font-playfair font-bold text-rose-800 mb-4">
              Please call to reserve your table
            </h2>
            <p className="text-2xl font-semibold text-rose-700 mb-4">
              320-253-9300
            </p>
            <p className="text-2xl font-bold text-black">
              Valentine's Day hours: 3:00 PM – Last seating at 9:00 PM
            </p>
          </div>
          
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default ValentinesDay;
