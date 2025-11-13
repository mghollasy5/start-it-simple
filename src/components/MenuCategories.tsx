import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  options?: string;
}

const MenuItem = ({ name, price, description, options }: MenuItemProps) => (
  <div className="p-4 border border-cafe-gold/30 rounded-lg hover:shadow-lg transition-all bg-white/80 hover:bg-white hover:-translate-y-1 duration-300">
    <div className="flex justify-between items-baseline mb-1.5">
      <h4 className="font-playfair text-base font-medium text-cafe-maroon">{name}</h4>
      <span className="text-cafe-gold font-semibold ml-2">{price}</span>
    </div>
    <Separator className="w-full h-px bg-cafe-tan/30 my-1.5" />
    <p className="text-xs text-cafe-maroon/70 leading-relaxed">{description}</p>
    {options && <p className="text-xs text-cafe-maroon/70 mt-1 italic">{options}</p>}
  </div>
);

export const AppetizersTab = () => (
  <TabsContent value="appetizers" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Appetizers</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Spinash and Artichoke Dip"
        price="$14.99"
        description="Traditional tangy hot spinach and artichoke cheese dip. Served with house chips."
      />
      
      <MenuItem 
        name="Spanakopita"
        price="$13.99"
        description="Baked phyllo dough stuffed with spinach and feta chesse."
      />
      
      <MenuItem 
        name="French Asian Crab Cake"
        price="$15.99"
        description="Pair of sweet Dungeness crab cakes. Fried and served with roasted red peppers and aioli sauce."
      />
      
      <MenuItem 
        name="Coquilles Saint Jacques"
        price="MP"
        description="Seared diver scallops over a mango chuntey."
      />
      
      <MenuItem 
        name="Bruschetta"
        price="$10.99"
        description="Toasted Italian bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil."
      />
      
      <MenuItem 
        name="Spanakopita"
        price="$11.99"
        description="Traditional Greek spinach pie with feta cheese wrapped in flaky phyllo dough."
      />
      
      <MenuItem 
        name="Mozzarella Sticks"
        price="$9.99"
        description="Golden fried mozzarella cheese sticks served with marinara sauce."
      />
      
      <MenuItem 
        name="Mediterranean Sampler"
        price="$16.99"
        description="A combination of hummus, baba ganoush, stuffed grape leaves, falafel, and warm pita bread."
      />
    </div>
  </TabsContent>
);

export const SoupsSaladsTab = () => (
  <TabsContent value="soups-salads" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Soups & Salads</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Greek Salad"
        price="$12.99"
        description="Fresh romaine lettuce, tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese with our house vinaigrette."
      />
      
      <MenuItem 
        name="Caesar Salad"
        price="$11.99"
        description="Crisp romaine lettuce tossed with creamy Caesar dressing, parmesan cheese, and croutons."
        options="Add Chicken $4.99, Add Shrimp $6.99"
      />
      
      <MenuItem 
        name="Caprese Salad"
        price="$13.99"
        description="Fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic glaze and extra virgin olive oil."
      />
      
      <MenuItem 
        name="House Salad"
        price="$9.99"
        description="Mixed greens, tomatoes, cucumbers, carrots, and red onions with your choice of dressing."
      />
      
      <MenuItem 
        name="Lentil Soup"
        price="$7.99"
        description="Hearty Mediterranean lentil soup with vegetables, herbs, and spices. Served with warm pita bread."
      />
      
      <MenuItem 
        name="French Onion Soup"
        price="$8.99"
        description="Classic French onion soup topped with melted Gruyère cheese and croutons."
      />
      
      <MenuItem 
        name="Soup of the Day"
        price="$7.99"
        description="Ask your server about today's chef's special soup creation."
      />
    </div>
  </TabsContent>
);

