
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="gradient-bg text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Grade 11 Science Resources</h1>
          <p className="text-lg md:text-xl mb-8">
            Comprehensive study notes for Chemistry, Computer Science, Mathematics, Physics, English, and Nepali subjects aligned with the official curriculum.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="#subjects" className="btn-primary bg-white text-science-blue hover:bg-gray-100 flex items-center justify-center">
              <span>Explore Subjects</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn-primary border border-white bg-transparent hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
