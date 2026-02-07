// --- DATA ---
const PROJECTS = [
  {
    id: 'macroflow',
    title: 'MacroFlow System',
    role: 'Lead Engineer & Developer',
    category: 'Commercial',
    description: 'Engineered a commercial macropad ecosystem integrating hardware and software functionality. Designed custom PCB and optimized C++ firmware compliant with QMK standards. Developed a desktop application for seamless hardware-to-OS interaction; managed product lifecycle from prototype to market release.',
    tags: ['C++', 'QMK Firmware', 'PCB Design', 'Desktop App'],
    link: 'https://macroflow.info'
  },
  {
    id: 'steglens',
    title: 'Steglens',
    role: 'Full Stack Security Developer',
    category: 'Academic',
    description: 'Built a secure web application for concealed data exchange using steganography. Integrated Python scripts with a web interface for encrypted image data processing. Implemented AES-128 encryption and custom steganography algorithms; deployed live via Render.',
    tags: ['Python', 'AES-128', 'Steganography', 'Full Stack'],
    link: 'https://steglens.online'
  },
  {
    id: 'phoenix',
    title: 'Phoenix-Pub',
    role: 'System Architect',
    category: 'Commercial',
    description: 'Designed and deployed a digital publishing platform with a secure Python (Flask) admin interface. Implemented authentication protocols and database logic; managed cloud deployment on Hetzner.',
    tags: ['Python', 'Flask', 'Hetzner', 'Database Design'],
    link: 'https://phoenix-pub.com'
  }
];

const EXPERIENCES = [
  {
    id: 'crystel',
    title: 'Customer Support Representative',
    company: 'CRYSTEL',
    location: 'Amman, Jordan',
    period: 'Feb 2022 – Jun 2022',
    description: 'High-volume problem solving and crisis management for large scale customer inquiries.',
    tags: ['Crisis Management', 'Customer Handling', 'Problem Solving']
  },
  {
    id: 'it-security',
    title: 'Cybersecurity Intern',
    company: 'IT SECURITY C&T',
    location: 'Amman, Jordan',
    period: 'Jun 2025 - Sep 2025',
    description: 'Conducted SOC monitoring and network defense operations. Performed ethical hacking and vulnerability assessments to mitigate security risks. Gained hands-on experience in Digital Forensics and Governance, Risk, and Compliance (GRC).',
    tags: ['SOC Monitoring', 'Ethical Hacking', 'Forensics']
  }
];

const SKILLS = {
  technical: ['Python', 'Java', 'C++', 'HTML/CSS', 'Ubuntu', 'Wireshark', 'QMK Firmware', 'Kali Linux', 'Splunk SOC'],
  soft: ['Teamwork & Collaboration', 'High-Volume Problem Solving', 'Working Under Stress', 'Effective Communication', 'Customer Handling']
};

const SOCIALS = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/malik-khelfah' },
  { label: 'GitHub', url: 'https://github.com/wmalikkh' },
  { label: 'Telegram', url: 'https://t.me/WMALIK_KH' },
  { label: 'Instagram', url: 'https://www.instagram.com/wmalik_kh' },
  { label: 'X', url: 'https://x.com/malikkhelfah' }
];