export const SidesTab = () => (
  <TabsContent value="sides" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Sides</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Garlic Mashed Potatoes"
        price="$6.99"
        description="Creamy mashed potatoes infused with roasted garlic and butter."
      />
      
      <MenuItem 
        name="Saffron Basmati Rice"
        price="$5.99"
        description="Aromatic basmati rice delicately flavored with saffron and herbs."
      />
      
      <MenuItem 
        name="Grilled Vegetables"
        price="$7.99"
        description="Seasonal vegetables grilled to perfection with olive oil and Mediterranean herbs."
      />
      
      <MenuItem 
        name="French Fries"
        price="$5.99"
        description="Crispy golden fries seasoned with sea salt."
      />
      
      <MenuItem 
        name="Truffle Fries"
        price="$8.99"
        description="Hand-cut fries tossed with truffle oil and parmesan cheese."
      />
      
      <MenuItem 
        name="Sautéed Spinach"
        price="$6.99"
        description="Fresh spinach sautéed with garlic and olive oil."
      />
      
      <MenuItem 
        name="Sweet Potato Fries"
        price="$7.99"
        description="Crispy sweet potato fries with a touch of cinnamon sugar."
      />
    </div>
  </TabsContent>
);

export const SpecialtiesTab = () => (
  <TabsContent value="specialties" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">House Specialties</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Rack of Lamb"
        price="$42.99"
        description="New Zealand lamb rack marinated in rosemary and garlic, grilled to perfection. Served with roasted potatoes and seasonal vegetables."
      />
      
      <MenuItem 
        name="Filet Mignon"
        price="$44.99"
        description="8oz center-cut filet grilled to your preference, topped with herb butter. Served with mashed potatoes and asparagus."
      />
      
      <MenuItem 
        name="Mediterranean Mixed Grill"
        price="$38.99"
        description="A combination of marinated lamb, chicken, and beef kabobs served with saffron rice and grilled vegetables."
      />
      
      <MenuItem 
        name="Osso Buco"
        price="$39.99"
        description="Braised veal shank in rich tomato sauce with vegetables. Served over creamy risotto."
      />
      
      <MenuItem 
        name="Lobster Tail"
        price="$49.99"
        description="Grilled cold water lobster tail with drawn butter, served with rice pilaf and steamed vegetables."
      />
      
      <MenuItem 
        name="Seafood Paella"
        price="$36.99"
        description="Traditional Spanish rice dish with shrimp, mussels, clams, calamari, and saffron."
      />
    </div>
  </TabsContent>
);

export const CombinationPlattersTab = () => (
  <TabsContent value="combination-platters" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Combination Platters</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Surf & Turf"
        price="$45.99"
        description="6oz filet mignon and grilled jumbo shrimp served with garlic mashed potatoes and seasonal vegetables."
      />
      
      <MenuItem 
        name="Land & Sea Combo"
        price="$42.99"
        description="Grilled chicken breast and pan-seared salmon with lemon butter sauce. Served with rice and vegetables."
      />
      
      <MenuItem 
        name="Mediterranean Feast"
        price="$39.99"
        description="Combination of chicken souvlaki, lamb kabob, and falafel served with hummus, rice, and warm pita bread."
      />
      
      <MenuItem 
        name="Meat Lovers Platter"
        price="$44.99"
        description="Lamb chops, beef kabob, and grilled sausage served with roasted potatoes and grilled vegetables."
      />
      
      <MenuItem 
        name="Seafood Combination"
        price="$43.99"
        description="Grilled salmon, jumbo shrimp, and scallops served with rice pilaf and steamed vegetables."
      />
      
      <MenuItem 
        name="Family Style Platter"
        price="$89.99"
        description="Serves 4. A generous selection of chicken, lamb, beef kabobs, rice, salad, hummus, and pita bread."
      />
    </div>
  </TabsContent>
);

