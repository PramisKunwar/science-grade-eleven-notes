
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Download, FileText, Share2 } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Chemistry = () => {
  return (
    <div>
      <Navbar />
      
      <div className="bg-science-chemistry py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-white mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <span>Chemistry</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Chemistry</h1>
          <p className="text-white/90 max-w-3xl">
            Comprehensive notes covering General & Physical Chemistry, Inorganic Chemistry, Organic Chemistry, and Applied Chemistry for Grade 11 Science.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">General & Physical Chemistry</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Stoichiometry</h3>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Stoichiometry involves the calculation of reactants and products in chemical reactions. It is based on the law of conservation of mass and the law of definite proportions.
                    </p>
                    <h4 className="font-bold mt-4 mb-2">Key Concepts:</h4>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Mole concept and Avogadro's number</li>
                      <li>Balancing chemical equations</li>
                      <li>Limiting reagents</li>
                      <li>Theoretical, actual, and percentage yield</li>
                    </ul>
                    <h4 className="font-bold mt-4 mb-2">Example Problems:</h4>
                    <p>
                      Calculate the mass of sodium hydroxide needed to neutralize 20 mL of 0.1 M hydrochloric acid solution.
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="inline-flex items-center text-science-chemistry hover:underline">
                      <span>Read full notes</span>
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Atomic Structure</h3>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Atomic structure deals with the composition of atoms, including protons, neutrons, and electrons, and how these subatomic particles influence the properties of elements.
                    </p>
                    <h4 className="font-bold mt-4 mb-2">Key Concepts:</h4>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Dalton's atomic theory and its modifications</li>
                      <li>Discovery of subatomic particles</li>
                      <li>Quantum numbers and electron configuration</li>
                      <li>Bohr's model and its limitations</li>
                    </ul>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="inline-flex items-center text-science-chemistry hover:underline">
                      <span>Read full notes</span>
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Inorganic Chemistry</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Periodic Table and Periodicity</h3>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      The periodic table organizes elements based on their atomic number and groups them according to their properties. Periodicity refers to the recurring patterns of properties observed across the table.
                    </p>
                    <h4 className="font-bold mt-4 mb-2">Key Concepts:</h4>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Development of the periodic table</li>
                      <li>Periodic trends: atomic radius, ionization energy, electronegativity</li>
                      <li>Classification of elements: s-block, p-block, d-block, f-block</li>
                      <li>Anomalous behavior of certain elements</li>
                    </ul>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="inline-flex items-center text-science-chemistry hover:underline">
                      <span>Read full notes</span>
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Organic Chemistry</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Introduction to Organic Chemistry</h3>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Organic chemistry is the study of carbon compounds. It includes the structure, properties, composition, reactions, and preparation of carbon-containing compounds.
                    </p>
                    <h4 className="font-bold mt-4 mb-2">Key Concepts:</h4>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Tetravalency of carbon and catenation</li>
                      <li>Hybridization and types of bonding</li>
                      <li>Classification of organic compounds</li>
                      <li>Isomerism and its types</li>
                    </ul>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="inline-flex items-center text-science-chemistry hover:underline">
                      <span>Read full notes</span>
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Applied Chemistry</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Environmental Chemistry</h3>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Environmental chemistry focuses on the chemical processes occurring in the environment and the impact of human activities on these processes.
                    </p>
                    <h4 className="font-bold mt-4 mb-2">Key Concepts:</h4>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Air pollution and its effects</li>
                      <li>Water pollution and water treatment</li>
                      <li>Greenhouse effect and global warming</li>
                      <li>Acid rain and its consequences</li>
                    </ul>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="inline-flex items-center text-science-chemistry hover:underline">
                      <span>Read full notes</span>
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center text-science-gray hover:text-science-chemistry">
                    <Download size={18} className="mr-3" />
                    <span>Chemistry Formula Sheet</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-science-gray hover:text-science-chemistry">
                    <FileText size={18} className="mr-3" />
                    <span>Periodic Table</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-science-gray hover:text-science-chemistry">
                    <BookOpen size={18} className="mr-3" />
                    <span>Practice Problems</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Related Subjects</h3>
              
              <ul className="space-y-2">
                <li>
                  <Link to="/physics" className="flex items-center text-science-gray hover:text-science-physics py-2">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Physics (Thermodynamics)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/biology" className="flex items-center text-science-gray hover:text-science-teal py-2">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Biology (Biochemistry)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/mathematics" className="flex items-center text-science-gray hover:text-science-math py-2">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Mathematics (Calculations)</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-science-light-gray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Share These Notes</h3>
              
              <p className="mb-4 text-science-gray">
                Found these notes helpful? Share them with your classmates!
              </p>
              
              <div className="flex space-x-3">
                <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Share2 size={18} />
                </button>
                <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                  </svg>
                </button>
                <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Chemistry;
