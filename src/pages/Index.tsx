
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Calculator, Zap, FileText, BookMarked, PlayCircle, MessageSquare, Users } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import SubjectCard from '../components/SubjectCard';
import ProgressSection from '../components/ProgressSection';
import TestimonialSection from '../components/TestimonialSection';

const Index = () => {
  const subjects = [
    {
      title: 'Chemistry',
      description: 'General & Physical Chemistry, Inorganic Chemistry, Organic Chemistry, and Applied Chemistry',
      path: '/chemistry',
      icon: <BookOpen size={24} className="text-white" />,
      color: 'bg-science-chemistry'
    },
    {
      title: 'Computer Science',
      description: 'Computer Systems, Number System & Boolean Logic, Programming, Web Technology, and more',
      path: '/computer-science',
      icon: <Code size={24} className="text-white" />,
      color: 'bg-science-computer'
    },
    {
      title: 'Mathematics',
      description: 'Algebra, Trigonometry, Analytic Geometry, Vectors, Statistics, Calculus, and Mechanics',
      path: '/mathematics',
      icon: <Calculator size={24} className="text-white" />,
      color: 'bg-science-math'
    },
    {
      title: 'Physics',
      description: 'Mechanics, Heat and Thermodynamics, Waves and Optics, Electricity, and Modern Physics',
      path: '/physics',
      icon: <Zap size={24} className="text-white" />,
      color: 'bg-science-physics'
    },
    {
      title: 'Compulsory English',
      description: 'Listening, Speaking, Reading, Writing, Grammar, Vocabulary, and Literature',
      path: '/english',
      icon: <FileText size={24} className="text-white" />,
      color: 'bg-science-english'
    },
    {
      title: 'Compulsory Nepali',
      description: 'Poetry, Stories, Essays, Biography, Letters, Drama, Reports, Grammar, and Language Skills',
      path: '/nepali',
      icon: <BookMarked size={24} className="text-white" />,
      color: 'bg-science-nepali'
    }
  ];

  const studyGuides = [
    {
      title: 'Effective Note-Taking Strategies',
      category: 'STUDY TIPS',
      image: '/placeholder.svg',
      path: '#'
    },
    {
      title: 'Preparing for Science Examinations',
      category: 'EXAM PREPARATION',
      image: '/placeholder.svg',
      path: '#'
    }
  ];

  const communityPosts = [
    {
      title: 'Need help understanding organic chemistry reactions',
      comments: 12,
      path: '#'
    },
    {
      title: 'Tips for solving calculus problems efficiently',
      comments: 8,
      path: '#'
    },
    {
      title: 'Looking for study partners for physics',
      comments: 5,
      path: '#'
    }
  ];

  return (
    <div>
      <Navbar />
      
      <Hero />
      
      <SearchBar />
      
      {/* Subjects Section */}
      <section id="subjects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Explore Our Study Materials</h2>
          <p className="text-center text-science-gray mb-10 max-w-3xl mx-auto">
            Comprehensive notes and resources for all Grade 11 Science subjects, organized by topic to help you excel in your studies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <SubjectCard 
                key={subject.title}
                title={subject.title}
                description={subject.description}
                path={subject.path}
                icon={subject.icon}
                color={subject.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Study Guides Section */}
      <section className="py-16 bg-science-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Top-Rated Study Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {studyGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-semibold bg-science-light-blue text-white px-2 py-1 rounded">
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                  <Link to={guide.path} className="text-science-blue hover:text-science-light-blue font-medium inline-flex items-center">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Tutorial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Featured Video Tutorial</h2>
          
          <div className="max-w-3xl mx-auto bg-science-navy rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 relative bg-black flex items-center justify-center h-[400px]">
              <PlayCircle size={80} className="text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Understanding Chemical Bonding</h3>
              <p className="text-gray-300">Learn about ionic, covalent, and metallic bonds in this comprehensive tutorial</p>
            </div>
          </div>
        </div>
      </section>
      
      <ProgressSection />
      
      <TestimonialSection />
      
      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Student Community</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Recent Discussions</h3>
              
              <div className="space-y-4">
                {communityPosts.map((post, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium mb-2">
                      <Link to={post.path} className="hover:text-science-blue transition-colors">
                        {post.title}
                      </Link>
                    </h4>
                    <div className="flex items-center text-science-gray text-sm">
                      <MessageSquare size={16} className="mr-1" />
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="#" className="btn-primary w-full mt-6 inline-flex items-center justify-center">
                <span>View All Discussions</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-science-light-blue text-white rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-4">Join the Conversation</h3>
              <p className="mb-4">Connect with fellow students, ask questions, and share your knowledge.</p>
              <Users size={48} className="mx-auto my-6" />
              <p className="mb-6 text-sm">Create an account to participate in discussions, track your progress, and get personalized recommendations.</p>
              <Link to="#" className="mt-auto bg-white text-science-blue hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-all duration-200 text-center">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
