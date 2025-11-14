
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuViewer from "@/components/menu/MenuViewer";
import MenuDownload from "@/components/menu/MenuDownload";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  AppetizersTab, 
  SoupsSaladsTab, 
  SidesTab, 
  SpecialtiesTab, 
  CombinationPlattersTab,
  PoultryTab, 
  SeafoodTab, 
  PastaTab, 
  PizzaTab, 
  KidsTab, 
  GlutenFreeTab, 
  VegetarianTab 
} from "@/components/MenuCategories";

const Menu = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = '/cafe-renaissance-complete-menu.pdf';
      link.download = 'Cafe-Renaissance-Complete-Menu.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setIsDownloading(false);
    }
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
        
        {/* Menu with Tabs */}
        <div className="pt-20 section-padding">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-4 text-cafe-maroon">
              Our Menu
            </h1>
            
            <MenuDownload downloadPDF={downloadPDF} isDownloading={isDownloading} />
            
            <Tabs defaultValue="full-menu" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-cafe-cream/50 p-2 mb-8 h-auto">
                <TabsTrigger value="full-menu" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Full Menu
                </TabsTrigger>
                <TabsTrigger value="appetizers" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Appetizers
                </TabsTrigger>
                <TabsTrigger value="soups-salads" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Soups & Salads
                </TabsTrigger>
                <TabsTrigger value="specialties" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Specialties
                </TabsTrigger>
                <TabsTrigger value="combination-platters" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Combination Platters
                </TabsTrigger>
                <TabsTrigger value="poultry" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Poultry
                </TabsTrigger>
                <TabsTrigger value="seafood" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Seafood
                </TabsTrigger>
                <TabsTrigger value="pasta" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Pasta
                </TabsTrigger>
                <TabsTrigger value="pizza" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Pizza
                </TabsTrigger>
                <TabsTrigger value="kids" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Kids
                </TabsTrigger>
                <TabsTrigger value="sides" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Sides
                </TabsTrigger>
                <TabsTrigger value="gluten-free" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Gluten-Free
                </TabsTrigger>
                <TabsTrigger value="vegetarian" className="data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Vegetarian
                </TabsTrigger>
              </TabsList>

              <TabsContent value="full-menu">
                <MenuViewer />
              </TabsContent>

              <AppetizersTab />
              <SoupsSaladsTab />
              <SidesTab />
              <SpecialtiesTab />
              <CombinationPlattersTab />
              <PoultryTab />
              <SeafoodTab />
              <PastaTab />
              <PizzaTab />
              <KidsTab />
              <GlutenFreeTab />
              <VegetarianTab />
            </Tabs>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
