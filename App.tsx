
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Settings, 
  Users, 
  ShieldCheck, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Award,
  Briefcase,
  FileText,
  Key,
  ChevronRight,
  Info,
  Shield,
  Globe
} from 'lucide-react';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import SkillCard from './components/SkillCard';
import { 
  TAGLINES, 
  ACHIEVEMENTS, 
  SKILL_CATEGORIES, 
  PROJECTS, 
  EXPERIENCES, 
  EDUCATION, 
  CERTIFICATIONS 
} from './constants';

const SonaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="50" cy="50" r="45" />
    <path d="M50 5 V30" />
    <path d="M50 70 V95" />
    <path d="M5 50 H30" />
    <path d="M70 50 H95" />
    <path d="M20 20 L35 35" />
    <path d="M65 65 L80 80" />
    <path d="M80 20 L65 35" />
    <path d="M35 65 L20 80" />
    <circle cx="50" cy="50" r="25" strokeDasharray="4,2" />
    <circle cx="50" cy="50" r="10" strokeWidth="4" />
  </svg>
);

const NifcoLogo = () => (
  <div className="flex flex-col items-center group">
    <svg viewBox="0 0 160 60" className="w-28 h-auto transition-transform group-hover:scale-110">
      <g transform="skewX(-10)">
        <text x="5" y="35" font-family="Impact, sans-serif" font-size="34" fill="#231F20">NIFCO</text>
        <rect x="70" y="8" width="22" height="32" fill="#F39200" style={{ mixBlendMode: 'multiply' }} opacity="0.9" />
      </g>
      <text x="12" y="52" font-family="Arial, sans-serif" font-size="9" font-weight="900" font-style="italic" fill="#555" style={{ letterSpacing: '1px' }}>WOWING THE WORLD</text>
    </svg>
  </div>
);

const PhilipsLogo = () => (
  <div className="flex flex-col items-center group">
    <svg viewBox="0 0 100 120" className="w-16 h-auto transition-all group-hover:scale-110 drop-shadow-md">
      <path d="M10 10 H90 V80 C90 100 50 115 50 115 C50 115 10 100 10 80 V10 Z" fill="#0b5ed7" />
      <text x="50" y="35" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="white" text-anchor="middle">PHILIPS</text>
      <circle cx="50" cy="72" r="30" fill="white" />
      <path d="M22 75 Q40 65 50 75 T78 75" fill="none" stroke="#0b5ed7" strokeWidth="4" />
      <path d="M22 82 Q40 72 50 82 T78 82" fill="none" stroke="#0b5ed7" strokeWidth="4" />
      <path d="M35 55 L38 62 L45 65 L38 68 L35 75 L32 68 L25 65 L32 62 Z" fill="#0b5ed7" />
      <path d="M65 85 L67 88 L72 90 L67 92 L65 95 L63 92 L58 90 L63 88 Z" fill="#0b5ed7" />
    </svg>
  </div>
);

const FordLogo = () => (
  <div className="flex flex-col items-center group">
    <svg viewBox="0 0 160 80" className="w-28 h-auto transition-transform group-hover:scale-110 drop-shadow-sm">
      <ellipse cx="80" cy="40" rx="75" ry="35" fill="#000040" stroke="white" strokeWidth="2" />
      <ellipse cx="80" cy="40" rx="70" ry="30" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
      <text x="80" y="52" font-family="'Brush Script MT', cursive" font-size="42" fill="white" text-anchor="middle" font-style="italic">Ford</text>
    </svg>
  </div>
);

const SonalikaLogo = () => (
  <div className="flex flex-col items-center group">
    <svg viewBox="0 0 200 60" className="w-36 h-auto transition-transform group-hover:scale-110">
      <text x="5" y="35" font-family="Arial Black, sans-serif" font-size="34" fill="#0b5ed7" style={{ letterSpacing: '-1px' }}>SONALIKA</text>
      <line x1="5" y1="42" x2="195" y2="42" stroke="#0b5ed7" strokeWidth="3" />
      <text x="100" y="55" font-family="Arial Narrow, sans-serif" font-size="10" font-weight="900" fill="#cc0000" text-anchor="middle" style={{ letterSpacing: '1px' }}>HEAVY DUTY TRACTOR RANGE</text>
    </svg>
  </div>
);