export const PoultryTab = () => (
  <TabsContent value="poultry" className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Pomegranate Chicken"
        price="$27.99"
        description="Pan-seared chicken breast infused with lemon pomegranate sauce. Served with garlic potato purée and fresh steamed vegetables for a Mediterranean-inspired dining experience."
      />
      
      <MenuItem 
        name="Chicken Bryan"
        price="$33.99"
        description="Braised chicken breast stuffed with goat cheese, artichoke hearts, and lump crab meat. Topped with basil lemon butter sauce and served over mixed vegetables and basmati rice."
      />
      
      <MenuItem 
        name="Tuscan Chicken"
        price="$27.99"
        description="A chicken breast grilled with olive oil and garlic, topped with sautéed mushrooms, artichoke hearts and tomatoes. Served with garlic mashed potatoes and lemon parsley cream sauce."
      />
      
      <MenuItem 
        name="Chicken & Wild Mushroom Ravioli"
        price="$29.99"
        description="Pan-seared medallions of all natural chicken breast with sautéed asparagus and mushrooms. Tossed with wild mushroom ravioli in a rich cherry cream sauce."
      />
      
      <MenuItem 
        name="Chicken Souvlaki (Shish Kabob)"
        price="$27.99"
        description="Generous pieces of marinated chicken breast in our special Mediterranean sauce. Charbroiled to perfection and served with saffron basmati rice and fresh steamed vegetables."
      />
      
      <MenuItem 
        name="Chicken Gyro Platter"
        price="$23.99"
        description="Sliced seasoned chicken cooked on our rotisserie. Garnished with onions, tomato, kalamata olives and our special cucumber dill sauce. Served with saffron basmati rice and warm pita bread."
      />
      
      <MenuItem 
        name="Shrimp and Chicken Gumbo"
        price="$32.99"
        description="Gulf shrimp, tender chicken, andouille sausage, tomatoes, peppers, onions, okra and garlic simmered in a spicy Cajun style broth with cream, topped with saffron basmati rice."
      />
      
      <MenuItem 
        name="Pineapple Chicken & Shrimp"
        price="$31.99"
        description="Sautéed chicken and jumbo shrimp with snow peas, mushrooms, onions, bell peppers and fresh cilantro in a sweet and spicy Asian-inspired sauce. Served with basmati rice."
      />
      
      <MenuItem 
        name="Sesame Thai Ginger Chicken"
        price="$29.99"
        description="Tender chicken breast sautéed with ginger-garlic paste, snow peas and cilantro. Highlighted with red coconut curry sesame sauce with kaffir lime leaf essence. Served with rice and steamed vegetables."
      />
      
      <MenuItem 
        name="Tandoori"
        price="$23.99 - $29.99"
        description="Marinated in yogurt laced with paprika, cumin, coriander, cilantro, fenugreek, garlic and ginger. Charbroiled and served over sautéed tomatoes, onions, fingerling potatoes and basmati rice."
        options="Chicken: $23.99, Shrimp: $29.99"
      />
      
      <MenuItem 
        name="Cashew Chicken"
        price="$29.99"
        description="A spicy mandarin-style dish with sautéed chicken breast, fresh tomatoes, and snow peas. Tossed in sweet and spicy apricot basil sesame sauce with toasted cashews over basmati rice."
      />
    </div>
  </TabsContent>
);

export const SeafoodTab = () => (
  <TabsContent value="seafood" className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Lobster Cardinal"
        price="Market Price"
        description="Cold water lobster tail, seared scallops and jumbo shrimp scampi prepared to perfection on a bed of steamed vegetables. Served with clarified drawn butter for an elegant seafood experience."
      />
      
      <MenuItem 
        name="Mahi Mahi"
        price="Market Price"
        description="Fresh crab encrusted Mahi-Mahi filet highlighted with a rich lobster-cognac butter sauce. Served over a bed of sautéed spinach and creamy garlic potato purée."
      />
      
      <MenuItem 
        name="Seafood Risotto"
        price="Market Price"
        description="Jumbo shrimp, sea scallops, English peas, and cherry tomatoes in a creamy risotto infused with truffle essence and finished with parmesan cheese."
      />
      
      <MenuItem 
        name="Lobster Risotto"
        price="Market Price"
        description="8 oz wild-caught lobster chunks, sautéed with mushrooms, green peas, and cherry tomatoes in white wine and butter cream sauce. Served over golden saffron risotto."
      />
      
      <MenuItem 
        name="Bacon Wrapped Seared Scallops"
        price="Market Price"
        description="Premium sea scallops wrapped in crispy bacon and seared to perfection. Served with homemade mango chutney on a bed of risotto milanese and steamed vegetables."
      />
      
      <MenuItem 
        name="Shrimp Scampi"
        price="$27.99"
        description="Jumbo prawns sautéed with garlic, white wine, lemon, and fresh herbs in a delicate basil sauce. Served with fresh steamed vegetables and saffron basmati rice."
      />
      
      <MenuItem 
        name="Scallop Scampi"
        price="$36.99"
        description="Sautéed jumbo scallops with cherry tomatoes, fresh spinach and crispy bacon in a garlic basil cream reduction. Served with fresh steamed vegetables and saffron rice."
      />
      
      <MenuItem 
        name="Cioppino"
        price="Market Price"
        description="Traditional Italian seafood stew with pan-seared Alaskan halibut and cold water lobster tail with spinach and fine vegetables in Chardonnay tomatoes saffron reduction."
      />
      
      <MenuItem 
        name="Stuffed Salmon"
        price="$38.99"
        description="8 oz filet of fresh Atlantic salmon stuffed with spinach, roasted garlic, and Mascarpone cheese. Served with Tuscan vegetables and finished with lemon butter cream sauce."
      />
      
      <MenuItem 
        name="Fire Roasted Salmon"
        price="$34.99"
        description="Fresh Atlantic salmon roasted on an open fire to perfection. Served with homemade cucumber dill sauce, saffron basmati rice and fresh steamed vegetables."
      />
      
      <MenuItem 
        name="Lemon Ginger Salmon"
        price="$35.99"
        description="Broiled filet of fresh salmon with sautéed artichokes, roma tomatoes and spinach in a white wine lemon butter sauce. Served with saffron basmati rice and fresh steamed vegetables."
      />
      
      <MenuItem 
        name="Bouillabaisse de Marseille"
        price="$36.99"
        description="Traditional French seafood stew with fresh mussels, clams, scallops, tiger shrimp and seasonal fish simmered in aromatic saffron tomato broth with herbs de Provence."
      />
      
      <MenuItem 
        name="Blackened Halibut"
        price="$37.99"
        description="8 oz. Alaskan halibut blackened in our special blend of Cajun spices, topped with jumbo shrimp. Served over asparagus and vegetables with saffron chardonnay reduction."
      />
      
      <MenuItem 
        name="Walleye"
        price="$35.99"
        description="Fresh filet of walleye broiled to perfection and finished with a delicate chardonnay beurre blanc sauce. Served with fresh steamed vegetables and saffron basmati rice."
      />
      
      <MenuItem 
        name="Thai Glazed Salmon"
        price="$33.99"
        description="Pan-seared filet of Canadian salmon glazed in a Thai-coconut cashew sauce with aromatic spices. Served with seasonal vegetables and saffron basmati rice."
      />
    </div>
  </TabsContent>
);

