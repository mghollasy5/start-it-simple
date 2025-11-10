import React, { useState, useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const step = end / (duration / 50); // update every 50ms
      
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);
  
  return <span ref={ref}>{count}</span>;
};

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8 md:py-12 px-6 md:px-8 bg-gradient-to-b from-mediterranean-cream/40 to-mediterranean-cream/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-mediterranean-gold/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-mediterranean-terracotta/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div>
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles size={20} className="text-mediterranean-gold animate-pulse" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-black mb-0">
                    Welcome to Cafe Renaissance
                  </h2>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Separator className="h-1 bg-mediterranean-gold mb-6" />
                </motion.div>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-black text-xl mb-4 leading-relaxed text-justify font-semibold"
                >
                  Step into Café Renaissance, where European elegance meets Mediterranean warmth in our stylishly designed space. Our pan-Mediterranean cuisine draws inspiration from Italy, France, Greece, Spain, Turkey, and beyond.
                </motion.p>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-black text-xl leading-relaxed text-justify font-semibold"
                >
                  Every dish celebrates the Mediterranean's healthful traditions—fresh produce, seafood, olive oil, and artisanal breads, all complemented by our signature WOOD STONE oven creations prepared before your eyes.
                </motion.p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-3 gap-10 mt-8 py-8 border-t border-b border-mediterranean-gold/10"
              >
                {[
                  { value: "25+", targetValue: 25, label: "Years of Excellence" },
                  { value: "4.8", targetValue: 4.8, label: "Guest Rating" },
                  { value: "30+", targetValue: 30, label: "Wine Selections" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="text-center"
                  >
                    <motion.p 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + (index * 0.2) }}
                      className="font-playfair text-5xl font-bold text-cafe-logoRed drop-shadow-lg"
                    >
                      {typeof item.targetValue === "number" ? (
                        <>
                          <CountUp end={item.targetValue} duration={2000} />
                          {item.value.includes("+") ? "+" : ""}
                        </>
                      ) : (
                        item.value
                      )}
                    </motion.p>
                    <p className="text-sm text-cafe-logoRed uppercase tracking-wide font-bold mt-1">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;