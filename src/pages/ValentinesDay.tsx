import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValentinesDay = () => {
  return (
    <div className="min-h-screen bg-background">
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
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Join us for an unforgettable Valentine's Day dinner featuring our specially crafted 
              romantic menu.
            </p>
          </div>


          {/* Menu Preview */}
          <div className="bg-gradient-to-br from-rose-800 to-red-900 rounded-3xl p-8 md:p-12 text-white mb-16 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Valentine's Day Special Menu
            </h2>
            <a 
              href="/menu" 
              className="text-pink-200 hover:text-white underline text-lg transition-colors"
            >
              Click here to view the menu
            </a>
          </div>

          {/* Reservation CTA */}
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h2 className="text-3xl font-playfair font-bold text-rose-800 mb-4">
              Make Your Reservation
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Reserve your romantic table today. Space is limited for this special evening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg"
                onClick={() => window.location.href = '/reservations'}
              >
                Reserve Online
              </Button>
              <Button 
                variant="outline"
                className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-3 text-lg"
                onClick={() => window.location.href = 'tel:+17245278900'}
              >
                <Phone className="w-5 h-5 mr-2" />
                (724) 527-8900
              </Button>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ValentinesDay;