// --- UI HELPERS ---
function renderProjects() {
  const container = document.getElementById('projects-grid');
  const countEl = document.getElementById('project-count');
  if (!container || !countEl) return;

  countEl.textContent = `Active Count: 0${PROJECTS.length}`;
  
  container.innerHTML = PROJECTS.map(p => `
    <a href="${p.link}" target="_blank" class="group flex flex-col h-full">
      <div class="relative p-10 bg-zinc-900 border border-white/5 rounded-[40px] transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-600/10 card-glow h-full flex flex-col overflow-hidden">
        <div class="flex justify-between items-start mb-12">
          <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:text-white group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-500">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <span class="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-500">${p.category}</span>
        </div>
        <div class="flex-1">
          <h3 class="text-3xl font-black mb-2 group-hover:text-violet-400 transition-colors tracking-tighter uppercase">${p.title}</h3>
          <p class="text-xs font-black text-violet-500 uppercase tracking-widest mb-6">${p.role}</p>
          <p class="text-zinc-500 text-sm leading-relaxed mb-10 font-medium group-hover:text-zinc-300 transition-colors">${p.description}</p>
        </div>
        <div class="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
          ${p.tags.map(tag => `<span class="text-[9px] font-black uppercase tracking-wider text-zinc-400 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 group-hover:border-violet-500/30 group-hover:bg-violet-500/5 group-hover:text-violet-300">${tag}</span>`).join('')}
        </div>
      </div>
    </a>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = `
    <div class="md:col-span-8 p-10 bg-zinc-900/40 border border-white/5 rounded-[40px] relative overflow-hidden group min-h-[400px]">
      <h3 class="text-2xl font-black mb-8 flex items-center gap-4 uppercase tracking-tighter">
        <span class="w-3 h-3 rounded-full bg-violet-500"></span>
        Technical Skills
      </h3>
      <div class="flex flex-wrap gap-4">
        ${SKILLS.technical.map(skill => `
          <div class="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold hover:bg-violet-600 hover:text-white hover:border-violet-400 transition-all cursor-default">
            ${skill}
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="md:col-span-4 p-10 bg-violet-600 rounded-[40px] shadow-2xl shadow-violet-600/20 flex flex-col justify-between group transition-all duration-500 hover:scale-[1.02]">
      <div>
        <h3 class="text-2xl font-black mb-8 text-white uppercase tracking-tighter">Soft Skills</h3>
        <div class="space-y-6">
          ${SKILLS.soft.map(skill => `
            <div class="flex items-center gap-4 text-white/90">
              <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span class="text-sm font-black uppercase tracking-tight">${skill}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="pt-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Core Capabilities</div>
    </div>
  `;
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  container.innerHTML = `
    <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-[4px] md:-translate-x-1/2 bg-gradient-to-b from-violet-400 via-violet-600/50 to-violet-900/0 rounded-full"></div>
    <div class="grid md:grid-cols-2 gap-x-16 gap-y-12 relative">
      ${EXPERIENCES.map((exp, index) => {
        const isRight = index % 2 === 0;
        return `
          <div class="relative pl-12 md:pl-0 group transition-all duration-700 ${isRight ? 'md:col-start-2 md:pl-16' : 'md:col-start-1 md:pr-16 md:text-right'}">
            <div class="absolute w-4 h-4 rounded-full bg-violet-600 shadow-lg shadow-violet-600/40 border-2 border-black z-10 transition-all duration-500 group-hover:scale-150 ${isRight ? 'left-[-6px] md:left-[-10px] top-10' : 'left-[-6px] md:left-auto md:right-[-10px] top-10'}"></div>
            <div class="p-10 bg-zinc-900/50 border border-white/5 rounded-[32px] hover:border-violet-500/20 hover:bg-zinc-900 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-900/10">
              <div class="flex flex-col justify-between items-start gap-4 mb-6 ${!isRight ? 'md:items-end' : ''}">
                <div class="${!isRight ? 'md:text-right' : ''}">
                  <h3 class="text-2xl font-black group-hover:text-violet-400 transition-colors tracking-tight uppercase mb-2 leading-none">${exp.title}</h3>
                  <p class="text-violet-500 font-bold text-sm tracking-tight uppercase flex items-center gap-2 ${!isRight ? 'md:flex-row-reverse' : ''}">
                    ${exp.company} <span class="w-1 h-1 rounded-full bg-zinc-700"></span> <span class="text-zinc-500 normal-case font-medium">${exp.location}</span>
                  </p>
                </div>
                <div class="text-[11px] font-black uppercase tracking-widest text-zinc-500 bg-white/5 px-4 py-2 rounded-xl border border-white/5">${exp.period}</div>
              </div>
              <p class="text-zinc-400 text-base leading-relaxed mb-8 font-medium ${!isRight ? 'md:text-right' : ''}">${exp.description}</p>
              <div class="flex flex-wrap gap-2 ${!isRight ? 'md:justify-end' : ''}">
                ${exp.tags.map(t => `<span class="text-[10px] font-black uppercase tracking-[0.1em] text-zinc-500 bg-black/40 px-3 py-2 rounded-lg border border-white/5 transition-colors group-hover:text-violet-300">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderSocials() {
  const container = document.getElementById('social-links');
  if (!container) return;
  container.innerHTML = SOCIALS.map(s => `
    <a href="${s.url}" target="_blank" class="group px-8 py-4 bg-zinc-900 border border-white/10 rounded-2xl hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 flex items-center shadow-lg hover:shadow-[0_10px_40px_-15px_rgba(139,92,246,0.25)] hover:border-violet-500/40">
      <span class="text-sm font-black uppercase tracking-widest">${s.label}</span>
    </a>
  `).join('');
}

// --- INTERACTIVITY ---
function setupNavbar() {
  const nav = document.getElementById('main-nav');
  const innerNav = nav?.querySelector('nav');
  const links = document.querySelectorAll('.nav-link, .mobile-nav-link, .scroll-link');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 50;
    if (nav && innerNav) {
      if (isScrolled) {
        nav.classList.replace('pt-8', 'pt-6');
        innerNav.classList.add('bg-black/60', 'backdrop-blur-2xl', 'border-white/10', 'shadow-2xl', 'py-3', 'px-6');
        innerNav.classList.remove('bg-transparent', 'border-transparent', 'py-2', 'px-2');
      } else {
        nav.classList.replace('pt-6', 'pt-8');
        innerNav.classList.remove('bg-black/60', 'backdrop-blur-2xl', 'border-white/10', 'shadow-2xl', 'py-3', 'px-6');
        innerNav.classList.add('bg-transparent', 'border-transparent', 'py-2', 'px-2');
      }
    }

    // Active link highlighting
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
    sections.forEach(s => {
      const el = document.getElementById(s);
      if (el) {
        const rect = el.getBoundingClientRect();
        const activeLink = document.querySelector(`.nav-link[href="#${s}"]`);
        if (rect.top <= 150 && rect.bottom >= 150) {
          activeLink?.classList.add('text-violet-400', 'bg-violet-500/10');
          activeLink?.classList.remove('text-zinc-500');
        } else {
          activeLink?.classList.remove('text-violet-400', 'bg-violet-500/10');
          activeLink?.classList.add('text-zinc-500');
        }
      }
    });
  });

  mobileToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  links.forEach(l => {
    l.addEventListener('click', (e) => {
      e.preventDefault();
      const id = l.getAttribute('href')?.substring(1);
      const target = document.getElementById(id || '');
      if (target) {
        const offset = 100;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        mobileMenu?.classList.add('hidden');
      }
    });
  });
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  renderExperience();
  renderSocials();
  setupNavbar();
});
