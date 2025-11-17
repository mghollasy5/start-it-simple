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
      <h4 className="font-playfair text-lg font-bold text-cafe-maroon">{name}</h4>
      {price && <span className="text-black font-bold ml-2">{price}</span>}
    </div>
    <Separator className="w-full h-px bg-cafe-tan/30 my-1.5" />
    {description && <p className="text-base text-black leading-relaxed">{description}</p>}
    {origin && <p className="text-base text-black mt-1 italic">{origin}</p>}
  </div>
);

interface WineCategory {
  title: string;
  items: DrinkItemProps[];
}

const wineCategories: WineCategory[] = [
  {
    title: "Cabernet Sauvignon",
    items: [
      {
        name: "J.Lohr (California)",
        description:
          "Dense and soft, this wine boasts ripe flavors of black currant and cherry, enhanced by a bouquet of vanilla and spice from a year of barrel aging.",
      },
      {
        name: "Hendry HRW (Napa Valley)",
        description:
          "Medium body opens with smoky dark berries, offering a palate of tangy black currant, cocoa, and firm tannins.",
      },
      {
        name: "Terra Valentine (Napa Valley)",
        description:
          "The nose opens with deep plum, violets, cedar and bittersweet chocolate. Bright cola berry follows with notes of caramel and dried fig and a lingering, dark cocoa finish.",
      },
      {
        name: "Rombauer (Napa Valley)",
        description:
          "Vibrant purple and black hue with expressive aromas of fresh cherry pie, blackberry and hints of spice. Medium to full-bodied.",
      },
      {
        name: "Chimney Rock (Stag’s Leap)",
        description:
          "A deep garnet color with a light purple hue. Dark aromas of blackberry, black currant and dark chocolate with a hint of mocha.",
      },
      {
        name: "Silver Oak (Alexander Valley)",
        description:
          "This full-bodied 100% Cabernet Sauvignon is rich in color with a nose of cassis liqueur, nutmeg and dark chocolate. Great expression of fruit with spicy finish.",
      },
      {
        name: "Cakebread Cellars (Napa Valley)",
        description:
          "This rare and elegant Cabernet is the prime example of classic Napa Valley quality. Boasts luxurious blackberry and dark chocolate aromas, rich, concentrated flavors and ripe, supple tannins.",
      },
      {
        name: "Caymus (Napa Valley)",
        description:
          "(1 Liter) Offering a rich and creamy texture with warmed vanilla, plum, and raspberry notes and hints of espresso swirled throughout.",
      },
    ],
  },
  {
    title: "Merlot",
    items: [
      {
        name: "J.Lohr (California)",
        description:
          "Soft red wine with supple texture and black currant signature. Bold juicy flavors of pomegranate, black cherry and dark chocolate are accompanied by a full year of oak barrel aging.",
      },
      {
        name: "Free Mark Abby (Napa Valley)",
        description:
          "A round and simple Merlot with plum, chocolate and olive character. Full to medium body, velvety tannins. Grows on you. Drink and enjoy.",
      },
      {
        name: "Rombauer (Napa Valley)",
        description:
          "Deep ruby color with a crimson hue. Cherry and mint aromas support an abundance of mulberry and plum fruit. Hints of blackberry are framed with silky tannins and smooth finish.",
      },
    ],
  },
  {
    title: "Zinfandel",
    items: [
      {
        name: "Kenwood (Yulupa)",
        description:
          "This wine is aged for 18 months in American oak barrels, creating complexity of bouquet and softened tannins. Vibrant wine with blackberry fruit aromas and flavors, with a smooth and supple mouth-feel. Fruity aromas of blackberries and figs, followed by toffee, mocha, and spicy notes.",
      },
      {
        name: "Dry Creek Vineyard (Sonoma County)",
        description:
          "A wonderful profile of blueberry, red currants, and silky structure. Layers of black cherry, mixed berries, currants and all spice. The finish lingers on, creating a mouth-watering desire for another sip.",
      },
      {
        name: "Rombauer (Napa Valley",
        description:
          "A great Zinfandel. This wine is a unique blend of 62% Amador, 18% Lake, 14% Napa and 6% El Dorado counties.",
      },
        ],
  },
      {
    title: "Shiraz",
    items: [
      {
        name: "Jacobs Creek",
        description:
          "Black cherry and peppery spice, the finish delivers soft, balanced tannins and a hint of dark cherry fruit.",
      },
      {
        name: "Layer Cake (Australia)",
        description:
          "Layers of fruit, mocha and chocolate. Hints of spices make up this rich wine.",
      },
    ],
  },
   {
    title: "Chianti",
    items: [
      {
        name: "Classico Riserva (Tuscany)",
        description:
          "This is a Riserva wine, which means the best grapes were chosen for production and the wine undergoes more oak aging than a standard Chianti Classico.",
      },
      {
        name: "Candoni (Italy)",
        description:
          "This Chianti has an intense red purple color. It has aromas of dried cherries with a fresh almond and blackberry and a soft, dry taste.",
      },
    ],
  },
  {
    title: "Pinot Noir",
    items: [
      {
        name: "J.Lohr (California)",
        description:
          "Opulent expression of cool climate . bright color,Falcon’s perch is soft on the palate with notes of strawberry jam and sage,showing a bouquet of spicy vanilla.",
      },
      {
        name: "Underwood Cellars (Oregon)",
        description:
          "One of the Oregon’s best. It exhibits aromas of cherries and spice, with subtle hints of vanilla. The palate is loaded with ripe dark fruit, cherry and blueberry, with great balance leading to a long finish.",
      },
      {
        name: "Meiomie (Sonoma County)",
        description:
          "Velvety & Smooth. Aromas of bright strawberry and jammy fruit, mocha, and vanilla, Expressive dark cherry and juicy strawberry.",
      },
      {
        name: "Ken Wright (Willamette Valley)",
        description:
          "Elegant flavors of generous red cherry, raspberry, and plum with subtle notes of vanilla cream.",
      },
    ],
  },
   {
    title: "Tempranillo",
    items: [
      {
        name: "Tempranillo, Manyana (Spain)",
        description:
          "Ruby in color, tastes of spice, tobacco, vanilla and strawberry enlivened by oak aging.",
      },
      {
        name: "Campo Viejo Reserva (Spain)",
        description:
          "A beautiful Spanish tawny Rioja with hints of oaky spices and a touch of vanilla.",
      },
    ],
  },
    {
    title: "Malbec",
    items: [
      {
        name: "OKO (Argentina)",
        description:
          "Made with organically grown grapes. Aromas of Plum, spices, and red fruits with hints of Mocha.",
      },
      {
        name: "Conquista Reserve (Argentina)",
        description:
          "Dense flavors of dark plumb and chocolate, layered with toasted oak and a velvety finish that lingers and lingers.",
      },
      {
        name: "Gascon (Argentina)",
        description:
          "Intense black fruit and red plum aromas, with flavors of blueberry, plum, dark cherry and a hint of mocha.",
      },
    ],
  },
   {
    title: "Red Blend",
    items: [
      {
        name: "Marietta Old Vine Red (California)",
        description:
          "A lush, Zinfandel-style wine. Loads of spicy, ripe blackberry fruit dominates the nose and floods the palate. Aged in French and American oak barrels.",
      },
      {
        name: "Jax Y3 Taureau (Napa Valley)",
        description:
          "Layers of ripe blackcurrants, black cherries, chocolate, hazelnut, and spice lead to full bodied richness and a balanced finish.",
      },
      {
        name: "Orin Swift, Zinfandel Blend. 8 Years in the Desert",
        description:
          "Heady aromas of brambly raspberry, black fig and dark chocolate, and fennel. The palate is lush and opulent with blackberries, dark plums and currants.",
      },
    ],
  },
];

export const RedWineTab = () => (
  <TabsContent value="red-wine" className="space-y-8">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Red Wines</h2>
    {wineCategories.map((category) => (
      <section key={category.title}>
        <h4 className="font-playfair text-2xl font-bold text-cafe-maroon mb-4">{category.title}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.items.map((item, index) => (
            <DrinkItem key={`${category.title}-${index}`} {...item} />
          ))}
        </div>
      </section>
    ))}
  </TabsContent>
);




export const WhiteWineTab = () => (
  <TabsContent value="white-wine" className="space-y-8">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Signature Cocktails</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DrinkItem 
        name="Mediterranean Sunsett"
        price="$12"
        description="Aperol, prosecco, orange juice, and soda"
      />
      
      <DrinkItem 
        name="Classic Martiniiiiii"
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
        name="Soft soft Drinks"
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
