
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-science-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Grade 11 Science Resources</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive study notes for Grade 11 Science subjects based on the official curriculum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-science-light-blue" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-science-light-blue" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-science-light-blue" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/chemistry" className="text-gray-300 hover:text-white transition-colors">Chemistry</Link></li>
              <li><Link to="/computer-science" className="text-gray-300 hover:text-white transition-colors">Computer Science</Link></li>
              <li><Link to="/mathematics" className="text-gray-300 hover:text-white transition-colors">Mathematics</Link></li>
              <li><Link to="/physics" className="text-gray-300 hover:text-white transition-colors">Physics</Link></li>
              <li><Link to="/english" className="text-gray-300 hover:text-white transition-colors">English</Link></li>
              <li><Link to="/nepali" className="text-gray-300 hover:text-white transition-colors">Nepali</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="font-medium">Pramis Kunwar</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+9779805427945" className="text-gray-300 hover:text-white">+977 9805427945</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:pramiskwr123@gmail.com" className="text-gray-300 hover:text-white">pramiskwr123@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Grade 11 Science Resources. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
