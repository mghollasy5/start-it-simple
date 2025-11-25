
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryHeader from "@/components/gallery/GalleryHeader";
import GalleryCarousel from "@/components/gallery/GalleryCarousel";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const galleryImages = [
  // ROOMS - Private dining, main hall, table settings
  {
    id: 5,
    src: "/lovable-uploads/7ce2f013-a097-4de3-a133-2286e9a7a098.png",
    alt: "Elegant private dining room",
    caption: "Private dining room with crystal chandelier"
  },
  {
    id: 7,
    src: "/lovable-uploads/3ed64a2f-be0f-4ac4-995f-ec45ccdd1f7a.png",
    alt: "Main dining hall",
    caption: "Our main dining hall with classical European décor"
  },
  {
    id: 6,
    src: "/lovable-uploads/2a7f2ae1-a1ea-45e6-80b4-765f15f3e280.png",
    alt: "Special event table setting",
    caption: "Perfect setup for special celebrations and events"
  },
  {
    id: 23,
    src: "/lovable-uploads/921b1d62-90ab-42c8-bbba-548ba4216148.png",
    alt: "Winter wine table setting",
    caption: "Intimate table setting with premium wine selection"
  },

  // BAR - Spirits, cocktails, bar collection
  {
    id: 8,
    src: "/lovable-uploads/e928198b-e369-40a2-8343-c00a11df7ad1.png",
    alt: "Premium bar collection",
    caption: "Extensive collection of premium spirits and wines"
  },
  {
    id: 29,
    src: "/lovable-uploads/dff6ca64-f552-422c-8bc2-c31fe191fe14.png",
    alt: "Signature cocktail with raspberry",
    caption: "House specialty cocktail with fresh raspberry and premium spirits"
  },
  {
    id: 30,
    src: "/lovable-uploads/913652ac-2694-4d16-a83a-3f73a192ade0.png",
    alt: "Craft cocktail with fresh garnish",
    caption: "Artisanal cocktail with fresh fruit and herb garnish"
  },

  // FOODS - Main dishes, meat, seafood
  {
    id: 1,
    src: "/lovable-uploads/bd146f0b-d733-48f9-87e1-c41153caea95.png",
    alt: "Signature grilled meat with pasta",
    caption: "Our signature grilled meat dish with house-made pasta"
  },
  {
    id: 2,
    src: "/lovable-uploads/8cae95cd-63d9-415b-8272-23df40e3a32a.png",
    alt: "Premium steak presentation",
    caption: "Premium cut steak with seasonal vegetables"
  },
  {
    id: 9,
    src: "/lovable-uploads/db646b34-38f1-4b10-ad15-8011ba291f82.png",
    alt: "Gourmet plated dish",
    caption: "Expertly plated entrée with wine pairing"
  },
  {
    id: 10,
    src: "/lovable-uploads/5eee18f4-c160-4e6f-8dc4-8694ecb5e585.png",
    alt: "Fresh seafood preparation",
    caption: "Fresh fish with seasonal accompaniments and wine selection"
  },
  {
    id: 12,
    src: "/lovable-uploads/d0c26cb8-175d-40f7-a372-af7fa2d24d0a.png",
    alt: "Grilled seafood with shrimp",
    caption: "Pan-seared seafood topped with jumbo shrimp"
  },
  {
    id: 13,
    src: "/lovable-uploads/10a9768c-58f9-418e-b7c8-1df12aa61977.png",
    alt: "Signature lamb chop presentation",
    caption: "Perfectly grilled lamb chop with seasonal vegetables"
  },
  {
    id: 31,
    src: "/lovable-uploads/e983d0ce-2974-49ee-9689-7ff958783857.png",
    alt: "Braised lamb shank with wine pairing",
    caption: "Braised lamb shank with wine pairing"
  },
  {
    id: 16,
    src: "/lovable-uploads/aa9def4a-dd8d-4885-8f08-9c3cce74e7e5.png",
    alt: "Surf and turf premium plate",
    caption: "Grilled steak with lobster tail and seasonal vegetables"
  },
  {
    id: 19,
    src: "/lovable-uploads/f09ec2ba-7264-46cc-ae65-93b672cec17e.png",
    alt: "Lobster thermidor in dining room",
    caption: "Premium lobster dish served in our elegant main dining room"
  },
  {
    id: 20,
    src: "/lovable-uploads/e9abd24f-596a-4e26-b731-df6427f519a5.png",
    alt: "Surf and turf specialty",
    caption: "Our signature surf and turf with lobster and premium beef"
  },
  {
    id: 21,
    src: "/lovable-uploads/ddca08f3-d88b-4378-bd87-829b28bbf4af.png",
    alt: "Lobster in rich saffron sauce",
    caption: "Fresh lobster prepared in a rich saffron and herb sauce"
  },
  {
    id: 22,
    src: "/lovable-uploads/e18577db-e3b3-44d2-854e-f933b79a742d.png",
    alt: "Traditional beef bourguignon",
    caption: "Classic beef bourguignon served in our signature pot"
  },
  {
    id: 24,
    src: "/lovable-uploads/5c580ac7-be1c-4eb8-99f2-cb5fd29a6d59.png",
    alt: "Rack of lamb presentation",
    caption: "French-cut rack of lamb with roasted vegetables and red wine reduction"
  },
  {
    id: 25,
    src: "/lovable-uploads/7bf93378-aff1-4469-b520-845f5e9dca21.png",
    alt: "Premium surf and turf presentation",
    caption: "Perfectly grilled steak with lobster tail and seasonal vegetables"
  },
  {
    id: 26,
    src: "/lovable-uploads/fb017f7e-03b4-4caa-a9d3-b21c7266009c.png",
    alt: "Seared fish with pecan crust",
    caption: "Pan-seared fish fillet with toasted pecan crust and seasonal vegetables"
  },
  {
    id: 27,
    src: "/lovable-uploads/9fa585fd-b80e-414e-9e3d-8648c3eab473.png",
    alt: "Pan-seared fish with shrimp garnish",
    caption: "Perfectly cooked fish with jumbo shrimp and colorful vegetable medley"
  },
  {
    id: 28,
    src: "/lovable-uploads/cb834721-8f96-4e58-984d-958a4f37d50b.png",
    alt: "Lobster tail with seasonal vegetables",
    caption: "Fresh lobster tail with roasted seasonal vegetables and saffron rice"
  },

  // DESSERTS - Sweet courses, pastries
  {
    id: 3,
    src: "/lovable-uploads/2b889d7d-8077-4421-8ae5-4ea367985781.png",
    alt: "Classic crème brûlée",
    caption: "Traditional crème brûlée with fresh berries"
  },
  {
    id: 4,
    src: "/lovable-uploads/0b5d4de4-e276-41c3-b960-f1fcdadee50f.png",
    alt: "Artisanal dessert collection",
    caption: "Our pastry chef's signature dessert collection"
  },
  {
    id: 11,
    src: "/lovable-uploads/6fb06424-8094-45ff-92e8-db180f66a7eb.png",
    alt: "Chocolate pomegranate dessert",
    caption: "Decadent chocolate creation with fresh pomegranate"
  },
  {
    id: 14,
    src: "/lovable-uploads/593526bc-0845-4e56-aee9-75823fa5c717.png",
    alt: "Poached pear dessert",
    caption: "Classic poached pear with berry compote and almonds"
  },
  {
    id: 17,
    src: "/lovable-uploads/c3c06942-9c86-40bf-9ef5-60fe75128ca5.png",
    alt: "Artistic apple swan desserts",
    caption: "Elegant dessert presentation with apple swan garnish"
  },
  {
    id: 18,
    src: "/lovable-uploads/a89b96c6-6e4f-49d1-96ec-0e5906a5c248.png",
    alt: "Poached pear in berry compote",
    caption: "Golden poached pear with fresh berry compote and mint"
  }
];

const Gallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Automatically change featured image every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const openImageModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

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
        
        {/* Gallery Content */}
        <section className="section-padding bg-mediterranean-cream/30 mt-16">
          <div className="max-w-7xl mx-auto">
            <GalleryCarousel images={galleryImages} />
            <GalleryGrid 
              images={galleryImages} 
              activeImageIndex={activeImageIndex} 
              onImageClick={openImageModal}
            />
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium bg-black/50 rounded-lg p-3">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
