import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react"; // ✅ Import icon properly

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo */}
          <Link
            to="/homepage-investment-intelligence-platform"
            className="flex items-center space-x-2 transition-smooth hover:opacity-80"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <TrendingUp size={20} color="white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-brand-primary">Finsight</span>
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>
            <Link to="/contact-support-hub" className="hover:text-white transition">
              Contact
            </Link>
            <Link to="/investment-plans" className="hover:text-white transition">
              Investment Plans
            </Link>
            <Link to="/blog" className="hover:text-white transition">
              Blog
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Finsight. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ for smarter investing.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
