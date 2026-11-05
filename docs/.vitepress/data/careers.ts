export interface Career {
  id: string
  title: string
  category: 'Build' | 'Data' | 'Trust' | 'Strategy'
  type: 'Established occupation' | 'Emerging title'
  summary: string
  skills: string[]
  growth: number | null
  growthLabel: string
  link: string
}

export const careers: Career[] = [
  {
    id: 'ml-engineer',
    title: 'AI / Machine Learning Engineer',
    category: 'Build',
    type: 'Emerging title',
    summary: 'Turn trained models into useful, tested systems that solve real problems.',
    skills: ['Python', 'Machine learning', 'APIs', 'Evaluation'],
    growth: null,
    growthLabel: 'Employer demand signal',
    link: '/careers#ml-engineer'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Data',
    type: 'Established occupation',
    summary: 'Analyze data, test ideas, and explain what a model can reliably predict.',
    skills: ['Statistics', 'Python', 'SQL', 'Communication'],
    growth: 35,
    growthLabel: 'BLS · U.S. · 2025–35',
    link: '/careers#data-scientist'
  },
  {
    id: 'research-scientist',
    title: 'Computer & Information Research Scientist',
    category: 'Build',
    type: 'Established occupation',
    summary: 'Investigate new computing methods, including AI, through rigorous experiments.',
    skills: ['Algorithms', 'Mathematics', 'Experiments', 'Research writing'],
    growth: 22,
    growthLabel: 'BLS · broad U.S. occupation · 2025–35',
    link: '/careers#research-scientist'
  },
  {
    id: 'mlops-engineer',
    title: 'MLOps / AI Platform Engineer',
    category: 'Build',
    type: 'Emerging title',
    summary: 'Keep models reproducible, deployable, monitored, and dependable in production.',
    skills: ['Linux', 'CI/CD', 'Containers', 'Monitoring'],
    growth: null,
    growthLabel: 'Specialization · no separate forecast',
    link: '/careers#mlops-engineer'
  },
  {
    id: 'ai-security-engineer',
    title: 'AI Security Engineer',
    category: 'Trust',
    type: 'Emerging title',
    summary: 'Identify threats to AI applications and test controls that protect systems and data.',
    skills: ['Threat modeling', 'App security', 'Python', 'Adversarial testing'],
    growth: null,
    growthLabel: 'Specialization · no separate forecast',
    link: '/careers#ai-security-engineer'
  },
  {
    id: 'ai-product-manager',
    title: 'AI Product Manager',
    category: 'Strategy',
    type: 'Emerging title',
    summary: 'Connect user needs, model limitations, and measurable product outcomes.',
    skills: ['User research', 'Product strategy', 'AI literacy', 'Metrics'],
    growth: null,
    growthLabel: 'Evolving role · no separate forecast',
    link: '/careers#ai-product-manager'
  },
  {
    id: 'ai-governance-specialist',
    title: 'AI Risk & Governance Specialist',
    category: 'Trust',
    type: 'Emerging title',
    summary: 'Document AI risks, coordinate reviews, and help teams make accountable decisions.',
    skills: ['Risk assessment', 'Documentation', 'AI literacy', 'Stakeholder communication'],
    growth: null,
    growthLabel: 'Employer demand signal',
    link: '/careers#ai-governance-specialist'
  },
  {
    id: 'software-developer',
    title: 'Software Developer',
    category: 'Build',
    type: 'Established occupation',
    summary: 'Build applications and interfaces, with AI integration as one possible focus.',
    skills: ['JavaScript / TypeScript', 'APIs', 'Testing', 'Accessibility'],
    growth: 10,
    growthLabel: 'BLS · broad U.S. occupation · 2025–35',
    link: '/careers#software-developer'
  }
]