export const PastaTab = () => (
  <TabsContent value="pasta" className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Mac & Cheese Au Gratin"
        price="$27.99+"
        description="Creamy penne pasta baked with Vermont cheddar, Swiss and parmesan cheeses, topped with crispy bacon and golden breadcrumb crust."
        options="Add chicken: $29.99, Add scallops and shrimp: $32.99, Add vegetables: $28.99"
      />
      
      <MenuItem 
        name="Linguine Pomodoro"
        price="$26.99"
        description="Delicate linguine tossed with crushed sweet San Marzano tomatoes, extra virgin olive oil, fresh garlic and aromatic basil chiffonade."
      />
      
      <MenuItem 
        name="Salmon Piccata"
        price="$28.99"
        description="Fire roasted salmon topped with a delicate caper lemon butter sauce with white wine and fresh herbs. Served over angel hair pasta with parmesan cheese."
      />
      
      <MenuItem 
        name="Chicken Penne"
        price="$26.99"
        description="Grilled chicken breast and sun-dried tomatoes tossed with penne pasta in a light pesto cream sauce with pine nuts and fresh basil."
      />
      
      <MenuItem 
        name="Four Cheese Pasta"
        price="$25.99+"
        description="Penne pasta baked with mozzarella, ricotta, Romano and parmesan cheeses in our signature marinara sauce with fresh basil and oregano."
        options="Chicken: $27.99, Shrimp: $29.99"
      />
      
      <MenuItem 
        name="Fettuccine Alfredo"
        price="$22.99+"
        description="Fresh fettuccine pasta tossed with our rich and creamy house-made alfredo sauce, finished with freshly grated parmesan cheese and cracked black pepper."
        options="With vegetables: $23.99, With chicken: $25.99, With shrimp: $28.99"
      />
      
      <MenuItem 
        name="Tortellini Dé Renaissance"
        price="$29.99"
        description="Sautéed chicken breast, jumbo shrimp, fresh basil, garlic, and bell peppers in a rich parmesan cream sauce, served over tricolor cheese tortellini."
      />
      
      <MenuItem 
        name="Café Shrimp Pasta"
        price="$27.99"
        description="Sautéed jumbo shrimp, fresh mushrooms and cherry tomatoes tossed with linguine in a delicious basil garlic-lemon cream sauce with white wine."
      />
      
      <MenuItem 
        name="Cappellini Dé Renaissance"
        price="$32.99"
        description="Jumbo shrimp, calamari, sea scallops and mussels with your choice of vodka cream, tomato cream, garlic olive oil or marinara sauce over angel hair pasta."
      />
      
      <MenuItem 
        name="Chicken Piccata"
        price="$27.99"
        description="Sautéed chicken breast and mushrooms served on a bed of farfalle pasta. Drizzled with our light lemon caper sauce with white wine and fresh herbs."
      />
      
      <MenuItem 
        name="Cajun Jambalaya Pasta"
        price="$28.99"
        description="Sautéed chicken breast and jumbo shrimp with onions, tomatoes and bell peppers in a very spicy Cajun sauce with andouille sausage over linguine pasta."
      />
      
      <MenuItem 
        name="Steak & Shrimp Curry Linguine"
        price="$32.99"
        description="Sautéed Gulf shrimp with tender Angus sirloin and seasonal vegetables in a light herb curry emulsion with coconut milk over linguine pasta."
      />
    </div>
  </TabsContent>
);

