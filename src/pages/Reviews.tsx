import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

// Updated reviews with new data and first letter of last name format
const reviews = [
  {
    name: "Max C.",
    title: "Local Guide",
    date: "a month ago",
    reviewCount: "37 reviews",
    photoCount: "25 photos",
    dineInfo: "Dine in | Dinner | $20–30",
    content: "This is a great Mediterranean restaurant, with excellent food and service. My gyro plate was absolutely delicious! It was very quiet when we were there, so check this place out! They need to show you how great they are, and you'll definitely enjoy it!",
    images: [
      "/lovable-uploads/633490b5-6f1e-4685-af45-2edcf0c87bea.png",
      "/lovable-uploads/cbc3a9e0-a54e-4bba-af36-4a56fb70d29f.png",
      "/lovable-uploads/cc31fc82-a51e-4b6c-a44b-be4904f39fe0.png"
    ],
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "Brett",
    title: "Local Guide",
    date: "2 weeks ago",
    reviewCount: "144 reviews",
    photoCount: "42 photos",
    content: "I rarely give out five stars because I think five stars should be something special. However, this place earned it. The ambiance is of a fine dining establishment but still they allow casual diners so it doesn't have that pretentiousness. At least on the night I was there, a weekend, there was a live piano player that was very enjoyable. The menu well maybe not 100% Mediterranean is varied and does have some of those dishes in addition to other delicious and well thought out dishes such as jambalaya pasta. They also have various curries in addition to the rest of the menu. Your meal includes bread and soup and if you choose, you can pay a small surcharge for either lobster chowder or French onion soup. I really found the jambalaya pasta to be exceptionally good with an extra kick of spice but overall well blended and flavorful. The included focaccia bread is delicious. Al is one of the managers and was lovely. Overall I would highly recommend this place for any occasion.",
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "Erin T.",
    title: "Local Guide",
    date: "2 weeks ago",
    reviewCount: "17 reviews",
    photoCount: "2 photos",
    content: "Best steak and service in St Cloud! Exceptional and truly an experience. 5 stars all around and a staple in our date night. Recommend the filet!",
    images: [
      "/lovable-uploads/2823a0ae-5e41-4c5b-b1f8-cb8bd5790cca.png"
    ],
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "J S.",
    title: "Local Guide",
    date: "December 2024",
    reviewCount: "164 reviews",
    photoCount: "457 photos",
    dineInfo: "Dine in | Dinner | $20–30",
    content: "Fabulous! You open the door to the restaurant, and the delicious smell fills you with high expectations. From the awesome foccacia to the last bite of dinner, you've come to the right place. When you have such great service, you expect the food to be as good, and you won't be disappointed. All of our food was well seasoned, hot, and very tasty. It was the best mousakka I have ever had. What actually topped that was the bowl of beef bourguigion, which was exceptional. The gyros were delicious, as well as the Chicken Bryan. It's definitely a delightful experience from the time you arruve until you leave. A place well worth repeat visits to explore the whole menu.\n\nAgain, fantastic meals and excellent service. Saved room for dessert this time. Leftovers reheat nicely and you can freeze the Mousakka, which I freeze half each time. What a dinner!",
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "Kelly D.",
    title: "Local Guide",
    date: "1 month ago",
    reviewCount: "73 reviews",
    photoCount: "200 photos",
    dineInfo: "Dine in | Dinner | $50–100",
    content: "My husband and I celebrated our anniversary dinner here and enjoyed everything we ordered. The Lamb appetizer was cooked perfectly. We had both the French onion soup and the seafood chowder. The french onion was the best french onion I have ever had! I wish I had the recipe! Our entrees were both amazing. Service was great and the atmosphere was romantic. Ordered two meals with an appetizer and a bottle of wine and spent about $200 total. Definitely worth it!",
    images: [
      "/lovable-uploads/a27f2144-65e2-424c-848b-bc232b1ad031.png",
      "/lovable-uploads/0eeb7f00-bf83-4d40-9823-8fb55af69cb3.png",
      "/lovable-uploads/7835610f-d06d-4a50-9d57-0ae69008f787.png",
      "/lovable-uploads/032ebee1-decb-4d29-8b0a-9c6c59e23e78.png",
      "/lovable-uploads/73e17ab6-61c8-42b0-8d60-c2cf46eaff6e.png",
      "/lovable-uploads/788e1389-1891-4308-a29d-a126651c3d19.png"
    ],
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "S F.",
    title: "",
    date: "",
    reviewCount: "23 reviews",
    photoCount: "53 photos",
    dineInfo: "Dine in | Dinner | $100+",
    content: "I went here for my first date with my now boyfriend of over a year. This is where he took me and I'm from the cities, so I had no idea that St.Cloud had restaurants like this. I was shocked. It is now one of my favorite places. The service was amazing, the calamari and all the food I got was astounding. I try to send friends of mine from the cities here. I love the ambiance and there was a piano playing while we had dinner. The romantic red curtains make you feel like you stepped inside a place in France. The outside of the place does not reflect at all what it is like inside. The outside looks dumpy and boring. So don't let that deceive you. The calamari is amazing.",
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "John C.",
    date: "7 years ago",
    reviewCount: "49 reviews",
    photoCount: "18 photos",
    content: "We are delighted every time we eat here. The service is exceptional. Staff are extremely attentive and work hard to ensure you have a pleasant experience. We enjoyed a delicious scallop appetizer followed by soup. Our server brought a small palate cleanser after the soup to prepare for the main dish. We shared a salmon entree and a kabob entree. Both were extremely flavorful and cooked perfectly. A pianist played softly throughout dinner, creating a relaxing ambiance. We only get to St. Cloud once or twice a year for conferences, and always have dinner at Cafe Renaissance when in town. Highly recommended.",
    images: [
      "/lovable-uploads/4c18e79f-7c14-43ad-9818-ffa5ebf7f692.png",
      "/lovable-uploads/4ce52601-feb1-4bb9-bc1e-f8bab5ac2898.png"
    ],
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "T P.",
    date: "2 years ago",
    reviewCount: "186 reviews",
    photoCount: "647 photos",
    dineInfo: "Dine in | Dinner | $30–50",
    content: "Update: We had another great experience here recently. Our waiter, Sébastien, was really top notch! We got the fish special, stuffed pork, and the kids pizza (which was truly huge). Our cocktails were excellent and the pumpkin creme Brule and chocolate cake were all fantastic. This is the place you want to go for any special occasion, date, or just to get the best food and service for your money in the area.\n\nVery large menu with lots of options. Good for a special occasion or romantic meal. Try something new here like escargot (it's served like it is in France) or Moroccan tangine!\n\nLocated in a strip mall type building-once inside you will forget that (see photos on their website or posted by others). The flaming cheese is fun for an appetizer. They have some tasting events and overall a nice atmosphere with a good wine selection. Prices are pretty average for the area for a nice sit down meal, but the food and service are far superior to anywhere in a 10 mile radius.",
    images: [
      "/lovable-uploads/e983d0ce-2974-49ee-9689-7ff958783857.png",
      "/lovable-uploads/7e0c3200-7497-497c-b425-040a7f74e93c.png",
      "/lovable-uploads/2d8cacbe-6ee0-4156-a375-a4b9a33e56ce.png",
      "/lovable-uploads/6a8b56d5-6d45-4328-b729-5f86d83c6890.png",
      "/lovable-uploads/919f0cfc-41c2-4e6f-a9a5-76c4792caced.png",
      "/lovable-uploads/937ac3fc-7e13-4675-8865-2c38573c15c0.png",
      "/lovable-uploads/69b54a13-58af-454b-8b4c-9897d7576bc5.png",
      "/lovable-uploads/95cabc25-3263-4b25-ad80-2bde20d03d0e.png"
    ],
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "Joyce R.",
    date: "3 years ago",
    reviewCount: "9 reviews",
    photoCount: "13 photos",
    dineInfo: "Dine in | Dinner | $30–50",
    content: "My husband and I visited here for the first time for Valentines Day. It was an amazing surprise for us. The atmosphere was so beautiful and inviting and the staff were extremely friendly. The food was absolutely delicious. We cant wait to go back!",
    images: [
      "/lovable-uploads/6c1f5101-b2e9-4247-a71b-9a7778ada4f2.png",
      "/lovable-uploads/804c9e79-06c6-46d8-9885-eb5d39680b48.png",
      "/lovable-uploads/b680ff2b-16ff-4e92-b297-7488f32021d6.png",
      "/lovable-uploads/587f268b-2709-460f-b752-2312213fc5cc.png",
      "/lovable-uploads/f46e0184-f2de-4010-93ab-e5ed0da14787.png"
    ],
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "Tim D.",
    date: "3 weeks ago",
    reviewCount: "1,395 reviews",
    photoCount: "4,471 photos",
    dineInfo: "$10–20",
    content: "We've gone here for years when we want a special place to celebrate. Nothing compares to their atmosphere and decor. First class.",
    ratings: {
      food: 4,
      service: 5,
      atmosphere: 5
    }
  }, {
    name: "Tracy P.",
    date: "a month ago",
    reviewCount: "3 reviews",
    photoCount: "17 photos",
    dineInfo: "$30–50",
    content: "This place was absolutely amazing! From the moment we walked in, we were treated like royalty. Our waiter was excellent, food was to die for and the atmosphere was so relaxing. I loved the live piano player, he played some of my favorite tunes🙂 We will DEFINITELY be back again!",
    ratings: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  }
];

