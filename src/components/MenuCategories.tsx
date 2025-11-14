import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface MenuItemProps {
  name: string;
  price?: string;
  description?: string;
  options?: string;
}

const MenuItem = ({ name, price, description, options }: MenuItemProps) => (
  <div className="p-4 border border-cafe-gold/30 rounded-lg hover:shadow-lg transition-all bg-white/80 hover:bg-white hover:-translate-y-1 duration-300">
    <div className="flex justify-between items-baseline mb-1.5">
      <h2 className="font-playfair text-lg font-bold text-cafe-maroon">{name}</h2>
      {price && <span className="text-black font-bold ml-2">{price}</span>}
    </div>
    <Separator className="w-full h-px bg-cafe-tan/30 my-1.5" />
    {description && <p className="text-base text-black leading-relaxed">{description}</p>}
    {options && <p className="text-base text-black mt-1 italic">{options}</p>}
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
        name="Smoked Salmon"
        price="$17.99"
        description="Smoked Atlantic salmon with mixed greens, capers, chives, extra virgin olive oil and ages balsamic reduction."
      />
      
      <MenuItem 
        name="Lobstair Tail"
        price="MP"
        description="Butter peached cold water lobster tail."
      />
      
      <MenuItem 
        name="Mediterranean Combo Platter"
        price="$16.99"
        description="HUMMUS- Puree of chick-peas, lemon, tahini, garlic, cayenne and herbs.
        GRAPE LEAF DOLMAS - Filled with rice and herbs."
      />
      
      <MenuItem 
        name="Calamari"
        price="$17.99"
        description="Lightly battered steaks fries to a crisp, golden brown. Served with our house marinara sauce."
      />
      
      <MenuItem 
        name="Lamb Lollipops"
        price="$15.99"
        description="Ginger herb crusted mini New Zealand lamb served with pountine salad."
      />

      <MenuItem 
        name="Flaming Saganaki Opa!!!"
        price="$15.99"
        description="Imported Greek cheese sauteed in olive oil and garnished with lemon juice and mint herb. Served with our fresh baked bread."
      />

      <MenuItem 
        name="Escargot de Bourgogne"
        price="$17.99"
        description="Traditional imported French escargots in garlic herb butter. Served with crispy brioche."
      />

      <MenuItem 
        name="Caviar"
        price="MP"
        description="Caspian Sea golden Osetra caviar One oz. Served with condiments."
      />

      <MenuItem 
        name="Tzatziki"
        price="$13.99"
        description="A refreshing cucumber yogurt dill sauce, garlic and olive oil. Served with our specialty chips."
      />

      <MenuItem 
        name="Seafood Platter"
        price="MP"
        description="Party Platter Zise- Calamari, shrimp, scallops, crabcakes and mussels."
      />

      <MenuItem 
        name="Curried Shrimp"
        price="$21.99"
        description="Marinated Jumbo shrimp served over a bed of vegetables in mild curry cream sauce."
      />

      <MenuItem 
        name="Stuffed Shrimp"
        price="$17.99"
        description="Jumbo shrimp stuffed with crab, mascapone cheese and herbs. Served with lemon pomegrante reduction."
      />

      <MenuItem 
        name="Shrimp Martini"
        price="$22.99"
        description="Succulent cold water jumbo praws on a bed of ice. Served with tangy cocktail sauce."
      />

      <MenuItem 
        name="Mussels Marinara"
        price="MP"
        description="Mussels prepared in our house red sauce with a tauch of fresh garlic. Served mild or spicy."
      />

      <MenuItem 
        name="Grilled Mushrooms"
        price="$17.99"
        description="Marinated charboiled mushrooms in lemon pomegranate sauce."
      />
    </div>
  </TabsContent>
);

