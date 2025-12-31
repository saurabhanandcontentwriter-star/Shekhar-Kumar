
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const BrandLogo = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth="3">
    <circle cx="50" cy="50" r="45" />
    <circle cx="50" cy="50" r="35" strokeDasharray="5,3" />
    <path d="M20 50 H80 M50 20 V80" strokeOpacity="0.3" />
    <path d="M30 30 L70 70 M70 30 L30 70" strokeOpacity="0.3" />
    <circle cx="50" cy="50" r="15" strokeWidth="5" />
    <path d="M50 35 V65 M35 50 H65" strokeWidth="2" />
    <path d="M15 50 A35 35 0 0 1 50 15" strokeWidth="4" />
    <path d="M85 50 A35 35 0 0 1 50 85" strokeWidth="4" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Summary', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <BrandLogo className={`w-10 h-10 transition-transform duration-500 group-hover:rotate-180 ${scrolled ? 'text-indigo-600' : 'text-white'}`} />
            <span className={`text-xl font-black tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              SHEKHAR<span className="text-indigo-500">.ENG</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-black uppercase tracking-widest transition-all hover:text-indigo-500 hover:translate-y-[-2px] ${scrolled ? 'text-slate-600' : 'text-slate-100'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-600/20 active:scale-95 transition-all"
            >
              Hire Me
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-slate-900' : 'text-white'} transition-transform active:scale-90`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-6 border-t border-slate-100 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-black uppercase tracking-widest text-slate-700 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