const Reviews = () => {
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
        
        <section className="py-16 px-6 bg-mediterranean-cream/30 mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-black mb-4">
                Customer Reviews
              </h2>
              <Separator className="w-24 h-1 bg-cafe-gold mx-auto mb-6" />
              <p className="text-xl font-semibold text-black max-w-2xl mx-auto leading-relaxed">
                See what our guests have to say about their dining experiences at Cafe Renaissance.
              </p>
            </div>
            
            <div className="grid gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white/25 backdrop-blur-md border border-white/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-black">{review.name}</h3>
                      {review.dineInfo && <div className="text-sm font-semibold text-black/80 mt-1">{review.dineInfo}</div>}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    {Object.entries(review.ratings).map(([category, rating]) => (
                      <div key={category} className="flex items-center">
                        <span className="capitalize text-sm font-bold text-cafe-logoRed mr-1">
                          {category}:
                        </span>
                        <div className="flex text-cafe-gold">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-base font-medium text-black mb-4 leading-relaxed whitespace-pre-line">{review.content}</p>
                  
                  {(review as any).images && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {(review as any).images.map((image: string, imgIndex: number) => (
                        <img 
                          key={imgIndex}
                          src={image} 
                          alt={`Review photo ${imgIndex + 1}`}
                          className="w-full h-24 object-cover rounded"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Reviews;