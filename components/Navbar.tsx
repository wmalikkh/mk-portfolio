
import React, { useState, useEffect } from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-9 h-9" }) => (
  <div className={`relative ${className} group`}>
    <div className="absolute inset-0 bg-violet-600 rounded-xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
    <div className="relative w-full h-full bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center border border-white/20 shadow-xl overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
        <path d="M15 25h15l10 25 10-25h15v50H50V45l-10 25-10-25v30H15V25z M65 25h10v20l10-20h12L82 42l15 33H85l-10-22v22h-10V25z" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
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
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 ${isScrolled ? 'pt-6' : 'pt-8'}`}>
      <nav className={`max-w-5xl mx-auto transition-all duration-500 rounded-2xl border ${isScrolled ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl py-3 px-6' : 'bg-transparent border-transparent py-2 px-2'}`}>
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-4 group" onClick={(e) => handleNavClick(e, '#')}>
            <Logo />
            <span className="font-black text-lg tracking-tighter hidden sm:block uppercase">Malik Khelfah</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${activeSection === link.id ? 'text-violet-400 bg-violet-500/10' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="w-px h-4 bg-white/10 mx-2"></div>
            <a 
              href="Malik_Khelfah_CV.pdf" 
              target="_blank" 
              className="px-5 py-2 rounded-lg bg-white text-black text-[11px] font-black uppercase tracking-widest hover:bg-violet-500 hover:text-white transition-all shadow-lg"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-6 right-6 bg-zinc-900 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-3xl animate-in fade-in zoom-in duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              className={`text-xl font-black uppercase tracking-tighter ${activeSection === link.id ? 'text-violet-500' : 'text-zinc-500'}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
