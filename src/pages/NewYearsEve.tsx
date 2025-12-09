import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NewYearsEve = () => {
  const firstCourse = [
    { name: "Smoked Lobster Chowder", description: "Chunks of lobster meat, roasted fine vegetables, brandy cream", price: "$9.99" },
    { name: "Maple Butternut Squash Soup", description: "Ginger, and raspberry whipped cream", price: "$8.99" },
    { name: "Mediterranean Salad", description: "Heart of romaine, tossed with lemon and olive oil topped with feta, cucumber, tomato and kalamata olive", price: "$8.99" },
  ];

  const secondCourse = [
    { name: "Kobe Meatballs", description: "Two jumbo Kobe beef meatballs, served in Bourbon tomato basil sauce", price: "$18.99" },
    { name: "Caviar", description: "Caspian Sea golden Osetra caviar, served with condiments", price: "$185.00" },
    { name: "Calamari", description: "Lightly battered steaks, fried to a tender crisp, golden brown, served with the house marinara sauce, garnished with lemon juice and mint herb", price: "$22.99" },
    { name: "Stuffed Shrimp", description: "Jumbo shrimp stuffed with crab, mascarpone cheese and herbs served with brandy lemon cream", price: "$22.99" },
  ];

  const mainCourse = [
    { name: "Filet Mignon", description: "This pepper-crusted, 8 oz. thick delicious cut from the heart of tenderloin is cooked to your liking and proposed with truffle port demi glaze. Served with seasonal vegetables and Yukon potato.", price: "$69.99", addon: "Add Lobster tail $45.00" },
    { name: "New Zealand Rack of Lamb", description: "Ginger herb and roasted garlic crusted rack of lamb with rosemary-mint vegetables and infused with Shiraz demi glaze. Served with sweet potato puree.", price: "$49.99" },
    { name: "Bone-in Ribeye", description: "Carefully aged 20 oz Bone-in Ribeye charbroiled to your liking. Served with scalloped potatoes, vegetables and red wine Au jus.", price: "$69.99" },
    { name: "Stuffed Atlantic Salmon", description: "8 oz filet of fresh Atlantic salmon stuffed with spinach, artichoke, garlic, and Mascarpone cheese. Served with vegetables, apricot and wild cherries chutney, and finished with Chardonnay reduction.", price: "$39.99" },
    { name: "Moroccan Tagine", description: "A popular Casablanca style stew of selected meat, braised with onion, tomato, cumin, green olives and ginger. Finished with saffron harisa sauce reduction over a bed of basmati rice. Choice of chicken or vegetables. Garnished with preserved lemons.", price: "$33.99" },
    { name: "Tortellini De Renaissance", description: "Sautéed chicken breast, shrimp, fresh basil, garlic, bell peppers in parmesan cream sauce, over tricolor cheese tortellini.", price: "$29.99" },
    { name: "Lobster Mac", description: "Butter-bathed lobster sautéed with bacon, garlic, penne noodles in sharp cheddar and parmesan cream sauce.", price: "$52.99" },
    { name: "Chicken Ballotine", description: "Stuffed chicken breast with spinach, artichoke, cheese blend and garlic. Served with potato puree and fresh steamed vegetables.", price: "$29.99" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cafe-cream to-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-cafe-logoRed mb-4">
            Happy New Year
          </h1>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-black mb-6">
            Chef Featured Menu
          </h2>
          <p className="text-lg text-black/70 italic">
            Entrees are accompanied by our freshly baked focaccia bread, and complimentary champagne toast
          </p>
        </motion.div>
      </section>

      {/* Menu Content */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* First Course */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-cafe-logoRed mb-6 text-center border-b-2 border-cafe-gold pb-3">
              First Course
            </h3>
            <div className="space-y-6">
              {firstCourse.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-playfair font-semibold text-black">{item.name}</h4>
                    <p className="text-black/70 mt-1">{item.description}</p>
                  </div>
                  <span className="text-lg font-semibold text-cafe-logoRed whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Second Course */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-cafe-logoRed mb-6 text-center border-b-2 border-cafe-gold pb-3">
              Second Course
            </h3>
            <div className="space-y-6">
              {secondCourse.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-playfair font-semibold text-black">{item.name}</h4>
                    <p className="text-black/70 mt-1">{item.description}</p>
                  </div>
                  <span className="text-lg font-semibold text-cafe-logoRed whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main Course */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-cafe-logoRed mb-6 text-center border-b-2 border-cafe-gold pb-3">
              Main Course
            </h3>
            <div className="space-y-6">
              {mainCourse.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-playfair font-semibold text-black">{item.name}</h4>
                    <p className="text-black/70 mt-1">{item.description}</p>
                    {item.addon && (
                      <p className="text-cafe-gold mt-1 italic">{item.addon}</p>
                    )}
                  </div>
                  <span className="text-lg font-semibold text-cafe-logoRed whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewYearsEve;
