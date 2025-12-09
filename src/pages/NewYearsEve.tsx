import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewYearsEve = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cafe-cream to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/lovable-uploads/e928198b-e369-40a2-8343-c00a11df7ad1.png')"
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-lg">
            New Year's Eve 2025
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Celebrate the New Year in Style at Cafe Renaissance
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-cafe-logoRed mb-6">
              Join Us for an Unforgettable Evening
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              Ring in 2025 with an elegant dining experience featuring our special New Year's Eve menu, 
              live entertainment, and a champagne toast at midnight.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <h3 className="text-2xl font-playfair font-bold text-cafe-logoRed mb-4 text-center">
              Event Details
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-lg"><strong>Date:</strong> December 31st, 2024</p>
              <p className="text-lg"><strong>Time:</strong> 7:00 PM - 1:00 AM</p>
              <p className="text-lg"><strong>Location:</strong> Cafe Renaissance</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link to="/reservations">
              <Button className="bg-cafe-logoRed hover:bg-cafe-logoRed/90 text-white px-8 py-6 text-lg">
                Make a Reservation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewYearsEve;
