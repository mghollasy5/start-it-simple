import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuDownload from "@/components/menu/MenuDownload";
import DrinksViewer from "@/components/menu/DrinksViewer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RedWineTab, WhiteWineTab } from "@/components/DrinkCategories";

const Drinks = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = '/Wine Menu-color.pdf';
      link.download = 'Cafe-Renaissance-Wine-Menu.pdf';
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
        
        {/* Drinks Menu with Tabs */}
        <div className="pt-20 section-padding">
          <div className="max-w-7xl mx-auto">
            <MenuDownload downloadPDF={downloadPDF} isDownloading={isDownloading} buttonText="Download Drink Menu" />
            
            <Tabs defaultValue="full-menu" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-cafe-cream/50 p-2 mb-8 h-auto">
                <TabsTrigger value="full-menu" className="text-black text-lg font-semibold px-6 py-3 data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Full Menu
                </TabsTrigger>
                <TabsTrigger value="red-wine" className="text-black text-lg font-semibold px-6 py-3 data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  Red Wine
                </TabsTrigger>
                <TabsTrigger value="white-wine" className="text-black text-lg font-semibold px-6 py-3 data-[state=active]:bg-cafe-logoRed data-[state=active]:text-white">
                  White Wine
                </TabsTrigger>
                </TabsList>

              <TabsContent value="full-menu">
                <DrinksViewer />
              </TabsContent>

              <RedWineTab />
              <WhiteWineTab />
            </Tabs>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Drinks;