const App: React.FC = () => {
  const [activeTagline, setActiveTagline] = useState(0);
  const [showKeyPop, setShowKeyPop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTagline((prev) => (prev + 1) % TAGLINES.length);
    }, 4000);

    const checkKey = async () => {
      if (window.aistudio) {
        try {
          const hasKey = await window.aistudio.hasSelectedApiKey();
          if (!hasKey) setShowKeyPop(true);
        } catch (e) {
          setShowKeyPop(true);
        }
      }
    };
    checkKey();

    return () => clearInterval(timer);
  }, []);

  const handleOpenSelectKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setShowKeyPop(false);
    }
  };

  const handleDownload = () => {
    const resumeContent = `SHEKHAR KUMAR - Senior Manager - Quality & Manufacturing...`;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Shekhar_Kumar_CV.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* API Key Selection Pop */}
      {showKeyPop && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border border-indigo-100">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-indigo-50 rounded-full text-indigo-600 ring-8 ring-indigo-50/50">
                <Key size={32} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">Service Configuration</h2>
            <p className="text-slate-600 text-center mb-8 leading-relaxed">
              To resolve connection errors and enable full portfolio functionality, please select your Google AI Studio API key.
            </p>
            <div className="space-y-4">
              <button 
                onClick={handleOpenSelectKey}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
              >
                Connect to AI Studio
                <ChevronRight size={20} />
              </button>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg text-blue-700 text-xs">
                <Info size={16} className="shrink-0 mt-0.5" />
                <p>
                  Requires a paid project. Visit <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="font-bold underline">Billing Docs</a>.
                </p>
              </div>
              <button 
                onClick={() => setShowKeyPop(false)}
                className="w-full text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors underline"
              >
                Skip configuration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-400/20">
            <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.3em]">Quality & Manufacturing Leadership</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter leading-tight uppercase">
            Shekhar <span className="text-indigo-400">Kumar</span>
          </h1>
          <div className="h-24 flex items-center justify-center mb-8">
            <p className="text-lg md:text-2xl text-slate-400 font-medium max-w-2xl transition-opacity duration-500 italic">
              "{TAGLINES[activeTagline]}"
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-lg font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
              Major Case Studies
            </a>
            <button onClick={handleDownload} className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm border border-white/20 px-10 py-5 rounded-lg font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              <Download size={18} />
              Professional CV
            </button>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section id="experience" className="py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-16 mb-24 bg-gradient-to-r from-[#94B6F7] to-[#8FA2E9] flex items-center justify-center rounded-xl shadow-xl border border-indigo-200">
             <span className="text-[#0f172a] font-black text-2xl uppercase tracking-[0.3em] drop-shadow-sm">Carrier Timeline</span>
          </div>
          
          <div className="relative mt-20 mb-32 px-4 md:px-12">
            <div className="absolute -top-16 left-0 w-full flex h-32 pointer-events-none">
              <div className="w-[40%] flex flex-col items-center">
                <span className="font-black text-3xl text-[#1e293b] mb-1 tracking-widest opacity-80">TIER-1</span>
                <svg className="w-[90%] h-full" viewBox="0 0 400 60" preserveAspectRatio="none">
                  <path d="M 10 60 C 10 20 50 10 180 10 L 200 0 L 220 10 C 350 10 390 20 390 60" 
                    fill="none" stroke="#B91C1C" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="w-[60%] flex flex-col items-center">
                <span className="font-black text-3xl text-[#1e293b] mb-1 tracking-widest opacity-80">OEM</span>
                <svg className="w-[90%] h-full" viewBox="0 0 600 60" preserveAspectRatio="none">
                  <path d="M 10 60 C 10 20 80 10 280 10 L 300 0 L 320 10 C 520 10 590 20 590 60" 
                    fill="none" stroke="#B91C1C" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="h-7 w-full bg-gradient-to-b from-[#EB984E] to-[#D35400] rounded-full shadow-2xl relative z-10 flex items-center border-y border-white/20">
              {[10, 30, 50, 70, 90].map((pos, idx) => (
                <div key={idx} style={{ left: `${pos}%` }} className="absolute h-14 w-3 bg-[#1e293b] -top-3 rounded shadow-xl border-x border-slate-700"></div>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-5 gap-4">
              {[
                { name: 'SONA COMSTAR', date: 'Jan.2010~ Aug.2011', logoComp: <SonaLogo /> },
                { name: 'NIFCO INDIA', date: 'Sept.2012~ Nov.2013', logoComp: <NifcoLogo /> },
                { name: 'PHILIPS INDIA', date: 'Nov.2013~ Aug.2014', logoComp: <PhilipsLogo /> },
                { name: 'FORD INDIA', date: 'Aug.2014~ Oct.2024', logoComp: <FordLogo /> },
                { name: 'SONALIKA HEAVY DUTY', date: 'Oct.2024~ till date', logoComp: <SonalikaLogo />, active: true }
              ].map((comp, idx) => (
                <div key={idx} className="text-center group flex flex-col items-center">
                  <div className="h-32 flex flex-col items-center justify-center mb-4 px-2">
                    <div className="h-24 flex items-center justify-center mb-3">
                       {comp.logoComp}
                    </div>
                    <span className="text-[10px] font-black text-slate-800 uppercase leading-none tracking-tighter max-w-[140px] block opacity-80 group-hover:opacity-100">{comp.name}</span>
                  </div>
                  <div className={`text-xs font-black uppercase tracking-widest whitespace-nowrap px-4 py-1.5 mt-auto transition-all ${comp.active ? 'text-white bg-indigo-600 rounded-full shadow-lg border-indigo-700' : 'text-slate-500'}`}>
                    {comp.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <SectionHeading 
              title="Strategic Operations Leader" 
              subtitle="Over 16 years of consistent excellence in OEM and Tier-1 manufacturing environments."
            />
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>Dynamic leader with a robust track record in <strong>Plant Quality Assurance</strong> and <strong>Heavy Machining</strong>. Expert in Six Sigma methodologies with proven success in driving ₹2 Cr+ annual savings.</p>
              <p>Specialized in <strong>IATF 16949</strong> compliance and <strong>KAIZEN</strong> implementation, fostering high-performance cultures across diverse industrial ecosystems.</p>
            </div>
          </div>
          <div className="relative group animate-fade-in p-8">
            <div className="absolute -inset-4 bg-indigo-50 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0"></div>
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-12">
               <div className="grid grid-cols-2 gap-6 w-full">
                 <div className="bg-indigo-600/20 border border-indigo-500/30 p-8 rounded-xl text-white">
                   <div className="text-5xl font-black mb-1">16+</div>
                   <div className="text-xs uppercase font-black tracking-widest opacity-60">Years Experience</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-white shadow-2xl">
                   <div className="text-5xl font-black text-indigo-400 mb-1">6σ</div>
                   <div className="text-xs uppercase font-black tracking-widest opacity-60">Capability</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Technical Competencies" />
          <div className="grid md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <SkillCard key={idx} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-indigo-600 text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black mb-8 uppercase tracking-[0.2em]">Lead. Build. Excel.</h2>
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-white/20 transition-all"><Mail size={32} /></div>
              <div className="font-black text-lg">shekharkumar55@gmail.com</div>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-white/20 transition-all"><Phone size={32} /></div>
              <div className="font-black text-lg">+91- 97 12 40 48 43</div>
            </div>
          </div>
          <button onClick={handleDownload} className="bg-white text-indigo-600 px-16 py-6 rounded-xl font-black text-xl uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto">
            <FileText size={28} />
            Download Full Portfolio
          </button>
        </div>
      </section>

      <footer className="bg-slate-950 py-16 text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-black text-slate-300 mb-4 uppercase tracking-[0.4em]">Shekhar Kumar</p>
          <p className="text-sm">© {new Date().getFullYear()} Senior Mechanical Engineering Excellence. Hoshiarpur, India.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
