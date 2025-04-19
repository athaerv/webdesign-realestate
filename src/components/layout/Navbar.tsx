
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold text-black">
            Avant<span className="text-amber-600">Elite</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-black hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link to="/properties" className="text-black hover:text-amber-600 transition-colors">
              Properties
            </Link>
            <Link to="/about" className="text-black hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-black hover:text-amber-600 transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <select className="bg-transparent border-none text-sm focus:outline-none">
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
