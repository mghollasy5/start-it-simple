
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation to ensure scroll to top
  const handleNavigation = (href: string) => {
    // Close mobile menu if open
    setIsOpen(false);
    
    // If we're already on the target page, just scroll to top
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to page and it will automatically scroll to top
      navigate(href);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Drinks", href: "/drinks" },
    { name: "New Year's Eve", href: "/new-years-eve" },
    { name: "Reservations", href: "/reservations" },
    { name: "Reviews", href: "/reviews" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "Employment", href: "/employment" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6",
        isScrolled
          ? "bg-cafe-logoRed shadow-md" // Removed backdrop-blur-sm and opacity
          : "bg-cafe-logoRed"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <button 
            onClick={() => handleNavigation("/")} 
            className="flex items-center focus:outline-none"
          >
            <img
              src="/lovable-uploads/3fce0b69-a8cb-41f9-a5b4-c72227c165d0.png"
              alt="Cafe Renaissance Logo"
              className="h-20 w-auto"
            />
          </button>
        </div>

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 px-4">
          <div className="flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className={cn(
                  "text-white hover:text-cafe-gold transition-colors text-lg font-playfair font-medium tracking-wide uppercase hover:scale-105 transform transition-transform px-2 py-1 whitespace-nowrap",
                  location.pathname === link.href && "text-cafe-gold font-semibold"
                )}
              >
                {link.name}
              </button>
            ))}
          </div>
        </nav>

        {/* Right Logo (mirror image) */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <img
            src="/lovable-uploads/7aec5618-f91e-4874-86da-491e1fced835.png"
            alt="Cafe Renaissance Mirror Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cafe-logoRed shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className={cn(
                  "text-white hover:text-cafe-gold py-2 transition-colors text-left text-lg font-playfair font-medium tracking-wide uppercase px-2",
                  location.pathname === link.href && "text-cafe-gold font-semibold"
                )}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
