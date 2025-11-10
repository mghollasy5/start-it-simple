
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const menuCategories = [
  {
    id: "specialties",
    title: "Chef's Specialties",
    dishes: [
      {
        name: "Moussaka",
        description: "Layers of eggplant, seasoned ground beef and potato with cream sauce",
        price: "$26.99"
      },
      {
        name: "Paella Valenciana",
        description: "Spanish dish with chicken, chorizo, shrimp, mussels and scallops",
        price: "$29.99"
      },
      {
        name: "Moroccan Tagine",
        description: "Casablanca style stew with your choice of protein and saffron harisa sauce",
        price: "from $27.99"
      }
    ]
  },
  {
    id: "seafood",
    title: "Seafood Selection",
    dishes: [
      {
        name: "Stuffed Salmon",
        description: "Fresh Atlantic salmon stuffed with spinach, garlic and mascarpone cheese",
        price: "$38.99"
      },
      {
        name: "Bouillabaise de Marseille",
        description: "Traditional French seafood stew with mussels, clams, scallops and shrimp",
        price: "$36.99"
      },
      {
        name: "Blackened Halibut",
        description: "Alaskan halibut with Cajun spices, topped with jumbo shrimp",
        price: "$37.99"
      }
    ]
  },
  {
    id: "pastas",
    title: "Signature Pastas",
    dishes: [
      {
        name: "Tortellini Dé Renaissance",
        description: "Tricolor cheese tortellini with chicken, shrimp, and parmesan cream sauce",
        price: "$29.99"
      },
      {
        name: "Cappelini Dé Renaissance",
        description: "Angel hair with shrimp, calamari, scallops and mussels in your choice of sauce",
        price: "$32.99"
      },
      {
        name: "Cajun Jambalaya Pasta",
        description: "Chicken, shrimp, onions, tomato and peppers in spicy cajun sauce",
        price: "$28.99"
      }
    ]
  }
];

const MenuPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-cafe-maroon mb-3">
            Savor Our Signature Dishes
          </h2>
          <Separator className="w-24 h-1 bg-cafe-gold mx-auto mb-6" />
          <p className="text-cafe-maroon/80 max-w-2xl mx-auto">
            Our menu celebrates the diverse flavors of Mediterranean and European cuisine, crafted with
            fresh, locally-sourced ingredients and time-honored techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-cafe-maroon mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.dishes.map((dish, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-playfair text-lg font-medium">{dish.name}</h4>
                        <span className="text-cafe-gold font-semibold">{dish.price}</span>
                      </div>
                      <p className="text-sm text-cafe-maroon/70">{dish.description}</p>
                      {index < category.dishes.length - 1 && (
                        <Separator className="my-4 bg-cafe-tan/30" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cafe-gold hover:bg-cafe-gold/10 text-cafe-maroon"
            asChild
          >
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
