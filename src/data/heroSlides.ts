
export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  position: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/lovable-uploads/715245df-faac-4eab-824a-7bfa206955c7.png",
    title: "Welcome to Café Renaissance",
    subtitle: "Where European elegance meets Mediterranean warmth in our stylishly designed space",
    cta: "Explore Our Menu",
    position: "center"
  },
  {
    id: 2,
    image: "/lovable-uploads/26b592a0-7fde-4aa3-8121-5a42262516ae.png",
    title: "Exquisite Seafood",
    subtitle: "Savor our chef's masterfully crafted fish dishes with perfect wine pairings",
    cta: "Explore Our Menu",
    position: "center"
  },
  {
    id: 3,
    image: "/lovable-uploads/4b98c1be-e053-45ce-a34b-f888e051127e.png",
    title: "Premium Aged Steaks",
    subtitle: "USDA Prime cuts prepared to perfection with herb-infused compound butter",
    cta: "Make a Reservation",
    position: "center"
  },
  {
    id: 4,
    image: "/lovable-uploads/99622c9b-dd06-4c21-a61c-7843df8f1ae8.png",
    title: "Signature Entrées",
    subtitle: "Experience our acclaimed chef's special preparations with seasonal ingredients",
    cta: "View Menu",
    position: "center"
  },
  {
    id: 5,
    image: "/lovable-uploads/f8d6f5bd-9207-49ee-921e-1f3f4aad6822.png",
    title: "Curated Spirits Collection",
    subtitle: "Discover our extensive selection of rare bourbons and fine spirits",
    cta: "Explore Our Bar",
    position: "center"
  },
  {
    id: 6,
    image: "/lovable-uploads/80ee2b4f-ded2-4ae4-b3a4-e2a9fe5137c9.png",
    title: "Romantic Dining Experience",
    subtitle: "The perfect setting for anniversaries, proposals and special celebrations",
    cta: "Reserve Your Table",
    position: "center"
  },
  {
    id: 7,
    image: "/lovable-uploads/cef4a891-28ec-453e-be5f-90d6a946478f.png",
    title: "Decadent Desserts",
    subtitle: "End your evening with our award-winning house-made dessert specialties",
    cta: "View Dessert Menu",
    position: "center"
  }
];
