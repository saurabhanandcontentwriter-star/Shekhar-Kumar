
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
  ChevronRight,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Globe,
  FileText,
  CheckCircle2,
  TrendingUp
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

const App: React.FC = () => {
  const [activeTagline, setActiveTagline] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTagline((prev) => (prev + 1) % TAGLINES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      case 'Settings': return <Settings className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  const handleDownload = () => {
    const resumeContent = `
SHEKHAR KUMAR
Senior Manager / Chief Manager – Quality & Manufacturing
Location: Hoshiarpur, India | +91- 97 12 40 48 43 | shekharkumar55@gmail.com

PROFESSIONAL SUMMARY:
Dynamic Mechanical Engineer with 16+ years of experience in Automotive and heavy machining.
Specialized in Plant Quality, Six Sigma, and IATF standards with ₹2 Cr+ annual cost savings.

CORE COMPETENCIES:
- Six Sigma Black Belt (4.5σ to 6σ improvement)
- IATF 16949 & ISO 9001 Excellence
- OEM & Tier-1 Manufacturing Strategy
- KAIZEN & Lean Implementation

WORK EXPERIENCE:
${EXPERIENCES.map(e => `
${e.role} | ${e.company} (${e.duration})
${e.responsibilities.map(r => `- ${r}`).join('\n')}
`).join('\n')}

MAJOR PROJECTS:
${PROJECTS.map(p => `
Project: ${p.title}
Result: ${p.result} | Benefit: ${p.benefit}
`).join('\n')}

EDUCATION:
${EDUCATION.map(edu => `${edu.degree} - ${edu.institution} (${edu.year})`).join('\n')}
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Shekhar_Kumar_CV.txt');
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };

  const popButtonStyle = "transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl";
  const popCardStyle = "transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-slate-100";

  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-400/20">
            <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest">Senior Mechanical Engineer</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight leading-tight uppercase">
            Shekhar <span className="text-indigo-400">Kumar</span>
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl transition-opacity duration-500">
              {TAGLINES[activeTagline]}
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#projects" className={`${popButtonStyle} bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-indigo-600/20`}>
              View Case Studies
            </a>
            <a href="#resume" className={`${popButtonStyle} bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg font-bold text-lg`}>
              View Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Quick Metrics */}
      <section className="bg-white py-12 border-b border-slate-100 shadow-sm relative z-20 -mt-10 mx-4 lg:mx-auto max-w-6xl rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-8">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.id} className="text-center group transition-transform duration-300 hover:scale-110">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(ach.icon)}
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{ach.metric}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{ach.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Timeline Section - High Fidelity Reference Match */}
      <section id="career-timeline" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blue Gradient Header Bar */}
          <div className="w-full h-12 mb-20 bg-gradient-to-r from-[#7AB1E8] to-[#92A3E0] flex items-center justify-center rounded shadow-sm border border-indigo-200">
             <span className="text-[#0f172a] font-black text-xl uppercase tracking-[0.2em]">Carrier Timeline</span>
          </div>
          
          <div className="relative mt-20 mb-40">
            {/* Red Curly Brackets Layer */}
            <div className="absolute -top-14 left-0 w-full flex h-28 pointer-events-none">
              {/* TIER-1 Bracket (40% width) */}
              <div className="w-[40%] flex flex-col items-center">
                <span className="font-black text-2xl text-slate-900 mb-0 tracking-widest">TIER-1</span>
                <svg className="w-[90%] h-full" viewBox="0 0 400 60" preserveAspectRatio="none">
                  <path d="M 10 60 C 10 20 50 10 180 10 L 200 0 L 220 10 C 350 10 390 20 390 60" 
                    fill="none" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              {/* OEM Bracket (60% width) */}
              <div className="w-[60%] flex flex-col items-center">
                <span className="font-black text-2xl text-slate-900 mb-0 tracking-widest">OEM</span>
                <svg className="w-[90%] h-full" viewBox="0 0 600 60" preserveAspectRatio="none">
                  <path d="M 10 60 C 10 20 80 10 280 10 L 300 0 L 320 10 C 520 10 590 20 590 60" 
                    fill="none" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Main Wood-Grain Horizontal Bar */}
            <div className="h-6 w-full bg-[#E67E22] rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.3),inset_0px_1px_2px_rgba(255,255,255,0.4)] border-y border-[#D35400] relative z-10 flex items-center">
              {/* Vertical Tick Supports */}
              {[10, 30, 50, 70, 90].map((pos, idx) => (
                <div key={idx} style={{ left: `${pos}%` }} className="absolute h-10 w-2.5 bg-[#475569] -top-2 rounded-sm shadow-md border-x border-[#334155]"></div>
              ))}
            </div>

            {/* Content Layer (Logos and Dates) - Visible & Aligned */}
            <div className="mt-12 grid grid-cols-5 gap-4">
              {/* Sona Comstar */}
              <div className="text-center group transition-all duration-300">
                 <div className="h-32 flex flex-col items-center justify-center mb-4 px-2">
                    <div className="h-20 flex items-center justify-center">
                       <img src="https://sonacomstar.com/wp-content/uploads/2021/05/logo.svg" className="max-h-16 w-auto object-contain transition-all" alt="Sona Comstar" onError={(e) => { e.currentTarget.src = "https://placehold.co/120x60/fff/000?text=SONA+COMSTAR" }} />
                    </div>
                    <span className="text-xs font-black text-slate-900 uppercase mt-4 block">SONA COMSTAR</span>
                 </div>
                 <div className="text-sm font-black text-slate-700 whitespace-nowrap mt-2">Jan.2010~ Aug.2011</div>
              </div>

              {/* Nifco */}
              <div className="text-center group transition-all duration-300">
                 <div className="h-32 flex flex-col items-center justify-center mb-4 px-2">
                    <div className="h-20 flex items-center justify-center">
                       <img src="https://www.nifco.com/common/img/header_logo.png" className="max-h-12 w-auto object-contain transition-all" alt="NIFCO" onError={(e) => { e.currentTarget.src = "https://placehold.co/120x60/fff/ff6600?text=NIFCO" }} />
                    </div>
                    <span className="text-xs font-black text-slate-900 uppercase mt-4 block">NIFCO WOWING THE WORLD</span>
                 </div>
                 <div className="text-sm font-black text-slate-700 whitespace-nowrap mt-2">Sept.2012~ Nov.2013</div>
              </div>

              {/* Philips */}
              <div className="text-center group transition-all duration-300">
                 <div className="h-32 flex flex-col items-center justify-center mb-4 px-2">
                    <div className="h-20 flex items-center justify-center">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Philips_logo_new.svg" className="max-h-14 w-auto object-contain transition-all" alt="Philips" />
                    </div>
                    <span className="text-xs font-black text-slate-900 uppercase mt-4 block">PHILIPS</span>
                 </div>
                 <div className="text-sm font-black text-slate-700 whitespace-nowrap mt-2">Nov.2013~ Aug.2014</div>
              </div>

              {/* Ford */}
              <div className="text-center group transition-all duration-300">
                 <div className="h-32 flex flex-col items-center justify-center mb-4 px-2">
                    <div className="h-20 flex items-center justify-center">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg" className="max-h-14 w-auto object-contain transition-all" alt="Ford" />
                    </div>
                    <span className="text-xs font-black text-slate-900 uppercase mt-4 block">FORD</span>
                 </div>
                 <div className="text-sm font-black text-slate-700 whitespace-nowrap mt-2">Aug.2014~ Oct.2024</div>
              </div>

              {/* Sonalika */}
              <div className="text-center group transition-all duration-300">
                 <div className="h-32 flex flex-col items-center justify-center mb-4 px-2">
                    <div className="h-20 flex items-center justify-center">
                       <img src="https://sonalika.com/wp-content/uploads/2021/04/sonalika-logo.png" className="max-h-14 w-auto object-contain transition-all" alt="Sonalika" />
                    </div>
                    <span className="text-[10px] font-black text-slate-900 uppercase mt-4 block text-center leading-tight">SONALIKA HEAVY DUTY TRACTOR RANGE</span>
                 </div>
                 <div className="text-sm font-black text-slate-900 whitespace-nowrap mt-2 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">Oct.2024~ till date</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              title="Impact-Driven Leadership" 
              subtitle="Over 16 years of strategic oversight in heavy machining and automotive quality assurance."
            />
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Dynamic leader with 16+ years of expertise in <strong>OEM and Tier-1 automotive manufacturing</strong>. 
                Expert in Plant Quality Assurance, Six Sigma, and heavy machining processes.
              </p>
              <p>
                Proven track record in fostering a <strong>continuous improvement culture</strong>, achieving 6σ benchmarks, 
                and delivering over <strong>₹2 Cr in annual cost savings</strong>. 
              </p>
              <p>
                Strategic thinker dedicated to operational excellence, IATF compliance, and building high-performance 
                teams that drive measurable business impact in the Automotive and Tractor industries.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="mt-1 p-2 bg-green-100 text-green-700 rounded-lg group-hover:scale-110 transition-transform">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Compliance Expert</h4>
                  <p className="text-sm text-slate-500">Lead Auditor for IATF 16949 & ISO 9001</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                <div className="mt-1 p-2 bg-blue-100 text-blue-700 rounded-lg group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Black Belt</h4>
                  <p className="text-sm text-slate-500">Certified Six Sigma Professional</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-100 rounded-3xl -rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-12 transition-transform duration-500 group-hover:scale-102">
              <div className="grid grid-cols-2 gap-8 w-full">
                <div className="space-y-8">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-white hover:bg-white/10 transition-colors">
                    <div className="text-4xl font-bold mb-1">16+</div>
                    <div className="text-sm text-slate-400 font-medium uppercase">Years Exp</div>
                  </div>
                  <div className="bg-indigo-600 p-6 rounded-2xl shadow-xl shadow-indigo-600/30 text-white translate-x-4 hover:translate-x-6 transition-transform">
                    <div className="text-4xl font-bold mb-1">6σ</div>
                    <div className="text-sm text-indigo-100 font-medium uppercase">Capability</div>
                  </div>
                </div>
                <div className="space-y-8 pt-12">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-white -translate-x-4 hover:-translate-x-6 transition-transform">
                    <div className="text-4xl font-bold mb-1">₹2Cr</div>
                    <div className="text-sm text-slate-400 font-medium uppercase">Cost Saved</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl text-slate-900 shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="text-4xl font-bold mb-1 text-indigo-600">75%</div>
                    <div className="text-sm text-slate-500 font-medium uppercase">PPM Reduced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Core Competencies" 
            subtitle="Deep technical and managerial expertise across the manufacturing value chain."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <SkillCard key={idx} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Industrial Impact" 
          subtitle="Detailed roles and responsibilities in India's premier manufacturing ecosystems."
        />
        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="sticky top-24">
                    <div className="text-indigo-600 font-bold mb-1 uppercase tracking-wider">{exp.duration}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.company}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg mb-4">
                      <Briefcase size={16} />
                      {exp.role}
                    </div>
                  </div>
                </div>
                <div className={`${popCardStyle} md:w-2/3 bg-white p-8 rounded-2xl`}>
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-600">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="High-Impact Case Studies" 
            subtitle="Real-world problem solving through DMAIC, 8D, and 4M methodologies."
            light
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all transform hover:-translate-y-2 hover:shadow-2xl group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{proj.title}</h3>
                  <div className="p-2 bg-white/10 rounded-lg text-white group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300">
                    <Zap size={20} />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Problem</h4>
                    <p className="text-slate-300 leading-relaxed">{proj.problem}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {proj.tools.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded border border-indigo-500/30">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">Result</h4>
                      <p className="text-white font-medium">{proj.result}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Business Benefit</h4>
                      <p className="text-white font-medium">{proj.benefit}</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Action Taken</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{proj.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 bg-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Professional Resume" 
            subtitle="Detailed overview of my industrial expertise and leadership milestones."
          />
          
          <div className="bg-white shadow-2xl rounded-sm p-8 md:p-16 border-t-[12px] border-indigo-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-[0.03] rotate-12 -translate-y-1/2 translate-x-1/2">
              <ShieldCheck size={400} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-12 border-b-2 border-slate-100 pb-8">
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">Shekhar Kumar</h2>
                  <p className="text-xl text-indigo-600 font-bold uppercase tracking-wider mb-4">Senior Manager – Quality & Manufacturing</p>
                  <div className="flex flex-wrap gap-4 text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><MapPin size={16} /> Hoshiarpur, India</span>
                    <span className="flex items-center gap-1"><Phone size={16} /> +91- 97 12 40 48 43</span>
                    <span className="flex items-center gap-1"><Mail size={16} /> shekharkumar55@gmail.com</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex flex-col items-end gap-2">
                   <div className="bg-slate-900 text-white px-4 py-2 rounded font-bold text-sm tracking-widest uppercase">16+ Years Experience</div>
                   <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded font-bold text-sm tracking-widest uppercase">Six Sigma Black Belt</div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest border-l-4 border-indigo-600 pl-4 mb-4">Professional Summary</h3>
                <p className="text-slate-600 leading-relaxed text-lg italic">
                  "Strategic Manufacturing Quality Leader with over 16 years of consistent success in OEM & Tier-1 environments. Expert in cultivating a zero-defect culture through 6-Sigma implementation, robust IATF compliance, and strategic process optimization. Proven ability to deliver multimillion-rupee cost savings while scaling operational efficiency in heavy machining sectors."
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1 space-y-12">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6">Expertise</h3>
                    <div className="space-y-4">
                      {SKILL_CATEGORIES.slice(0, 3).map((cat, i) => (
                        <div key={i}>
                          <h4 className="text-sm font-bold text-indigo-600 uppercase mb-2">{cat.title}</h4>
                          <ul className="text-sm text-slate-600 space-y-1">
                            {cat.skills.slice(0, 4).map((s, j) => (
                              <li key={j} className="flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-indigo-400" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6">Education</h3>
                    {EDUCATION.map((edu, i) => (
                      <div key={i} className="mb-4">
                        <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                        <p className="text-sm text-indigo-600 font-bold">{edu.institution} | {edu.year}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6">Certifications</h3>
                    <ul className="text-sm text-slate-600 space-y-3">
                      {CERTIFICATIONS.map((cert, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <Award size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                           <span className="font-medium">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-10">
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6">Core Experience</h3>
                  {EXPERIENCES.map((exp, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-slate-100">
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white"></div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                        <span className="text-sm font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded">{exp.duration}</span>
                      </div>
                      <p className="text-indigo-600 font-bold mb-4 uppercase text-sm tracking-widest">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((res, j) => (
                          <li key={j} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                             <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></div>
                             {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
             <button 
              onClick={handleDownload}
              className={`${popButtonStyle} bg-white text-slate-900 px-12 py-5 rounded-xl font-black text-xl flex items-center gap-3 hover:bg-slate-50 border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all uppercase tracking-widest`}
            >
              <FileText size={24} className="text-indigo-600" />
              Download Official CV
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <SectionHeading title="Let's Build Better Systems" light />
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Ready to lead your next quality transformation or manage plant operations to the highest industrial standards.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:shekharkumar55@gmail.com" className="bg-white/10 hover:bg-white hover:text-indigo-600 p-6 rounded-2xl border border-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 group">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-lg">Email Me</div>
              <div className="text-indigo-200 group-hover:text-indigo-500 text-sm break-all">shekharkumar55@gmail.com</div>
            </a>
            
            <a href="tel:+919712404843" className="bg-white/10 hover:bg-white hover:text-indigo-600 p-6 rounded-2xl border border-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 group">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-lg">Call Me</div>
              <div className="text-indigo-200 group-hover:text-indigo-500 text-sm">+91- 97 12 40 48 43</div>
            </a>
            
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-lg">Address</div>
              <div className="text-indigo-200 text-sm">Hoshiarpur, India</div>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex justify-center mb-4">
                <Globe className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-lg">Preferred Location</div>
              <div className="text-indigo-200 text-sm italic">Anywhere in India</div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <button 
              onClick={handleDownload}
              className={`${popButtonStyle} bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-slate-50 border border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all`}
            >
              <Download size={20} className="text-indigo-600" />
              Download Full Resume (PDF)
            </button>
            <div className="flex items-center gap-4">
               <span className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Connect:</span>
               <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 cursor-pointer transition-all transform hover:scale-110 active:scale-95 border border-white/20">
                   <span className="font-bold text-sm">IN</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-slate-500 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <ShieldCheck className="w-6 h-6 text-indigo-500" />
            <span className="text-xl font-bold text-white tracking-tight">
              MECH<span className="text-indigo-500">ENG</span>.
            </span>
          </div>
          <p className="font-medium text-slate-300 mb-2 uppercase tracking-widest">Shekhar Kumar</p>
          <p>© {new Date().getFullYear()} Mechanical Excellence Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2 italic">Built for Leadership Roles in Automotive & Industrial Excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
