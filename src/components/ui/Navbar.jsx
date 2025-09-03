import React from "react";
import { Link } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="TrendingUp" size={24} color="#1e40af" />
            <span className="text-xl font-bold text-gray-900">FinSight</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
              About
            </Link>
            <Link to="/contact-support-hub" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
              Contact
            </Link>
            <Link to="/investment-plans" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
              Investment Plans
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-brand-primary font-medium transition-colors">
              Blog
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-brand-primary">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm" className="bg-brand-primary hover:bg-brand-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
