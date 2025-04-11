
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Chemistry', path: '/chemistry' },
    { name: 'Computer Science', path: '/computer-science' },
    { name: 'Mathematics', path: '/mathematics' },
    { name: 'Physics', path: '/physics' },
    { name: 'English', path: '/english' },
    { name: 'Nepali', path: '/nepali' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-science-navy py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white font-heading font-bold text-xl">Grade 11 Science</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-white hover:text-science-light-blue transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-science-navy z-50 md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              {navItems.map(item => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-white py-2 hover:text-science-light-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
