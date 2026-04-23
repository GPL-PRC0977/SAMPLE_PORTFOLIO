import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { navigation, skills, experience, projects } from './constants';

const SectionHeader = ({ id, number, title }: { id: string; number: string; title: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-12"
    id={id}
  >
    <div className="micro-label mb-2 text-[#3B82F6]">Section {number}</div>
    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{title}</h2>
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc] selection:bg-blue-500/30 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono font-bold text-2xl tracking-tighter text-[#3B82F6]"
          >
            &lt;GL /&gt;
          </motion.div>

          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 hover:text-[#3B82F6] transition-colors"
              >
                <span className="text-white/40 mr-2">{`0${i + 1}.`}</span>
                {item.name}
              </motion.a>
            ))}
          </div>

          <button 
            className="md:hidden text-slate-400 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center space-y-10 md:hidden"
          >
            {navigation.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-black uppercase tracking-tighter text-white hover:text-[#3B82F6] transition-colors"
              >
                <span className="text-[#3B82F6] font-mono text-xl mr-4">{`0${i + 1}.`}</span>
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="px-8">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#3B82F6] font-mono text-xs mb-6 uppercase tracking-[0.2em] font-bold"
              >
                Senior Software Developer
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="hero-text mb-12 uppercase"
              >
                Gilbert P.<br/>Laman
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-xl text-xl md:text-2xl text-slate-400 leading-relaxed border-l-4 border-[#3B82F6] pl-8 py-3 mb-12"
              >
                Architecting robust enterprise solutions and scalable backend APIs with <span className="text-white font-black italic">9+ years</span> of engineering experience.
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#projects" 
                  className="bg-[#3B82F6] hover:bg-blue-600 text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all"
                >
                  View Work
                </a>
                <a 
                  href="#contact" 
                  className="border border-slate-800 hover:border-[#3B82F6] text-slate-400 hover:text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all"
                >
                  Contact
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, rotate: 5 }}
              animate={{ opacity: 1, rotate: 0 }}
              className="hidden md:block md:col-span-4"
            >
              <div className="font-mono text-[200px] font-black text-white/[0.03] select-none leading-none">
                GL
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4">
              <SectionHeader id="about-header" number="01" title="Profile" />
            </div>
            <div className="md:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8 text-slate-400 leading-relaxed text-xl font-medium"
              >
                <p>
                  I am a <span className="text-white font-bold">Senior Software Developer</span> currently driving system innovation at the <span className="text-[#3B82F6] font-black uppercase tracking-tighter">Primer Group of Companies</span>. 
                </p>
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                  <div>
                    <div className="micro-label mb-2">Focus</div>
                    <div className="text-white text-base">Backend Architecture & Data Ops</div>
                  </div>
                  <div>
                    <div className="micro-label mb-2">Tenure</div>
                    <div className="text-white text-base">9+ Years Professional Engineering</div>
                  </div>
                </div>
                <p>
                  My specialization lies in building robust backend infrastructures, legacy system modernization, and complex database management. From Python APIs to Google BigQuery pipelines, I build solutions that scale.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="skills-header" number="02" title="Engineering" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-white/5">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 border-white/5 sm:border-r last:border-r-0 border-b sm:even:border-r-0 lg:even:border-r hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="text-[#3B82F6] mb-8 group-hover:scale-110 transition-transform duration-500">
                    <skill.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xs uppercase tracking-widest font-black text-white mb-6 underline decoration-[#3B82F6] decoration-2 underline-offset-8">{skill.title}</h3>
                  <ul className="space-y-4">
                    {skill.techs.map((tech) => (
                      <li key={tech} className="text-xs font-mono text-slate-500 uppercase tracking-wider group-hover:text-slate-300 transition-colors">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <SectionHeader id="exp-header" number="03" title="Trajectory" />
            </div>
            <div className="md:col-span-8 space-y-16">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-black text-white uppercase group-hover:text-[#3B82F6] transition-colors">{exp.role}</h3>
                    <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#3B82F6] font-mono text-sm uppercase tracking-widest mb-6 px-3 py-1 border border-[#3B82F6]/20 bg-[#3B82F6]/5 w-fit">
                    {exp.company}
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-2xl border-l-2 border-white/5 pl-8 italic">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeader id="projects-header" number="04" title="Work" />
            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#050505] p-12 hover:bg-white/[0.02] transition-all flex flex-col relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="text-8xl font-black font-mono tracking-tighter">0{index + 1}</div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="micro-label mb-6 text-[#3B82F6]">Featured Project</div>
                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-slate-600 uppercase tracking-widest py-1 border-b border-white/10 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-all">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 border-t border-white/5 items-center justify-center">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-20">
            <div className="md:col-span-5">
              <SectionHeader id="contact-header" number="05" title="Connect" />
              <p className="text-slate-400 text-xl leading-relaxed mb-12 italic">
                Let's discuss robust enterprise solutions. Currently accepting selected engineering inquiries.
              </p>
              <div className="space-y-8">
                <a href="mailto:gilbert.laman@primergrp.com" className="group flex items-center gap-6">
                  <div className="p-4 bg-white/5 border border-white/10 group-hover:border-[#3B82F6] transition-all">
                    <Mail className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <span className="text-white font-mono text-xs uppercase tracking-widest group-hover:text-[#3B82F6] transition-colors">gilbert.laman@primergrp.com</span>
                </a>
                <div className="flex gap-4">
                  <a href="#" className="p-5 bg-white/5 border border-white/10 hover:border-[#3B82F6] text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-5 bg-white/5 border border-white/10 hover:border-[#3B82F6] text-white transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-[#0f172a] p-10 md:p-16 border border-white/5">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="micro-label">Identity</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="YOUR_NAME"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="micro-label">Channel</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="EMAIL_ADDRESS"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="micro-label">Transmission</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                    placeholder="ENTER_MESSAGE..."
                  />
                </div>
                <button type="button" className="bg-[#3B82F6] hover:bg-blue-600 text-white font-black py-6 px-12 text-xs uppercase tracking-[0.3em] transition-all w-full md:w-fit">
                  Execute Transmission
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-16 border-t border-white/10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <h4 className="micro-label mb-6">Core Engineering Stack</h4>
            <div className="flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs text-[#3B82F6] uppercase font-bold">
              <span className="hover:text-white transition-colors cursor-default">Python / Flask</span>
              <span className="hover:text-white transition-colors cursor-default">C# / .NET Core</span>
              <span className="hover:text-white transition-colors cursor-default">SQL Server</span>
              <span className="hover:text-white transition-colors cursor-default">BigQuery</span>
              <span className="hover:text-white transition-colors cursor-default">WPF Forms</span>
            </div>
          </div>
          <div className="text-left md:text-right space-y-2">
            <p className="text-[10px] text-slate-600 font-mono tracking-tighter">GL_PORTFOLIO_V2.0.24</p>
            <p className="text-[10px] text-slate-700 font-mono">GILBERT P. LAMAN &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
