
import React from 'react';
import { 
  BarChart3, 
  Settings, 
  Users, 
  ShieldCheck, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Award,
  Zap
} from 'lucide-react';
import { Achievement, Experience, Project, SkillCategory } from './types';

export const TAGLINES = [
  "Driving Operational Excellence Through Precision & Six Sigma Leadership.",
  "Transforming Manufacturing Quality: 16+ Years of OEM Excellence.",
  "Strategic Quality Leadership: Bridging Innovation and Industrial Efficiency.",
  "Scalable Quality Systems, Measurable Cost Savings, Global Standards.",
  "Engineering a Culture of Continuous Improvement and Zero-Defect Manufacturing."
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    metric: "4.5σ → 6σ",
    label: "Quality Improvement",
    description: "Shifted production line capability from 4.5 Sigma to 6 Sigma through DMAIC implementation.",
    icon: "Zap"
  },
  {
    id: "2",
    metric: "₹2 Cr+",
    label: "Annual Cost Savings",
    description: "Identified and eliminated non-value-added processes and rework overheads.",
    icon: "BarChart3"
  },
  {
    id: "3",
    metric: "0 Major NCs",
    label: "IATF Excellence",
    description: "Successfully led 5+ ISO/IATF external audits with zero major non-conformities.",
    icon: "ShieldCheck"
  },
  {
    id: "4",
    metric: "75%",
    label: "PPM Reduction",
    description: "Drastically reduced customer-end PPM through advanced in-process quality gates.",
    icon: "Settings"
  },
  {
    id: "5",
    metric: "50+",
    label: "Team Management",
    description: "Directly led multi-disciplinary teams of engineers and QA inspectors across multiple shifts.",
    icon: "Users"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Quality Tools",
    skills: ["Six Sigma (Green/Black Belt)", "PPAP/APQP", "FMEA", "SPC & MSA", "8D Reporting", "Root Cause Analysis (RCA)"]
  },
  {
    title: "Manufacturing & Machining",
    skills: ["Heavy Machining", "CNC/VMC Operations", "Process Planning", "Jig & Fixture Design", "Casting & Forging Quality", "Assembly Line Optimization"]
  },
  {
    title: "Leadership & Management",
    skills: ["Team Mentoring", "KAIZEN Culture", "Lean Manufacturing", "Strategic Resource Planning", "Vendor Quality Management", "Change Management"]
  },
  {
    title: "Software & Systems",
    skills: ["SAP PP/QM", "Minitab (Statistical Software)", "AutoCAD", "MS Office (Expert Excel)", "ERP Integration", "SCADA Basics"]
  },
  {
    title: "Audits & Compliance",
    skills: ["IATF 16949:2016", "ISO 9001:2015", "VDA 6.3 (Process Audit)", "ISO 14001 (EMS)", "EHS Standards", "Customer Audits (OEM)"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Heavy Machining Defect Reduction (Engine Blocks)",
    problem: "High rejection rate (4500 PPM) due to porosity and dimensional inaccuracy in tractor engine blocks.",
    tools: ["DMAIC", "Ishikawa Diagram", "Taguchi Method"],
    action: "Redesigned sand-casting gating system and optimized VMC tool path parameters. Implemented 100% laser scanning at intermediate stages.",
    result: "PPM reduced to 800 within 6 months.",
    benefit: "Direct savings of ₹45 Lakhs per annum in rework and scrap."
  },
  {
    id: "p2",
    title: "In-Process Quality Gate Automation",
    problem: "Manual inspection delays causing bottlenecks in the assembly line (Cycle time: 12 mins).",
    tools: ["4M", "Lean Manufacturing", "Poka-Yoke"],
    action: "Implemented Vision-system based automated inspection for bolt presence and torque verification. Integrated with ERP for real-time data logging.",
    result: "Cycle time reduced to 9.5 mins with 100% defect containment.",
    benefit: "Enhanced throughput by 20% and eliminated human inspection errors."
  },
  {
    id: "p3",
    title: "Vendor Quality Upgradation Program",
    problem: "Top 5 Tier-2 suppliers contributing 60% of incoming quality issues (IATF non-compliance).",
    tools: ["VDA 6.3", "Supplier Audits", "PDCA"],
    action: "Handheld top vendors through a 12-month quality system development program. Provided training on APQP and MSA.",
    result: "Incoming rejection reduced from 8.5% to 1.2%.",
    benefit: "Improved overall supply chain stability and reduced lead times."
  },
  {
    id: "p4",
    title: "Six Sigma Project: Hydraulic Leakage Prevention",
    problem: "Chronic oil leakage issues in high-pressure hydraulic pumps during endurance testing.",
    tools: ["FMEA", "Design of Experiments (DoE)", "Statistical Process Control"],
    action: "Used ANOVA to identify critical seal-groove dimensions. Optimized seal compression ratios and surface finish requirements (Ra 0.4).",
    result: "Achieved Zero-leakage status in final testing (6 Sigma performance).",
    benefit: "Eliminated expensive warranty claims worth ₹80 Lakhs annually."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "Sonalika (ITL - International Tractors Ltd.)",
    role: "Senior Manager - Plant Quality & Manufacturing",
    duration: "Oct. 2024 – Till Date",
    responsibilities: [
      "OEM Excellence: Leading quality assurance for the heavy duty tractor range manufacturing.",
      "Spearheading strategic process improvements in casting and precision machining.",
      "Directing multi-functional teams for 100% compliance with global tractor safety standards.",
      "Implementing real-time data analytics for predictive maintenance of assembly lines."
    ]
  },
  {
    id: "e2",
    company: "Ford India Pvt. Ltd.",
    role: "Chief Manager - Quality Operations",
    duration: "Aug. 2014 – Oct. 2024",
    responsibilities: [
      "OEM Expert: Managed in-process quality for high-volume automotive assembly plants.",
      "Achieved significant PPM reduction and stabilized process capability at 6-Sigma level.",
      "Led robust IATF 16949 audit cycles with zero major findings for 10 consecutive years.",
      "Optimized supplier quality performance through intensive development programs."
    ]
  },
  {
    id: "e3",
    company: "Philips India",
    role: "Senior Quality Specialist (OEM)",
    duration: "Nov. 2013 – Aug. 2014",
    responsibilities: [
      "OEM Focused: Specialized in high-precision manufacturing quality for industrial equipment.",
      "Standardized incoming material inspection protocols reducing supply chain lag.",
      "Conducted detailed failure mode analysis to prevent recurrent electrical component defects."
    ]
  },
  {
    id: "e4",
    company: "Nifco India",
    role: "Quality Assurance Lead (Tier-1)",
    duration: "Sept. 2012 – Nov. 2013",
    responsibilities: [
      "Tier-1 Specialist: Managed quality control for plastic fasteners and interior trim components.",
      "Implemented Poka-Yoke systems on high-speed molding lines.",
      "Coordinated with automotive OEMs for product approvals and engineering changes."
    ]
  },
  {
    id: "e5",
    company: "Sona Comstar",
    role: "Graduate Engineer Trainee - Quality",
    duration: "Jan. 2010 – Aug. 2011",
    responsibilities: [
      "Tier-1 Foundation: Mastered gear machining quality and dimensional metrology.",
      "Assisted in CMM programming and basic statistical process control setup.",
      "Developed basic understanding of 8D methodology and corrective action planning."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "B.E. in Mechanical Engineering",
    institution: "Premier Technical University",
    year: "2007",
    detail: "Graduated with Distinction; Specialized in Production & Manufacturing."
  }
];

export const CERTIFICATIONS = [
  "Six Sigma Black Belt Certified (ASQ/Equivalent)",
  "Lead Auditor - IATF 16949:2016",
  "Certified VDA 6.3 Process Auditor",
  "Lean Manufacturing Specialist Certification",
  "Advanced Metrology & CMM Programming"
];
