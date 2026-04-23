import { 
  Terminal, 
  Database, 
  Server, 
  BarChart3, 
  Code2, 
  Building2, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skills = [
  {
    title: 'Backend Dev',
    icon: Server,
    techs: ['Python', 'Flask', 'C#', 'RESTful APIs']
  },
  {
    title: 'Enterprise Apps',
    icon: Building2,
    techs: ['ASP.NET', 'VB.NET', 'WPF Forms', 'Legacy Modernization']
  },
  {
    title: 'Databases',
    icon: Database,
    techs: ['MS SQL Server', 'MySQL', 'Database Design', 'Optimization']
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    techs: ['Google BigQuery', 'Data Pipelines', 'Real-time Reporting']
  }
];

export const experience = [
  {
    role: 'Senior Software Developer',
    company: 'Primer Group of Companies',
    period: 'Present',
    description: 'Spearheading core enterprise systems, integrating complex APIs, and optimizing data workflows using BigQuery and Python.',
    current: true
  },
  {
    role: 'Software Developer',
    company: 'Enterprise Tech Solutions',
    period: '2018 - 2022',
    description: 'Maintained scalable ASP.NET applications, managed MS SQL databases, and improved processing times by 40%.',
    current: false
  },
  {
    role: 'Application Developer',
    company: 'Systems Core Inc.',
    period: '2015 - 2018',
    description: 'Built robust internal business tools using C#, VB.NET, and WPF Forms. Automated manual business operations.',
    current: false
  }
];

export const projects = [
  {
    title: 'Enterprise Inventory System',
    description: 'Centralized inventory tracking system for retail logistics. Streamlined warehouse operations and reduced discrepancies by 35%.',
    tech: ['C#', 'ASP.NET', 'MS SQL Server']
  },
  {
    title: 'E-Commerce API Backend',
    description: 'High-performance RESTful API powering a multi-regional e-commerce platform. Handles 10k+ daily concurrent requests.',
    tech: ['Python', 'Flask', 'MySQL']
  },
  {
    title: 'BigQuery Analytics Dashboard',
    description: 'Automated data pipeline for real-time reporting. Reduced report generation time from 3 days to under 5 minutes.',
    tech: ['Python', 'BigQuery', 'Pipelines']
  },
  {
    title: 'Internal HR & Payroll System',
    description: 'Secure enterprise-grade desktop application for payroll and benefits management. Saved 20 hours/week for HR.',
    tech: ['VB.NET', 'WPF', 'MS SQL Server']
  }
];
