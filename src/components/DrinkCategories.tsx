import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface DrinkItemProps {
  name: string;
  price?: string;
  description?: string;
  origin?: string;
}

const DrinkItem = ({ name, price, description, origin }: DrinkItemProps) => (
  <div className="p-4 border border-cafe-gold/30 rounded-lg hover:shadow-lg transition-all bg-white/80 hover:bg-white hover:-translate-y-1 duration-300">
    <div className="flex justify-between items-baseline mb-1.5">
      <h4 className="font-playfair text-base font-medium text-cafe-maroon">{name}</h4>
      {price && <span className="text-cafe-gold font-semibold ml-2">{price}</span>}
    </div>
    <Separator className="w-full h-px bg-cafe-tan/30 my-1.5" />
    {description && <p className="text-xs text-cafe-maroon/70 leading-relaxed">{description}</p>}
    {origin && <p className="text-xs text-cafe-maroon/60 mt-1 italic">{origin}</p>}
  </div>
);

export const RedWineTab = () => (
  <TabsContent value="red-wine" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Red Wines</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DrinkItem 
        name="Cabernet Sauvignon"
        price="$10 - $85"
        description="Full-bodied with dark fruit flavors and firm tannins"
        origin="California, France, Australia"
      />
      
      <DrinkItem 
        name="Pinot Noir"
        price="$12 - $95"
        description="Light to medium-bodied with red fruit and earthy notes"
        origin="France, Oregon, California"
      />
      
      <DrinkItem 
        name="Merlot"
        price="$9 - $75"
        description="Medium-bodied with plum and cherry flavors"
        origin="France, California, Washington"
      />
      
      <DrinkItem 
        name="Malbec"
        price="$10 - $65"
        description="Rich and robust with dark berry flavors"
        origin="Argentina, France"
      />
      
      <DrinkItem 
        name="Syrah/Shiraz"
        price="$11 - $80"
        description="Bold and spicy with dark fruit characteristics"
        origin="France, Australia, California"
      />
      
      <DrinkItem 
        name="Zinfandel"
        price="$10 - $70"
        description="Fruity and spicy with jammy berry flavors"
        origin="California"
      />
    </div>
  </TabsContent>
);

export const WhiteWineTab = () => (
  <TabsContent value="white-wine" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">White Wines</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DrinkItem 
        name="Chardonnay"
        price="$9 - $85"
        description="Rich and buttery with oak and citrus notes"
        origin="California, France, Australia"
      />
      
      <DrinkItem 
        name="Sauvignon Blanc"
        price="$8 - $65"
        description="Crisp and refreshing with herbaceous notes"
        origin="New Zealand, France, California"
      />
      
      <DrinkItem 
        name="Pinot Grigio"
        price="$8 - $55"
        description="Light and crisp with citrus and green apple"
        origin="Italy, California"
      />
      
      <DrinkItem 
        name="Riesling"
        price="$9 - $75"
        description="Sweet to dry with floral and stone fruit flavors"
        origin="Germany, Washington, Alsace"
      />
      
      <DrinkItem 
        name="Moscato"
        price="$7 - $45"
        description="Sweet and fruity with peach and apricot notes"
        origin="Italy, California"
      />
      
      <DrinkItem 
        name="Prosecco"
        price="$8 - $50"
        description="Light and bubbly with fresh fruit flavors"
        origin="Italy"
      />
    </div>
  </TabsContent>
);

export const CocktailsTab = () => (
  <TabsContent value="cocktails" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Signature Cocktails</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DrinkItem 
        name="Mediterranean Sunset"
        price="$12"
        description="Aperol, prosecco, orange juice, and soda"
      />
      
      <DrinkItem 
        name="Classic Martini"
        price="$14"
        description="Gin or vodka with dry vermouth and olive"
      />
      
      <DrinkItem 
        name="Old Fashioned"
        price="$13"
        description="Bourbon, sugar, bitters, and orange peel"
      />
      
      <DrinkItem 
        name="Mojito"
        price="$11"
        description="White rum, mint, lime, sugar, and soda"
      />
      
      <DrinkItem 
        name="Margarita"
        price="$12"
        description="Tequila, triple sec, and fresh lime juice"
      />
      
      <DrinkItem 
        name="Negroni"
        price="$13"
        description="Gin, Campari, and sweet vermouth"
      />
    </div>
  </TabsContent>
);

export const BeersTab = () => (
  <TabsContent value="beers" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Craft Beers & Imports</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DrinkItem 
        name="Import Lagers"
        price="$6 - $8"
        description="Peroni, Stella Artois, Corona"
      />
      
      <DrinkItem 
        name="Craft IPAs"
        price="$7 - $9"
        description="Rotating selection of local and regional IPAs"
      />
      
      <DrinkItem 
        name="Wheat Beers"
        price="$6 - $8"
        description="Blue Moon, Hoegaarden, Shock Top"
      />
      
      <DrinkItem 
        name="Stouts & Porters"
        price="$7 - $9"
        description="Guinness, local craft stouts"
      />
      
      <DrinkItem 
        name="Seasonal Selections"
        price="$7 - $9"
        description="Ask your server about our seasonal offerings"
      />
      
      <DrinkItem 
        name="Domestic Beers"
        price="$5 - $6"
        description="Budweiser, Coors Light, Miller Lite"
      />
    </div>
  </TabsContent>
);

export const NonAlcoholicTab = () => (
  <TabsContent value="non-alcoholic" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Non-Alcoholic Beverages</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DrinkItem 
        name="Fresh Juices"
        price="$4"
        description="Orange, cranberry, pineapple, grapefruit"
      />
      
      <DrinkItem 
        name="Soft Drinks"
        price="$3"
        description="Coca-Cola products, lemonade, iced tea"
      />
      
      <DrinkItem 
        name="Espresso"
        price="$3.50"
        description="Double shot of rich Italian espresso"
      />
      
      <DrinkItem 
        name="Cappuccino"
        price="$4.50"
        description="Espresso with steamed milk and foam"
      />
      
      <DrinkItem 
        name="Sparkling Water"
        price="$3"
        description="San Pellegrino, Perrier"
      />
      
      <DrinkItem 
        name="Hot Tea"
        price="$3"
        description="Selection of premium teas"
      />
    </div>
  </TabsContent>
);