export const PizzaTab = () => (
  <TabsContent value="pizza" className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Stromboli"
        price="$28.99"
        description="Our signature double crust specialty stuffed with seasoned hamburger, Italian sausage, pepperoni, mushrooms, black olives and onions. Served with our house marinara sauce."
      />
      
      <MenuItem 
        name="Meat Lovers"
        price="$27.99"
        description="A hearty double-crust specialty stuffed with seasoned beef, Italian sausage, pepperoni, mozzarella cheese and our signature marinara sauce."
      />
      
      <MenuItem 
        name="Stuffed Chicken Alfredo"
        price="$29.99"
        description="Café double-crust specialty stuffed with mozzarella cheese, blackened chicken breast and our rich house-made alfredo sauce with herbs."
      />
      
      <MenuItem 
        name="Stuffed Spinach & Chicken"
        price="$29.99"
        description="Our double-crust specialty made with fresh spinach, roasted garlic, mozzarella cheese, seasoned chicken and creamy alfredo sauce with Italian herbs."
      />
      
      <MenuItem 
        name="Margherita"
        price="$24.99"
        description="Classic Italian pizza made with fresh mozzarella, ripe tomatoes, extra virgin olive oil and fresh basil leaves on our wood-fired crust."
      />
      
      <MenuItem 
        name="Chicken & Shrimp"
        price="$28.99"
        description="This specialty pizza is made with fire roasted chicken, sun-dried tomatoes, jumbo shrimp, fresh herbs and our creamy alfredo sauce on artisan crust."
      />
      
      <MenuItem 
        name="Pizza Mia"
        price="$25.99"
        description="Create your own masterpiece! Choose up to four toppings: ground beef, pepperoni, sausage, ham, Canadian bacon, green olives, black olives, onions, mushrooms or green peppers."
      />
      
      <MenuItem 
        name="Moroccan"
        price="$27.99"
        description="Exotic pizza with mozzarella cheese, fresh tomatoes, Moroccan spiced chicken seasoned with coriander, cumin and chili spices on our signature crust."
      />
      
      <MenuItem 
        name="Mediterranean"
        price="$28.99"
        description="Our authentic Mediterranean pizza made with house white sauce, seasoned beef and lamb gyro meat, feta cheese, kalamata olives and fresh herbs."
      />
    </div>
  </TabsContent>
);

export const KidsTab = () => (
  <TabsContent value="kids" className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Mac & Cheese"
        price="$11.99"
        description="Creamy macaroni and cheese made with real cheddar cheese, perfectly sized for our young guests. Served with fresh fruit or vegetables."
      />
      
      <MenuItem 
        name="Kid's Pasta"
        price="$11.99"
        description="Fresh linguine pasta served with our house marinara sauce and a sprinkle of parmesan cheese. A classic favorite for children."
      />
      
      <MenuItem 
        name="Kids Pizza"
        price="$11.99"
        description="Personal-sized pizza made fresh with our signature dough. Choose from classic cheese or pepperoni with real mozzarella cheese."
      />
    </div>
  </TabsContent>
);

