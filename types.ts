
export interface Achievement {
  id: string;
  metric: string;
  label: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  tools: string[];
  action: string;
  result: string;
  benefit: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