export const SoupsSaladsTab = () => (
  <TabsContent value="soups-salads" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Soups & Salads</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="House Soup"
        price="$6.99"
        description="Our specialty vegetable barley soup."
      />
      
      <MenuItem 
        name="Soup du Jour"
        price="$8.99"
        description="Chef specialty soup."
        options="Please ask your server for details"
      />
      
      <MenuItem 
        name="French Onion"
        price="$9.99"
        description="Made from scratch. A blend of fine onions, sweet and flavorful, topped with melted provolone cheese floating on croutons."
      />
      
      <MenuItem 
        name="Soup & Salad"
        price="$13.99"
        description="A bowl of our house soup and a fresh mixed green salad."
      />
      
      <MenuItem 
        name="Mediterranean Salad"
        price="$14.99"
        description="Hearts of romaine lettuce topped with feta cheese, tomatoes, cucumbers and kalamata olives. Tossed with lemon and olive oil dressing."
        options="Add chicken or beef gyro meal: $3.99"
      />
      
      <MenuItem 
        name="Classic Caesar Salad"
        price="$14.99"
        description="Fresh romaine lettuce, parmesan cheese and croutons tossed with our own garlic caesar dressing."
        options="Add chicken:$3.99 Add shrimp: $4.00"
      />
      
      <MenuItem 
        name="Grilled Salmon Salad"
        price="$21.99"
        description="Layers of fire roasted salmon served on a nest of continental salad leaves. Topped with walnuts and tossed with our fresh lemon and dill vinaigrette"
      />

       <MenuItem 
        name="House Salad"
        price="$5.99"
      />
    </div>
  </TabsContent>
);

export const SidesTab = () => (
  <TabsContent value="sides" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Sides</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Grilled Asparagus"
        price="$6.99"
      />
      
      <MenuItem 
        name="Saffron Basmati Rice"
        price="$7.99"
      />
      
      <MenuItem 
        name="Mac & Cheese with Bacon"
        price="$8.99"
      />
      
      <MenuItem 
        name="Cheesy Risotto"
        price="$8.99"
      />
      
      <MenuItem 
        name="Grilles Salmon Vegetables"
        price="$7.99"
      />
      
      <MenuItem 
        name="Sautéed Wild Mushrooms"
        price="$9.99"
      />
      
      <MenuItem 
        name="Parisienne Potato"
        price="$6.99"
      />

       <MenuItem 
        name="Shrimp Scampi"
        price="$10.99"
      />

       <MenuItem 
        name="Lobster Tail"
        price="MP"
      />
    </div>
  </TabsContent>
);

export const SpecialtiesTab = () => (
  <TabsContent value="specialties" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">House Specialties</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Moussaka"
        price="$26.99"
        description="One of the most famous Mediterranean dishes.
        Layers of eggplant, seasoned ground beef and potato crowned with our special cream sauce. Sprinkled with parmesan and baked in our Wood Stone oven."
      />
      
      <MenuItem 
        name="Souvlaki (Shish Kabab)"
        description="Thick chunks of marinated meat seasoned and broiled over an open fire.
                      Served with saffron basmati rice and fresh steamed vegetables."
        options= "Beef tenderloin: $25.99 Lamb: $27.99"
      />
      
      <MenuItem 
        name="Pappersteak Bourguignon"
        price="$29.99"
        description="Marinated beef tenderloin chunks in red wine & herbs. Sautéed & braised with mushrooms, peppers & shallots until tender. Served with our garlic potato purée."
      />
      
      <MenuItem 
        name="Beef and Lamb Gyro Platter"
        price="$23.99"
        description="Sliced seasoned beef and lamb cooked on our rotisserie. Garnished with onions, tomato, kalamata olives and our special cucumber dill sauce. Served with saffron basmati rice and pita bread."
      />
      
      <MenuItem 
        name="Paella Valenciana"
        price="$29.99"
        description="A popular Spanish dish with sautéed chicken, chorizo sausage and a medley of vegetables. Overflows with shrimp, mussels and scallops on a bed of saffron basmati rice."
      />
      
      <MenuItem 
        name="Osso Bucco"
        price="MP"
        description="Slowly roasted veal shank braised with marsala wine and an array of vegetables. Served over risotto milanese and gremolata."
      />

      <MenuItem 
        name="New Zealand Rack of Lamb"
        price="MP"
        description="Ginger herb and roasted garlic crusted rack of lamb with rosemary-mint vegetables and infused with shiraz demi glaze. Served with sweet potato puree."
      />

      <MenuItem 
        name="Lamb Shank"
        price="MP"
        description="A whole tender lamb shank braised with red wine and garlic. Served with saffron dill rice."
      />

      <MenuItem 
        name="Pork Tomahawk"
        price="MP"
        description="Grilled 16 oz pork tomahawk served with potato purée, vegetables and maple bourbon reductio."
      />

       <MenuItem 
        name="Moroccan Lamb"
        price="MP"
        description="Cumin and roasted garlic crusted rack of lamb cooked in port reduction served with mushroom risotto."
      />

      <MenuItem 
        name="Moroccan Tagine"
        description="A popular Casablanca style stew of selected meat braised with onions, tomatoes, cumin, green olives and ginger.
        Finished with a saffron harisa sauce reduction over your choice of Moroccan couscous or basmati rice. Garnished with preserved lemons."
        options="Beef: $28.99 Lamb: $29.99 Chicken: $27.99 Shrimp: $31.99"
      />

       <MenuItem 
        name="Curry"
        description="Special blend of your favorite meat cooked with spices and herbs. Served with basmati rice. Please specify mild or hot."
         options="Vegetarian: $23.99 Chicken: $25.99 Beef: $26.99 Lamb: $27.99 Shrimp: $29.99"
      />

      <MenuItem 
        name="Thai Green Curry"
        description="Choice of meat or vegetarian with bell peppers, green peas and bamboo shoots in coconut milk. Served with sweet basil leaves and basmati rice."
        options="Vegetarian: $23.99 Chicken: $25.99 Beef: $26.99 Shrimp: $29.99 Lamb: $27.99"
      />

      <MenuItem 
        name="New York Steak"
        price="MP"
        description="A thick, center-cut, aged Black Angus steak charbroiled until you say when. Boldly seasoned with fresh cracked pepper and topped with Maitre’d butter.
        Served with vegetable and parisienne potatoes."
      />

      <MenuItem 
        name="Filet Mignon"
        price="MP"
        description="This pepper-crusted, 8 oz. thick delicious cut from the heart of tenderloin is cooked to your liking and topped with wild mushroom demi. Served with vegetable and parisienne potatoes."
      />

     <MenuItem 
        name="Prome Rib"
        price="MP"
        description="Our choice of aged Black Angus prime rib is hand-rubbed with the Chef’s seasoning then slowly roasted to perfection. Available Friday and Saturday while it lasts."
      /> 

        <MenuItem 
        name="Bone-in Ribeye"
        price="MP"
        description="Carefully aged 20 oz Bone-in Ribeye charbroiled to your liking. Served with scalloped potatoes, vegetables and red wine Au jus."
      /> 

      <MenuItem 
        name="Stuffed Pork Tenderloin"
        price="MP"
        description="Center cut tenderloin stuffed with apricots, raisins, baby spinach mascarpone cheese and fresh garlic. Served with sweet potato purée and grilled asparagus."
      /> 
    </div>
  </TabsContent>
);

