import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationLinks = [
    { name: 'Home', path: '/navigation-landing-page', isActive: true },
    { name: 'About', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
    { name: 'Investment Plans', path: '/investment-plans' },
    { name: 'Blog', path: '/blog' },
  ];

  const handleGetStarted = () => {
    // Navigate to signup page
    navigate('/signup');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/navigation-landing-page" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={18} color="white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FinSight</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks?.map((link) => (
              <Link
                key={link?.name}
                to={link?.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-primary ${
                  link?.isActive 
                    ? 'text-brand-primary border-b-2 border-brand-primary pb-1' :'text-gray-700'
                }`}
              >
                {link?.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-700 hover:text-brand-primary"
              >
                Login
              </Button>
            </Link>
            <Button 
              onClick={handleGetStarted}
              variant="default" 
              size="sm" 
              className="bg-brand-primary hover:bg-brand-primary/90 text-white"
              iconName="ArrowRight" 
              iconPosition="right"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-brand-primary transition-colors"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navigationLinks?.map((link) => (
                <Link
                  key={link?.name}
                  to={link?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-200 hover:text-brand-primary ${
                    link?.isActive ? 'text-brand-primary' : 'text-gray-700'
                  }`}
                >
                  {link?.name}
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-gray-300 text-gray-700 hover:border-brand-primary hover:text-brand-primary"
                  >
                    Login
                  </Button>
                </Link>
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleGetStarted();
                  }}
                  variant="default" 
                  size="sm" 
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;