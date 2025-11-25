
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw } from "lucide-react";

interface MenuDownloadProps {
  downloadPDF: () => Promise<void>;
  isDownloading: boolean;
}

const MenuDownload = ({ downloadPDF, isDownloading }: MenuDownloadProps) => {
  return (
    <section className="py-8 bg-cafe-cream/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-cafe-maroon/70 mb-4">
          Having trouble viewing the menu? Download the PDF for the best experience.
        </p>
        
        <Button 
          onClick={downloadPDF}
          disabled={isDownloading}
          className="bg-cafe-maroon hover:bg-cafe-maroon/90 text-white font-semibold px-8 py-3 disabled:opacity-50"
        >
          {isDownloading ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Download Complete Menu
            </>
          )}
        </Button>
      </div>
    </section>
  );
};

export default MenuDownload;
