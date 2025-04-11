
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "These study notes have been incredibly helpful for my Grade 11 science subjects. The organization by topic and the clear explanations made difficult concepts much easier to understand.",
    author: "Ram Sharma",
    role: "Grade 11 Student"
  },
  {
    id: 2,
    content: "As a science teacher, I recommend these resources to all my students. They are well-structured and aligned with the curriculum, making them perfect supplementary materials for classroom learning.",
    author: "Sita Adhikari",
    role: "Science Teacher"
  },
  {
    id: 3,
    content: "The comprehensive notes on Physics and Chemistry helped me ace my exams. The step-by-step explanations and examples are exactly what students need to grasp complex topics.",
    author: "Anish Poudel",
    role: "Student"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-science-light-blue text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-science-blue p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6 italic">"{testimonials[currentIndex].content}"</p>
            <div>
              <p className="font-bold">{testimonials[currentIndex].author}</p>
              <p>{testimonials[currentIndex].role}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white text-science-blue p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white text-science-blue p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