export const CombinationPlattersTab = () => (
  <TabsContent value="combination-platters" className="space-y-6">
    <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Combination Platters</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Seafood Royal"
        price="MP"
        description="Broiled pistachio encrusted Alaskan Bay halibut accompanied with crabmeat, seared scallops and jumbo shrimp.
        Served over a wild mushroom medley and highlighted with a lemon butter cream reduction."
      />
      
      <MenuItem 
        name="Steak and Lobster"
        price="MP"
        description="Thick center cut aged black angus charbroiled to your liking and cold water lobster tail. Served with steamed vegetables and and parisienne potatoes."
      />
      
      <MenuItem 
        name="The Greek Sampler"
        price="$29.99"
        description="Combination of beef and lamb, chicken gyro and moussaka, served with basmati rice and fresh vegetables."
      />
      
      <MenuItem 
        name="Scallops, Shrimp and Chicken"
        price="MP"
        description="Grilled sea scallops, jumbo shrimp and tender chunks of marinated chicken breast. Served with lobster butter cream sauce and steamed vegetables."
      />
      
      <MenuItem 
        name="Seafood Trio"
        price="MP"
        description="8 oz. Maine lobster tail stuffed with blue shrimp, smoked bacon, and lump crab. Served with roasted asparagus and lobster mac & cheese."
      />
      
      <MenuItem 
        name="Chateaubriand Cardinal Filet & Lobster"
        price="MP"
        description="Slow roasted black angus tenderloin accompanied by a butter poached cold water lobster tail. Proposed with truffle-port demi glaze. Served with seasonal vegetables and hoice of potato."
      />

      <MenuItem 
        name="Fire Roasted Platter"
        price="$29.99"
        description="Marinated lamb, beef tenderloin and chicken breast. Fire roasted and served with fresh seasonal vegetables and basmati saffron rice."
      />

 <MenuItem 
        name="Create Your Own Combo"
        description="All orders come with steamed vegetables, basmati rice and our house vegetable barley soup.
   Marinated lamb & beef gyro Marinated chicken gyro Marinated beef souvlaki Marinated lamb souvlaki Marinated chicken souvlaki Garlic shrimp scampi Linguine alfredo Fire roasted salmon."
   options="Choose any two for $28.99 or any three for $33.99"

      />     
    </div>
  </TabsContent>
);

