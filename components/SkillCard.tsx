
import React from 'react';
import { SkillCategory } from '../types';

const SkillCard: React.FC<SkillCategory> = ({ title, skills }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-200 group">
      <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-md border border-slate-200 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
