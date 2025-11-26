
export interface MenuPage {
  id: number;
  title: string;
  image: string;
}

export const menuPages: MenuPage[] = [
  {
    id: 1,
    title: "Appetizers, Soups & Salads",
    image: "/lovable-uploads/menu-page-1-appetizers.jpg"
  },
  {
    id: 2,
    title: "Specialties & Combination Platters",
    image: "/lovable-uploads/menu-page-2-specialties.jpg"
  },
  {
    id: 3,
    title: "Seafood & Poultry",
    image: "/lovable-uploads/menu-page-3-seafood-poultry.jpg"
  },
  {
    id: 4,
    title: "Pasta, Pizza & Kids Corner",
    image: "/lovable-uploads/menu-page-4-pasta-pizza.jpg"
  },
  {
    id: 5,
    title: "Gluten-Free & Vegetarian",
    image: "/lovable-uploads/menu-page-5-gluten-free.jpg"
  }
];
