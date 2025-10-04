import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, LogIn } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../auth/AuthModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
  };

  const navbarClass = isScrolled
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-violet-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EventHub</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="/" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md font-medium transition-colors">
              Home
            </a>
            <a href="/events" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md font-medium transition-colors">
              Explore Events
            </a>
            <a href="/about" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md font-medium transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md font-medium transition-colors">
              Contact
            </a>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <a href="/dashboard" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md font-medium transition-colors">
                  Dashboard
                </a>
                <Button 
                  onClick={logout}
                  variant="outline"
                  size="sm"
                >
                  Logout
                </Button>
              </div>
            ) : (
                <Button 
                  variant="primary"
                  size="sm"
                  className="flex items-center"
                  onClick={handleAuthClick}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Organizer Login
                </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Events
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            {isAuthenticated ? (
              <>
                <a
                  href="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </a>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="block px-3 py-2 rounded-md text-base font-medium text-violet-600 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleAuthClick();
                }}
              >
                Organizer Login
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;