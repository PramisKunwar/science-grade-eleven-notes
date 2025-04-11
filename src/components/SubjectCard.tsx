
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ChevronRight } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  color: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ title, description, path, icon, color }) => {
  return (
    <div className="subject-card">
      <div className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-science-gray mb-4 flex-grow">{description}</p>
      <Link 
        to={path} 
        className="btn-primary flex items-center justify-center"
      >
        <span>View Notes</span>
        <ChevronRight size={18} className="ml-1" />
      </Link>
    </div>
  );
};

export default SubjectCard;