export const GlutenFreeTab = () => (
  <TabsContent value="gluten-free" className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Shrimp Martini"
        price="Market Price"
        description="Succulent cold water jumbo prawns served chilled on a bed of ice with our homemade tangy cocktail sauce and fresh lemon wedges."
      />
      
      <MenuItem 
        name="Mussels Marinara"
        price="$25.99"
        description="Fresh mussels prepared in our house red marinara sauce with a touch of fresh garlic and herbs. Available mild or spicy to your preference."
      />
      
      <MenuItem 
        name="Chicken Torino"
        price="$19.99"
        description="Grilled chicken breast with capers in a white wine sauce topped with melted mozzarella cheese. Served with vegetables and rice."
      />
      
      <MenuItem 
        name="Calamari"
        price="$18.99"
        description="Fresh calamari rings sautéed with a touch of fresh garlic, lemon juice and extra virgin olive oil. Served with our house lemon pomegranate sauce."
      />
      
      <MenuItem 
        name="Gluten Free Penne Vodka Pizza"
        price="$26.99+"
        description="Made with our gluten-free crust and topped with our special vodka cream sauce, gluten-free penne pasta and skim mozzarella cheese."
        options="With Chicken $27.99; With Shrimp $29.99"
      />
      
      <MenuItem 
        name="Gluten Free Penne Creamy Pesto"
        price="$24.99+"
        description="Gluten-free penne pasta tossed with sun-dried tomatoes and our house alfredo pesto sauce made with fresh basil and pine nuts."
        options="Add vegetables $25.99; Add chicken $26.99; Add shrimp $29.99"
      />
      
      <MenuItem 
        name="Seafood Platter"
        price="$39.99"
        description="A delightful combination of mussels, scallops and jumbo shrimp delicately sautéed in garlic lemon sauce and olive oil. Served in our house red tomato sauce."
      />
      
      <MenuItem 
        name="Lemon Ginger Salmon"
        price="$35.99"
        description="Grilled filet of fresh Atlantic salmon with sautéed artichokes, roma tomatoes, and spinach in a white wine lemon butter sauce. Served with fresh steamed vegetables."
      />
      
      <MenuItem 
        name="Vegetarian Curry"
        price="$22.99"
        description="Special blend of our fresh seasonal vegetables cooked with aromatic spices and herbs in coconut milk. Served with basmati rice. Available mild or hot."
      />
      
      <MenuItem 
        name="Gluten Free Penne Vodka"
        price="$23.99+"
        description="Imported gluten-free penne tossed with our creamy vodka sauce and fresh seasonal vegetables with herbs and parmesan cheese."
        options="With Chicken $25.99; With Shrimp $29.99"
      />
      
      <MenuItem 
        name="Gluten Free Pizza Mia"
        price="$26.99"
        description="10 inch gluten-free crust with skim mozzarella cheese and your choice of favorite toppings, baked in our wood stone oven to perfection."
      />
    </div>
  </TabsContent>
);

export const VegetarianTab = () => (
  <TabsContent value="vegetarian" className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Stuffed Green Pepper"
        price="$19.99"
        description="A tender sweet green pepper stuffed with seasoned basmati rice and fresh vegetables. Baked in our delicately spiced Mediterranean tomato sauce with herbs."
      />
      
      <MenuItem 
        name="Vegetarian Tagine"
        price="$24.99"
        description="A fresh combination of seasonal vegetables with onion, tomato, cumin, green olives and ginger. Finished with a saffron harissa sauce reduction over Moroccan couscous or basmati rice."
      />
      
      <MenuItem 
        name="Mediterranean Combo Platter"
        price="$17.99"
        description="Traditional Mediterranean appetizers including hummus (purée of chickpeas, lemon, tahini, garlic, and herbs) and grape leaf dolmas filled with seasoned rice and herbs."
      />
      
      <MenuItem 
        name="Thai Green Curry"
        price="$23.99"
        description="Aromatic Thai curry with bell peppers, green peas and bamboo shoots in coconut milk with lemongrass and kaffir lime. Served with sweet basil leaves and basmati rice."
      />
      
      <MenuItem 
        name="Vegetarian Curry"
        price="$22.99"
        description="Special blend of our fresh seasonal vegetables cooked with traditional Indian spices and herbs in coconut milk. Served with basmati rice. Available mild or hot."
      />
      
      <MenuItem 
        name="Grilled Mushrooms"
        price="$17.99"
        description="Marinated portobello and button mushrooms charbroiled to perfection in our signature lemon pomegranate sauce with herbs and olive oil."
      />
    </div>
  </TabsContent>
);