export const PoultryTab = () => (
  <TabsContent value="poultry" className="space-y-6">
     <h2 className="font-playfair text-3xl font-bold text-cafe-maroon mb-4">Poultry</h2>
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
        name="Curry"
        price="$23.99 - $26.99 - $29.99"
        description="A special blend of your favorite meat cooked with spices and herbs. Served with basmati rice. Please specify mild or hot spices."
        options=" Vegetarian: $23.99, Chicken: $26.99, Shrimp: $29.99"
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
        price="MP"
        description="Cold water lobster tail, seared scallops and jumbo shrimp scampi prepared to perfection on a bed of steamed vegetables. Served with clarified drawn butter for an elegant seafood experience."
      />
      
      <MenuItem 
        name="Mahi Mahi"
        price="MP"
        description="Fresh crab encrusted Mahi-Mahi filet highlighted with a rich lobster-cognac butter sauce. Served over a bed of sautéed spinach and creamy garlic potato purée."
      />
      
      <MenuItem 
        name="Seafood Risotto"
        price="MP"
        description="Jumbo shrimp, sea scallops, English peas, and cherry tomatoes in a creamy risotto infused with truffle essence."
      />
      
      <MenuItem 
        name="Lobster Risotto"
        price="MP"
        description="8 oz wild-caught lobster chunks, sautéed with mushrooms, green peas, and cherry tomatoes in white wine and butter cream sauce. Served over golden saffron risotto."
      />
      
      <MenuItem 
        name="Bacon Wrapped Seared Scallops"
        price="MP"
        description="Premium sea scallops wrapped in crispy bacon and seared to perfection. Served with homemade mango chutney on a bed of risotto milanese and steamed vegetables."
      />
      
      <MenuItem 
        name="Shrimp Scampi"
        price="$27.99"
        description="Jumbo prawns sautéed with garlic basil sauce. Served with fresh steamed vegetables and saffron basmati rice."
      />
      
      <MenuItem 
        name="Scallop Scampi"
        price="$36.99"
        description="Sautéed jumbo scallops with cherry tomatoes, fresh spinach and crispy bacon in a garlic basil cream reduction. Served with fresh steamed vegetables and saffron rice."
      />
      
      <MenuItem 
        name="Cioppino"
        price="MP"
        description="Pan-seared Alaskan halibut and cold water lobster tail with spinach and fine vegetables in Chardonnay tomatoes saffron reduction."
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
        description="Traditional French seafood stew with fresh mussels, clams, scallops, tiger shrimp and seasonal fish simmered in aromatic saffron tomato broth broth."
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
        description="Pan-seared filet of Canadian salmon glazed in a Thai-coconut cashew sauce. Served with seasonal vegetables and saffron basmati rice."
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
        description="Creamy penne pasta baked with Vermont cheddar, Swiss and parmesan cheeses, topped with crispy bacon."
        options="Add chicken: $29.99, Add scallops and shrimp: $32.99, Add vegetables: $28.99"
      />
      
      <MenuItem 
        name="Linguine Pomodoro"
        price="$26.99"
        description="Delicate linguine tossed with crushed sweet tomatoes, olive oil, fresh garlic and aromatic basil chiffonade."
      />
      
      <MenuItem 
        name="Salmon Piccata"
        price="$28.99"
        description="Fire roasted salmon topped with a delicate caper lemon butter sauce. Served over angel hair pasta."
      />
      
      <MenuItem 
        name="Chicken Penne"
        price="$26.99"
        description="Grilled chicken breast and sun-dried tomatoes tossed with penne pasta in a light pesto cream sauce."
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
        description="Fresh fettuccine pasta tossed with our rich and creamy house-made alfredo sauce, finished with freshly grated parmesan cheese."
        options="With vegetables: $23.99, With chicken: $25.99, With shrimp: $28.99"
      />
      
      <MenuItem 
        name="Tortellini Dé Renaissance"
        price="$29.99"
        description="Sautéed chicken breast, shrimp, fresh basil, garlic, and bell peppers in a rich parmesan cream sauce, served over tricolor cheese tortellini."
      />
      
      <MenuItem 
        name="Café Shrimp Pasta"
        price="$27.99"
        description="Sautéed jumbo shrimp, fresh mushrooms and cherry tomatoes tossed with linguine in a delicious basil garlic-lemon cream sauce."
      />
      
      <MenuItem 
        name="Cappellini Dé Renaissance"
        price="$32.99"
        description="shrimp, calamari, sea scallops and mussels with your choice of vodka cream, tomato cream, garlic olive oil or marinara sauce."
      />
      
      <MenuItem 
        name="Chicken Piccata"
        price="$27.99"
        description="Sautéed chicken breast and mushrooms served on a bed of farfalle pasta. Drizzled with our light lemon caper sauce."
      />
      
      <MenuItem 
        name="Cajun Jambalaya Pasta"
        price="$28.99"
        description="Sautéed chicken breast and jumbo shrimp with onions, tomatoes and bell peppers in a very spicy Cajun sauce over linguine pasta."
      />
      
      <MenuItem 
        name="Steak & Shrimp Curry Linguine"
        price="$32.99"
        description="Sautéed Gulf shrimp with tender Angus sirloin and seasonal vegetables in a light herb curry emulsion over linguine pasta."
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
        description="Our signature double crust specialty stuffed with seasoned hamburger, Italian sausage, pepperoni, mushrooms, olives and onions. Served with our house marinara sauce."
      />
      
      <MenuItem 
        name="Meat Lovers"
        price="$27.99"
        description="A double-crust specialty stuffed with seasoned beef, Italian sausage, pepperoni, mozzarella cheese and our signature marinara sauce."
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
        description="Classic Italian pizza made with fresh mozzarella, ripe tomatoes, olive oil and fresh basil."
      />
      
      <MenuItem 
        name="Chicken & Shrimp"
        price="$28.99"
        description="This specialty pizza is made with fire roasted chicken, sun-dried tomatoes, shrimp, fresh herbs and  alfredo sauce."
      />
      
      <MenuItem 
        name="Pizza Mia"
        price="$25.99"
        description="Create your own masterpiece! Choose up to four toppings: ground beef, pepperoni, sausage, ham, Canadian bacon, green olives, black olives, onions, mushrooms or green peppers."
      />
      
      <MenuItem 
        name="Moroccan"
        price="$27.99"
        description="Mozzarella cheese, fresh tomatoes, Moroccan spiced chicken seasoned with coriander, cumin and chili seasoning."
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
        description="Choose from classic cheese or pepperoni."
      />
    </div>
  </TabsContent>
);

