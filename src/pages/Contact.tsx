
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Phone, MapPin, Send } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    // For now, we'll just simulate a successful submission
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div>
      <Navbar />
      
      <div className="bg-science-blue py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-white mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <span>Contact</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/90 max-w-3xl">
            Have questions about our study materials? Want to suggest improvements or report an issue? We'd love to hear from you!
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for your message! We'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-science-gray mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-science-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-science-gray mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-science-blue"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-science-gray mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-science-blue"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Chemistry Question">Chemistry Question</option>
                    <option value="Computer Science Query">Computer Science Query</option>
                    <option value="Mathematics Help">Mathematics Help</option>
                    <option value="Physics Problem">Physics Problem</option>
                    <option value="English Notes">English Notes</option>
                    <option value="Nepali Notes">Nepali Notes</option>
                    <option value="Feedback">General Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-science-gray mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-science-blue"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center"
                >
                  <span>Send Message</span>
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone size={20} className="text-science-blue mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+9779805427945" className="text-science-gray hover:text-science-blue">
                      +977 9805427945
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail size={20} className="text-science-blue mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:pramiskwr123@gmail.com" className="text-science-gray hover:text-science-blue">
                      pramiskwr123@gmail.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <MapPin size={20} className="text-science-blue mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Maintainer</p>
                    <p className="text-science-gray">Pramis Kunwar</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-science-light-gray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">FAQ</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Are these notes sufficient for board exams?</h4>
                  <p className="text-science-gray">
                    These notes cover the entire Grade 11 Science curriculum as prescribed by the board, but we recommend supplementing them with textbooks and practice questions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">How often are the notes updated?</h4>
                  <p className="text-science-gray">
                    We update our notes at the beginning of each academic year and make smaller updates throughout the year as needed.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Can I suggest topics to be added?</h4>
                  <p className="text-science-gray">
                    Absolutely! We welcome suggestions from students and teachers. Please use the contact form to send us your ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
