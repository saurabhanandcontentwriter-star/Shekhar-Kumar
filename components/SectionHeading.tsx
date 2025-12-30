
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, light }) => {
  return (
    <div className="mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 mb-4 rounded-full ${light ? 'bg-white/40' : 'bg-indigo-600'}`}></div>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
