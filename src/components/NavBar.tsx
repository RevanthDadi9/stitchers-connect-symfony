
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white py-4 px-6 md:px-10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-stitch-blue">StitchSync</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#about" className="text-gray-700 hover:text-stitch-blue transition duration-200">
            About
          </Link>
          <Link to="/#how-it-works" className="text-gray-700 hover:text-stitch-blue transition duration-200">
            How It Works
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-stitch-blue transition duration-200">
            Services
          </Link>
          <Link to="/#testimonials" className="text-gray-700 hover:text-stitch-blue transition duration-200">
            Testimonials
          </Link>
          <Button className="bg-stitch-blue hover:bg-stitch-lightblue text-white">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/#about" 
              className="text-gray-700 hover:text-stitch-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/#how-it-works" 
              className="text-gray-700 hover:text-stitch-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-stitch-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/#testimonials" 
              className="text-gray-700 hover:text-stitch-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Button 
              className="bg-stitch-blue hover:bg-stitch-lightblue text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
