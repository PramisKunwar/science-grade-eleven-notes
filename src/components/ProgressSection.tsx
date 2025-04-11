
import React from 'react';

interface ProgressItemProps {
  subject: string;
  percentage: number;
  color: string;
}

const ProgressItem: React.FC<ProgressItemProps> = ({ subject, percentage, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{subject}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className={`progress-value ${color}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const ProgressSection = () => {
  return (
    <div className="bg-science-navy py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Track Your Progress</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Subject Progress</h3>
            <ProgressItem subject="Chemistry" percentage={85} color="bg-science-chemistry" />
            <ProgressItem subject="Computer Science" percentage={70} color="bg-science-computer" />
            <ProgressItem subject="Mathematics" percentage={65} color="bg-science-math" />
            <ProgressItem subject="Physics" percentage={75} color="bg-science-physics" />
            <ProgressItem subject="English" percentage={90} color="bg-science-english" />
            <ProgressItem subject="Nepali" percentage={80} color="bg-science-nepali" />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Recommended Next Steps</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-science-math rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold">Complete Calculus Section</h4>
                  <p className="text-science-gray">Finish the remaining topics in the Calculus section of Mathematics</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-science-physics rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold">Review Modern Physics</h4>
                  <p className="text-science-gray">Go through the notes on Nuclear Physics and Recent Trends in Physics</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-science-computer rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold">Practice C Programming</h4>
                  <p className="text-science-gray">Work on the programming exercises in the Computer Science section</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
