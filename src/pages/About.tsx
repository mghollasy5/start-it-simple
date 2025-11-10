
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
const About = () => {
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
        
        {/* Main Content */}
        <section className="section-padding bg-mediterranean-cream/30 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* First Column - More Text */}
              <div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-black mb-2">
                      Explore our Fine Cuisine
                    </h2>
                    <Separator className="w-20 h-1 bg-cafe-gold mb-6" />
                    <div className="space-y-5 text-black text-xl font-semibold">
                      <p className="mb-4 leading-relaxed text-justify">
                        The Cafe Renaissance brings the ambiance of classy cafe/bar with an European flair. The friendly, relaxed atmosphere is appropriately balanced in a stylish designed decor imported from around the world, offering you pan-Mediterranean cuisine that features dishes from the south of Italy, France, Greece, Spain, Turkey, Moroccan, and the Eastern and middle-Eastern Mediterranean.
                      </p>
                      <p className="mb-4 leading-relaxed text-justify">
                        The Mediterranean diet is extremely healthy being lower in processed foods and animal fats, and is often based on local produce, wheat products, such as bread, pastry and pasta, fresh fruit and vegetables, fish and olive oil. The menu will include our complimentary house soup, variety of vegetarian, seafood, chicken, beef, lamb, and assortment of luscious in house specialties and desserts.
                      </p>
                      <p className="mb-4 leading-relaxed text-justify">
                        The median price range is $9.00 to $29.00 to meet every taste and budget. We offer a wide selection of Vegetarian and Gluten Free menu sections. The Café Renaissance is a favorite site for engagement parties, wedding, corporate events, office catering, product launches and fundraisers, or any special event.
                      </p>
                      <p className="mb-4 leading-relaxed text-justify">
                        We offer the ambiance, food quality and selection, a global menu, and service that is unmatched in upper Midwest. The restaurant house a full service coffee shop with wireless internet service. Top off the evening with one of the signature coffees or a shot of Espresso, or enjoy a cocktail served from our full bar menu, along with an extensive wine list to compliment your dining experience.
                      </p>
                      <p className="mb-4 leading-relaxed text-justify">
                        The restaurant also includes a WOOD STONE oven station within the dining room which offers its signature ZEPPOLE'S made from scratch pizzas, fresh baked flat bread and vegetarian dishes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second Column - Image at top + Last paragraph */}
              <div className="space-y-6">
                {/* Image at the top */}
                <div className="w-full aspect-[4/5] overflow-hidden">
                  <img 
                    src="/lovable-uploads/81332f37-ffdd-44ae-aa78-fc4d7c5f6883.png" 
                    alt="Cafe Renaissance dining experience" 
                    className="w-full h-full object-cover rounded-lg shadow-lg" 
                  />
                </div>
                
                {/* Last paragraph below image */}
                <div className="text-black text-xl font-semibold">
                  <p className="leading-relaxed text-justify">
                    The Cafe Renaissance is part an independent chain own and operated by Globe Enterprises which established in the restaurant business during the early 1970's. The restaurant and the Bar seats over 200 and our private party room, the venetian room seats up to 50 guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};
export default About;
