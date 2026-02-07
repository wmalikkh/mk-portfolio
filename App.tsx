import React from 'react';
import Navbar from './components/Navbar';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';

const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <div className={`relative ${className}`}>
    <div className="relative w-full h-full bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center border border-white/20 shadow-lg overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-5 h-5 fill-white">
        <path d="M15 25h15l10 25 10-25h15v50H50V45l-10 25-10-25v30H15V25z M65 25h10v20l10-20h12L82 42l15 33H85l-10-22v22h-10V25z" />
      </svg>
    </div>
  </div>
);

const App: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen engineering-grid selection:bg-violet-500/30">
      <Navbar />
      
      {/* Hero: High-Impact Entrance */}
      <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-violet-400 text-[10px] font-black tracking-[0.2em] uppercase mb-12 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            System Architect & Junior Software Engineer · Cybersecurity
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-10 text-glow">
            Crafting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-white to-indigo-400">Digital Spine.</span>
          </h1>
          
          <p className="max-w-3xl text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-14">
            Building <span className="text-white">scalable software systems</span> with a focus on <span className="text-white">performance</span>, <span className="text-white">security</span>, and <span className="text-white">clean architecture</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="group px-10 py-5 bg-violet-600 hover:bg-violet-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-violet-600/30 active:scale-95 flex items-center gap-3"
            >
              Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl transition-all backdrop-blur-sm active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About: Professional Profile */}
      <section id="about" className="py-32 px-6 scroll-mt-24 border-y border-white/5 relative bg-zinc-950/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Securing <span className="text-violet-500">Scale.</span></h2>
              <p className="text-zinc-400 text-xl font-medium leading-relaxed max-w-xl">
                I am a results-driven engineer specializing in the design of secure, resilient systems. My foundation in <span className="text-white">Cybersecurity</span> allows me to architect hardware and software that is engineered for production-grade reliability.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl">
                <div className="text-violet-500 font-black text-xs uppercase tracking-widest mb-2">Education</div>
                <div className="text-lg font-bold">BSc. Cybersecurity & Cloud</div>
                <div className="text-zinc-500 text-sm">Applied Science Univ. (Jan 2026)</div>
              </div>
              <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl">
                <div className="text-violet-500 font-black text-xs uppercase tracking-widest mb-2">Location</div>
                <div className="text-lg font-bold">Amman, Jordan</div>
                <div className="text-zinc-500 text-sm">Open to Remote / Reloc.</div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-violet-600 rounded-3xl p-8 flex flex-col justify-end group transition-all hover:-translate-y-2">
              <span className="text-5xl font-black text-white">001</span>
              <span className="text-xs font-black uppercase tracking-widest text-white/70">Architectural Layer</span>
            </div>
            <div className="aspect-square bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-end transition-all hover:-translate-y-2">
              <span className="text-5xl font-black text-white">4+</span>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Major Solutions</span>
            </div>
            <div className="col-span-2 p-8 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-between transition-all hover:-translate-y-2 group">
              <div>
                <span className="block text-2xl font-black tracking-tighter uppercase leading-tight">Junior Software Engineer · Cybersecurity</span>
                <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Core Expertise</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">My <span className="text-violet-500">Skills</span>.</h2>
            <p className="text-zinc-500 max-w-xl">Deep technical expertise across the entire hardware-software spectrum.</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 p-10 bg-zinc-900/40 border border-white/5 rounded-[40px] relative overflow-hidden group min-h-[400px]">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4 uppercase tracking-tighter">
                <span className="w-3 h-3 rounded-full bg-violet-500"></span>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.technical.map(skill => (
                  <div key={skill} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold hover:bg-violet-600 hover:text-white hover:border-violet-400 transition-all cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-4 p-10 bg-violet-600 rounded-[40px] shadow-2xl shadow-violet-600/20 flex flex-col justify-between group transition-all duration-500 hover:scale-[1.02]">
              <div>
                <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-tighter">Soft Skills</h3>
                <div className="space-y-6">
                  {SKILLS.soft.map(skill => (
                    <div key={skill} className="flex items-center gap-4 text-white/90">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm font-black uppercase tracking-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Core Capabilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 scroll-mt-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">My <span className="text-violet-500">Projects</span>.</h2>
              <p className="text-zinc-500">Software and hardware architectures I personally designed and engineered.</p>
            </div>
            <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-500">
              Active Count: 0{PROJECTS.length}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <a key={project.id} href={project.link} target="_blank" className="group flex flex-col">
                <div className="relative p-10 bg-zinc-900 border border-white/5 rounded-[40px] transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-600/10 card-glow h-full flex flex-col overflow-hidden">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:text-white group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-500">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-500">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-black mb-2 group-hover:text-violet-400 transition-colors tracking-tighter uppercase">{project.title}</h3>
                    <p className="text-xs font-black text-violet-500 uppercase tracking-widest mb-6">{project.role}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-medium group-hover:text-zinc-300 transition-colors">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[9px] font-black uppercase tracking-wider text-zinc-400 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 transition-all duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/5 group-hover:text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 scroll-mt-24 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Experience.</h2>
            <p className="text-zinc-500 italic font-mono text-sm">/ PROFESSIONAL_HISTORY</p>
          </div>
          
          <div className="relative">
            {/* Spine Vertical Line: Center on Desktop, Left on Mobile */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[4px] md:-translate-x-1/2 bg-gradient-to-b from-violet-400 via-violet-600/50 to-violet-900/0 rounded-full"></div>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 relative">
              {EXPERIENCES.map((exp, index) => {
                const isFirst = index === 0; // Customer Support
                const isSecond = index === 1; // Cybersecurity Intern
                
                return (
                  <div 
                    key={exp.id} 
                    className={`relative pl-12 md:pl-0 group transition-all duration-700 ${
                      isFirst ? 'md:col-start-2 md:pl-16' : 'md:col-start-1 md:pr-16 md:text-right'
                    }`}
                  >
                    {/* Dot Indicator */}
                    <div className={`absolute w-4 h-4 rounded-full bg-violet-600 shadow-lg shadow-violet-600/40 border-2 border-black z-10 transition-all duration-500 group-hover:scale-150 ${
                      isFirst 
                      ? 'left-[-6px] md:left-[-10px] top-10' 
                      : 'left-[-6px] md:left-auto md:right-[-10px] top-10'
                    }`}></div>
                    
                    <div className="p-10 bg-zinc-900/50 border border-white/5 rounded-[32px] hover:border-violet-500/20 hover:bg-zinc-900 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-900/10">
                      <div className={`flex flex-col justify-between items-start gap-4 mb-6 ${!isFirst && 'md:items-end'}`}>
                        <div className={`${!isFirst && 'md:text-right'}`}>
                          <h3 className="text-2xl font-black group-hover:text-violet-400 transition-colors tracking-tight uppercase leading-none mb-2">{exp.title}</h3>
                          <p className={`text-violet-500 font-bold text-sm tracking-tight uppercase flex items-center gap-2 ${!isFirst && 'md:flex-row-reverse'}`}>
                            {exp.company}
                            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                            <span className="text-zinc-500 normal-case font-medium">{exp.location}</span>
                          </p>
                        </div>
                        <div className="text-[11px] font-black uppercase tracking-widest text-zinc-500 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className={`text-zinc-400 text-base leading-relaxed mb-8 font-medium ${!isFirst && 'md:text-right ml-auto'}`}>
                        {exp.description}
                      </p>
                      
                      <div className={`flex flex-wrap gap-2 ${!isFirst && 'md:justify-end'}`}>
                        {exp.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-black uppercase tracking-[0.1em] text-zinc-500 bg-black/40 px-3 py-2 rounded-lg border border-white/5 transition-colors group-hover:text-violet-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 border-t border-white/5 scroll-mt-24 relative overflow-hidden text-center">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-600/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-tight uppercase">Get in touch.</h2>
          
          <div className="mb-10 group">
            <a href="mailto:malik.khelfah.it@gmail.com" className="inline-block text-xl md:text-2xl font-black text-white hover:text-violet-400 transition-all duration-500 hover:scale-105 underline underline-offset-8 decoration-violet-500/50">
              malik.khelfah.it@gmail.com
            </a>
          </div>

          <p className="text-zinc-500 text-xl font-medium mb-16 max-w-2xl leading-relaxed">
            Ready to build something remarkable? I'm currently seeking engineering roles where I can architect scalable systems and push the boundaries of software performance.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            {[
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/malik-khelfah' },
              { label: 'GitHub', url: 'https://github.com/wmalikkh' },
              { label: 'Telegram', url: 'https://t.me/WMALIK_KH' },
              { label: 'Instagram', url: 'https://www.instagram.com/wmalik_kh' },
              { label: 'X', url: 'https://x.com/malikkhelfah' }
            ].map((link) => (
              <a 
                key={link.label}
                href={link.url} 
                target="_blank" 
                className="group px-8 py-4 bg-zinc-900 border border-white/10 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 flex items-center shadow-lg hover:shadow-[0_10px_40px_-15px_rgba(139,92,246,0.25)] hover:border-violet-500/40"
              >
                <span className="text-sm font-black uppercase tracking-widest">{link.label}</span>
              </a>
            ))}
          </div>
          
          <footer className="w-full pt-16 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-8 text-zinc-600">
            <div className="flex items-center gap-4">
              <Logo />
              <p className="text-[10px] font-black uppercase tracking-[0.4em]">© 2026 MALIK KHELFAH // ENGINEERED FOR RESILIENCE</p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default App;