import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cafe-logoRed text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header section with logo, contact, and social */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-center mb-8 pb-6 gap-8 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
            <img
              src="/lovable-uploads/193830a4-4bc5-47a3-89a8-80be4e8c86b7.png"
              alt="Cafe Renaissance Logo"
              className="h-20 mb-4"
            />
            <p className="text-white text-lg max-w-md font-medium leading-relaxed">
              Experience exceptional European cuisine in an elegant atmosphere at Cafe Renaissance, 
              located in Waite Park, Minnesota.
            </p>
          </div>
          
          {/* Contact section */}
          <div className="text-center">
            <h3 className="font-playfair text-xl font-semibold mb-3">Contact Us</h3>
            <address className="not-italic text-white space-y-1 text-base font-medium">
              <p>2140 Frontage Road North</p>
              <p>Waite Park, MN 56387</p>
              <p className="mt-2">
                <a href="tel:+13202539300" className="hover:text-cafe-gold transition-colors">
                  (320) 253-9300
                </a>
              </p>
            </address>
          </div>
          
          {/* Hours section */}
          <div className="text-center">
            <h3 className="font-playfair text-xl font-semibold mb-3">Hours</h3>
            <div className="text-white text-base font-medium space-y-2">
              <div>
                <h4 className="font-semibold text-cafe-gold">Open:</h4>
                <p>Monday-Saturday 3 PM - 9 PM (Last Seating)</p>
                <p>New Year's Eve</p>
                <p>Valentine's Day</p>
                <p>Mother's Day</p>
              </div>
              <div className="mt-3">
                <h4 className="font-semibold text-cafe-gold">Closed:</h4>
                <p>Sundays</p>
                <p>Thanksgiving</p>
                <p>Christmas Eve</p>
                <p>Christmas Day</p>
                <p>Easter</p>
                <p>Labor Day</p>
                <p>4<sup>th</sup> of July</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-3">
            <a 
              href="https://visitor.r20.constantcontact.com/manage/optin?v=001AAPQafplpnLjmEJs03A5qvOnhyVja35KhZuEyeoNacFkcX4Kc3xHxUMwLT9FsQZaKC5fC0bie3ZW85qtZe8LDpX6EC7JfO7B" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cafe-gold/10 backdrop-blur-sm hover:bg-cafe-gold/20 transition-all px-4 py-2 text-cafe-gold hover:scale-105 transform"
            >
              <span className="font-medium">Join Our Newsletter</span>
            </a>
            <a 
              href="https://www.facebook.com/p/The-Caf%C3%A9-Renaissance-100063656138711/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="inline-flex items-center gap-2 rounded-full bg-cafe-gold/10 backdrop-blur-sm hover:bg-cafe-gold/20 transition-all px-4 py-2 text-cafe-gold hover:scale-105 transform"
            >
              <Facebook size={18} className="text-cafe-gold" />
              <span className="font-medium">Follow us</span>
            </a>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-4 text-center">
          <p className="text-white text-lg font-medium">
            &copy; {new Date().getFullYear()} Cafe Renaissance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