export const GlutenFreeTab = () => (
  <TabsContent value="gluten-free" className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MenuItem 
        name="Shrimp Martini"
        price="MP"
        description="Succulent cold water jumbo prawns served chilled on a bed of ice with our homemade tangy cocktail sauce."
      />
      
      <MenuItem 
        name="Mussels Marinara"
        price="$25.99"
        description="Fresh mussels prepared in our house red sauce with a touch of fresh garlic. Available mild or spicy to your preference."
      />
      
      <MenuItem 
        name="Chicken Torino"
        price="$19.99"
        description="Grilled chicken breast with capers in a white wine sauce topped with  mozzarella cheese."
      />
      
      <MenuItem 
        name="Calamari"
        price="$18.99"
        description="Fresh calamari rings sautéed with a touch of fresh garlic, lemon juice and olive oil. Served with our house lemon pomegranate sauce."
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
        description="Gluten-free penne pasta tossed with sun-dried tomatoes and our house alfredo pesto sauce."
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
        description="Special blend of our fresh seasonal vegetables cooked with aromatic spices and herbs. Served with basmati rice. Available mild or hot."
      />
      
      <MenuItem 
        name="Gluten Free Penne Vodka"
        price="$23.99+"
        description="Imported gluten-free penne tossed with our creamy vodka sauce and fresh seasonal vegetables."
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
        description="A tender sweet green pepper stuffed with basmati rice and fresh vegetables. Baked in our delicately spiced Mediterranean tomato sauce."
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
        description="Bell peppers, green peas and bamboo shoots in coconut milk. Served with sweet basil leaves and basmati rice."
      />
      
      <MenuItem 
        name="Vegetarian Curry"
        price="$22.99"
        description="Special blend of our fresh seasonal vegetables cooked with traditional Indian spices and herbs. Served with basmati rice. Available mild or hot."
      />
      
      <MenuItem 
        name="Grilled Mushrooms"
        price="$17.99"
        description="Marinated charbroiled  mushrooms lemon pomegranate sauce."
      />
    </div>
  </TabsContent>
);
