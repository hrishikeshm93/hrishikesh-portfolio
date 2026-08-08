import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, Download, Mail, ExternalLink, 
  Linkedin, Twitter, Youtube, Instagram, MapPin, 
  Award, Briefcase, Zap, BrainCircuit, MonitorPlay, 
  Image as ImageIcon, Sparkles, GraduationCap, Users,
  Film, PenTool, Edit3, Monitor, FileSpreadsheet, Phone,
  Trophy, Star, Play
} from 'lucide-react';

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    :root {
      --bg-color: #030712;
      --primary: #3b82f6;
      --secondary: #8b5cf6;
      --accent: #06b6d4;
    }

    body {
      margin: 0;
      padding: 0;
      background-color: var(--bg-color);
      color: #f8fafc;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    h1, h2, h3, h4, h5, h6 {
      color: #f8fafc;
      margin: 0;
    }

    @keyframes aurora {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .bg-aurora {
      background: linear-gradient(
        -45deg, 
        #020617,
        #1e1b4b,
        #0c4a6e,
        #172554,
        #050505
      );
      background-size: 400% 400%;
      animation: aurora 20s ease infinite;
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      z-index: -2;
    }

    .glowing-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      z-index: -1;
      opacity: 0.5;
      animation: float 10s ease-in-out infinite alternate;
    }

    @keyframes float {
      0% { transform: translateY(0) scale(1); }
      100% { transform: translateY(-30px) scale(1.1); }
    }

    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #030712; }
    ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #475569; }

    @media (pointer: fine) {
      body { cursor: none; }
      a, button { cursor: none; }
    }

    .glass-panel {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    .glass-panel-hover:hover {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
    }
      
    .text-gradient {
      background: linear-gradient(to right, #60a5fa, #c084fc, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `}} />
);

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'button' || 
          e.target.tagName.toLowerCase() === 'a' || 
          e.target.closest('button') || 
          e.target.closest('a') ||
          e.target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8, scale: isHovering ? 2 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/30 rounded-full pointer-events-none z-[99998]"
        animate={{
          x: mousePosition.x - 24, y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)'
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

const PremiumPlaceholder = ({ label, icon: Icon = ImageIcon, className = "", aspect = "aspect-video", src }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative group overflow-hidden rounded-2xl glass-panel ${aspect} ${className} cursor-pointer`}
    >
      <div className="absolute inset-[-2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md"></div>
      
      {src ? (
        <>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img src={src} alt={label} className="absolute inset-0 w-full h-full object-cover z-0" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors duration-500 z-10"></div>
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px] z-10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white/60 group-hover:text-white transition-colors duration-300 p-6 text-center">
            <Icon className="w-8 h-8 mb-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform" />
            <span className="text-sm md:text-base font-extrabold tracking-wide uppercase text-white">{label}</span>
            <span className="text-xs opacity-0 group-hover:opacity-80 mt-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-slate-300">Image Area</span>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Navigation = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skill Aura', href: '#skill-aura' },
    { name: 'AI & ICT', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-panel border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white">
            <span className="text-sm">H</span>
          </div>
          Hrishikesh<span className="text-blue-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button onClick={onOpenResume} className="px-5 py-2 rounded-full bg-white text-blue-950 font-extrabold text-sm hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg shadow-white/10 cursor-pointer">
            Resume <Download className="w-4 h-4" />
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel border-t border-white/10 flex flex-col p-6 gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-white p-2"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { setIsOpen(false); onOpenResume(); }}
              className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white font-extrabold text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10 cursor-pointer"
            >
              View Short Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = () => {
  const titles = [
    "Physics Mentor", "AI Trainer", "Technology-Driven Educator",
    "Creative Learning Designer", "Digital Content Creator", "Teacher Mentor"
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel w-fit border-blue-500/30 text-blue-300 text-sm font-semibold">
            <Sparkles className="w-4 h-4" /> Defining the Future of Education
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[1.1]">
            Hrishikesh M.
          </h1>
          
          <div className="h-[40px] md:h-[60px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-extrabold text-gradient"
              >
                {titles[titleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
            Postgraduate Physics Teacher & AI Educator blending deep subject knowledge with cutting-edge digital innovation to transform learning experiences.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-blue-500/30">
              Explore Portfolio <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold transition-colors flex items-center gap-2">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-[80px] -z-10"></div>
          
          <div className="w-full max-w-[450px] aspect-[4/5] relative">
            <motion.img 
              src="https://i.postimg.cc/mkqbYXgC/Chat-GPT-Image-May-17-2026-09-11-10-AM.png"
              alt="Hrishikesh M"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-full object-cover rounded-[2rem] border-2 border-white/20 shadow-[0_0_50px_rgba(59,130,246,0.3)] z-10 relative bg-slate-900"
            />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-panel px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl z-20"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              </div>
              <div>
                <p className="text-sm text-slate-300">Founder</p>
                <p className="font-extrabold text-white">Skill Aura</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase font-semibold text-slate-300">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <PremiumPlaceholder 
              label="Teaching in Classroom" 
              aspect="aspect-square"
              className="rounded-3xl shadow-2xl"
              src="https://i.postimg.cc/KzhkhYP1/IMG-20250814-001244-jpg.jpg"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2">The Narrative</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Bridging the gap between <span className="text-gradient">core physics</span> and <span className="text-gradient">AI innovation</span>.
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
              <p>
                As a passionate <strong className="text-white font-semibold">postgraduate physics teacher</strong>, I believe education is not just about imparting facts but igniting curiosity. My journey is rooted in making complex physical phenomena accessible and engaging.
              </p>
              <p>
                Recognizing the paradigm shift in technology, I evolved into an <strong className="text-white font-semibold">AI & ICT educator</strong>. I seamlessly integrate advanced digital tools into the curriculum, preparing students not just for exams but for the future.
              </p>
              <p>
                This vision led to the creation of <strong className="text-blue-400 font-semibold">Skill Aura</strong>, a platform dedicated to empowering educators and students alike through technology-driven learning design and modern pedagogical strategies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <h4 className="text-4xl font-extrabold text-white mb-2">7+</h4>
                <p className="text-sm text-slate-300 uppercase tracking-wider font-semibold">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-white mb-2">1000+</h4>
                <p className="text-sm text-slate-300 uppercase tracking-wider font-semibold">Students Guided</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceJourney = () => {
  const milestones = [
    { title: "PGT Physics Educator", desc: "7+ years teaching Classes 9-12 at Carmel School, Shoranur (CBSE), plus 6 months prior higher secondary teaching experience.", placeholder: "Physics Laboratory", src: "https://i.postimg.cc/C1ZNm7GX/Chat-GPT-Image-Aug-4-2026-11-49-14-PM.png" },
    { title: "AI & ICT Practitioner", desc: "Actively integrating AI tools, interactive digital resources, and technology-driven pedagogy into daily classroom practice.", placeholder: "AI Workshop", src: "https://i.postimg.cc/13s12nYp/Whats-App-Image-2026-08-04-at-11-13-20-PM.jpg" },
    { title: "Skill Aura Founder", desc: "Spearheading an initiative dedicated to upskilling fellow educators in AI and ICT tools, providing hands-on certifications.", placeholder: "Resource Person Session", src: "https://i.ibb.co/jPL1JQWY/Chat-GPT-Image-Aug-5-2026-12-10-38-AM.png" },
    { title: "Teacher & Student Trainer", desc: "Designing and delivering extensive AI/ICT training sessions and digital literacy workshops for educators, students, and parents.", placeholder: "Teacher Training Session", src: "https://i.postimg.cc/SNtctCKt/Chat-GPT-Image-Aug-5-2026-12-04-30-AM.png" }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-black/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Professional <span className="text-gradient">Journey</span></h2>
      </div>
      
      <div className="flex overflow-x-auto pb-16 px-6 lg:px-12 gap-8 snap-x snap-mandatory hide-scrollbar">
        {milestones.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="min-w-[85vw] md:min-w-[600px] snap-center relative"
          >
            <div className="glass-panel p-8 rounded-3xl h-full flex flex-col group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                  <span className="font-extrabold text-blue-400">0{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-white">{item.title}</h3>
                  <p className="text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <PremiumPlaceholder 
                label={item.placeholder} 
                aspect="aspect-video"
                className="w-full mt-auto"
                src={item.src}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const EducationAndCertifications = () => {
  const education = [
    { degree: "B.Ed. Physical Science", inst: "Ideal Training College, Cherpulassery (Univ. of Calicut)", score: "83%", year: "2019" },
    { degree: "M.Sc. Physics", inst: "The Cochin College, Cochin (MG University)", score: "71.6%", year: "2016" },
    { degree: "B.Sc. Physics", inst: "MPMM SN Trust’s College, Shoranur (Univ. of Calicut)", score: "84.75%", year: "2014" },
  ];

  const certifications = [
    { title: "K-TET & CTET Qualified", desc: "Kerala & Central Teacher Eligibility Tests (2018-2019)" },
    { title: "Generative AI for Educators", desc: "Comprehensive course covering 30+ AI & digital tools" },
    { title: "Experimental Physics", desc: "15-day refresher course by Indian Academy of Science, Goa University" },
    { title: "CWPDE Certification", desc: "Certificate Course in Word Processing & Data Entry, Rutronix, Govt. of Kerala" },
    { title: "ASAP & APTIS", desc: "15-day Additional Skill Acquisition Program (Govt. of Kerala) & British Council APTIS" },
    { title: "SWAYAM & DIKSHA", desc: "Class 11 Physics & numerous continuous learning pedagogical courses" },
    { title: "NCC 'C' Certificate", desc: "National Cadet Corps Advanced Certification" }
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-4">Academic Background</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Qualifications & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col gap-6">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative glass-panel p-6 rounded-2xl border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group"
              >
                <div className="absolute top-0 right-0 bg-blue-500/20 text-blue-300 text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl backdrop-blur-md border-b border-l border-blue-500/20">
                  {edu.year}
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:scale-110 transition-all flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-extrabold text-white mb-2">{edu.degree}</h3>
                    <p className="text-sm text-slate-300 font-medium mb-4 leading-relaxed pr-8">{edu.inst}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-cyan-300">
                      Score: {edu.score}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-xl border-white/5 hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="mt-1">
                    <Award className="w-6 h-6 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-base font-bold text-white mb-2">{cert.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">{cert.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillAuraSection = () => {
  const expertise = [
    "Physics Education", "Artificial Intelligence", "ICT Integration", 
    "Teacher Training", "Digital Learning", "Virtual Labs", 
    "Interactive eBooks", "Gamified Learning", "Content Creation"
  ];

  return (
    <section id="skill-aura" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 font-bold tracking-widest uppercase text-sm"
          >
            Founder & Visionary
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Aura</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-200 font-medium leading-relaxed"
          >
            Empowering the next generation of educators through technology, AI, and innovative pedagogical frameworks.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <PremiumPlaceholder label="Skill Aura Workshops" src="https://i.ibb.co/mCkVDS71/Whats-App-Image-2026-08-04-at-11-57-10-PM-1.jpg" />
          <PremiumPlaceholder label="Educator Empowerment" src="https://i.ibb.co/6cPT5HxW/Skill-aura-logo-web.jpg" />
          <PremiumPlaceholder label="Certification Programs" src="https://i.ibb.co/4ZGkgLXC/Chat-GPT-Image-Aug-5-2026-12-22-02-AM.png" />
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-extrabold text-center mb-12 text-white">Core <span className="text-gradient">Expertise</span></h3>
          <div className="flex flex-wrap justify-center gap-4">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-panel px-6 py-4 rounded-xl font-bold text-white hover:text-white border border-white/10 hover:border-blue-500/50 cursor-pointer shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechEcosystem = () => {
  const categories = [
    {
      id: 'llms',
      title: "AI LLM Platforms",
      icon: BrainCircuit,
      tools: ["ChatGPT", "Gemini", "Claude", "NotebookLM", "Microsoft Copilot", "Grok"],
      gradient: "from-blue-500 to-cyan-500",
      shadow: "shadow-cyan-500/20"
    },
    {
      id: 'video-gen',
      title: "AI Video Generation",
      icon: Film,
      tools: ["Google Flow", "Kling AI", "Sora 2", "Seedance", "Grok"],
      gradient: "from-purple-500 to-pink-500",
      shadow: "shadow-pink-500/20"
    },
    {
      id: 'design',
      title: "Design",
      icon: PenTool,
      tools: ["Canva", "Gamma AI"],
      gradient: "from-orange-500 to-yellow-500",
      shadow: "shadow-orange-500/20"
    },
    {
      id: 'video-edit',
      title: "Video Editing",
      icon: Edit3,
      tools: ["Canva Video Editor", "VideoProc Vlogger", "CapCut"],
      gradient: "from-emerald-500 to-teal-500",
      shadow: "shadow-emerald-500/20"
    },
    {
      id: 'ed-tech',
      title: "Classroom & Ed-Tech",
      icon: Monitor,
      tools: ["Wayground", "Kahoot", "QuestionWell", "PhET"],
      gradient: "from-indigo-500 to-blue-600",
      shadow: "shadow-indigo-500/20"
    },
    {
      id: 'office',
      title: "Office & Productivity",
      icon: FileSpreadsheet,
      tools: ["Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel"],
      gradient: "from-slate-400 to-slate-600",
      shadow: "shadow-slate-500/20"
    }
  ];

  return (
    <section id="tech" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">Digital Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            AI & ICT <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg font-medium">
            Hover over each category to dynamically reveal the specialized digital tools and platforms integrated into my teaching and content creation workflow.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass-panel rounded-[2rem] p-8 overflow-hidden min-h-[320px] flex flex-col items-center justify-center transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}></div>
              
              <div className="z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-12 md:group-hover:-translate-y-16">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${category.gradient} shadow-lg ${category.shadow} transform transition-transform duration-500 group-hover:scale-90 group-hover:rotate-3`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-white text-center tracking-tight">{category.title}</h3>
              </div>

              <div className="absolute bottom-8 left-0 w-full px-4 md:px-8 opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10 flex flex-wrap justify-center gap-2 md:gap-3">
                {category.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold text-white bg-black/60 rounded-full border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsAndGallery = () => {
  const projects = [
    { title: "Virtual Physics Lab", tech: "Various Tools", placeholder: "Project Cover: Virtual Lab", src: "https://imghosting.in/host/jl2z4v" },
    { title: "AI Driven Assessments", tech: "Various Tools", placeholder: "Project Cover: AI Assessment", src: "https://imgh.in/host/nkv7gc" },
    { title: "Interactive E-Book", tech: "Various Tools", placeholder: "Project Cover: E-Book", src: "https://imgh.in/host/zm6xyf" },
    { title: "Interactive Simulations", tech: "Various Tools", placeholder: "Project Cover: Simulations", src: "https://imgh.in/host/tzoy4d" },
  ];

  const galleryItems = [
    { label: "School Event", src: "https://imghosting.in/host/d1ve3y" },
    { label: "Seminar Interaction", src: "https://imghosting.in/host/rhpvzo" },
    { label: "Award Ceremony", src: "https://imghosting.in/host/jb7ki4" },
    { label: "Photography Showcase", src: "https://imghosting.in/host/1xxh98" }
  ];

  const awards = [
    { title: "2nd Rank, International Digital Teachers Olympiad", org: "UpEducators", year: "2025", icon: Trophy, color: "text-yellow-400" },
    { title: "Top 20 Rank, International AI for Innovative Teaching Olympiad", org: "UpEducators", year: "2026", icon: Award, color: "text-blue-400" },
    { title: "Main Coordinator, 'Siddhi' Science Exhibition", org: "District-level event at Carmel School, Shoranur", year: "", icon: Zap, color: "text-cyan-400" },
    { title: "Special Achievement Award", org: "Carmel School, Shoranur", year: "", icon: Star, color: "text-purple-400" },
    { title: "A-Grade Winner, English Essay Writing Competition", org: "District-level HSE Youth Festival", year: "", icon: Edit3, color: "text-emerald-400" },
    { title: "College Students’ Union Chairman", org: "Ideal Training College", year: "2017–2019", icon: Users, color: "text-blue-400" },
    { title: "Student Coordinator", org: "Science & Quiz Club", year: "", icon: Sparkles, color: "text-pink-400" },
  ];

  return (
    <section id="projects" className="py-32 relative bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Featured <span className="text-gradient">Projects</span></h2>
            <button className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 font-extrabold transition-colors">
              View All <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <PremiumPlaceholder label={proj.placeholder} aspect="aspect-[4/3]" className="mb-6 rounded-2xl" src={proj.src} />
                <h3 className="text-xl font-extrabold mb-2 text-white group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                <p className="text-blue-200 font-mono text-sm font-extrabold">{proj.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="awards" className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Awards & <span className="text-gradient">Recognitions</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl border-white/10 hover:border-blue-500/50 hover:bg-white/[0.04] transition-all group flex flex-col justify-between shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <award.icon className={`w-7 h-7 ${award.color}`} />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3 leading-tight">{award.title}</h3>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed">{award.org}</p>
                </div>
                {award.year && (
                  <div className="mt-6 inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-extrabold tracking-wider w-fit">
                    {award.year}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PremiumPlaceholder 
              label="International Digital Teachers Olympiad - 2nd Rank Certificate" 
              aspect="aspect-[4/3]" 
              className="rounded-2xl" 
              src="https://imgh.in/host/bp86ic"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PremiumPlaceholder 
              label="International AI for Innovative Teaching Olympiad - Top 20 Rank Certificate" 
              aspect="aspect-[4/3]" 
              className="rounded-2xl" 
              src="https://imgh.in/host/4fdvcx"
            />
          </motion.div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-right text-white">Visual <span className="text-gradient">Gallery</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`w-full h-full ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''} ${idx === 1 ? 'md:row-span-2' : ''}`}
              >
                <PremiumPlaceholder 
                  label={item.label} 
                  aspect="w-full h-full" 
                  className="rounded-xl border-white/5 hover:border-purple-500/50"
                  src={item.src}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CreatorAndContact = () => {
  const eduVideos = [
    { id: "kZM9DiwRK_k", url: "https://youtu.be/kZM9DiwRK_k", title: "Educational Video 1" },
    { id: "fKHm-z8kfds", url: "https://youtu.be/fKHm-z8kfds", title: "Educational Video 2" },
    { id: "cXjP12IdUR8", url: "https://youtu.be/cXjP12IdUR8", title: "Educational Video 3" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-32 glass-panel rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4 text-purple-400">
                <MonitorPlay className="w-6 h-6" />
                <span className="font-extrabold tracking-wider uppercase">Digital Creator</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Transcendio<span className="text-purple-400">AI</span></h2>
              <p className="text-lg text-slate-200 mb-8 font-medium">
                Exploring the frontiers of technology and education through engaging video content. Subscribe to join a community of forward-thinking learners.
              </p>
              <div className="flex gap-4">
                <PremiumPlaceholder label="YouTube Banner" aspect="w-40 h-16" className="rounded-lg" src="https://imgh.in/host/sbzyz7" />
                <PremiumPlaceholder label="Instagram Reels" aspect="w-16 h-16" className="rounded-lg" src="https://imgh.in/host/gpxhl5" />
              </div>
            </div>
            
            <div className="relative flex flex-col gap-4">
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2 mb-2">
                <Youtube className="w-6 h-6 text-red-500" /> Sample Educational Content
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {eduVideos.map((vid, idx) => (
                  <motion.a
                    key={idx}
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative overflow-hidden rounded-2xl glass-panel ${idx === 0 ? 'col-span-2 aspect-[21/9]' : 'col-span-1 aspect-video'} block hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-pointer`}
                  >
                    <img 
                      src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`} 
                      alt={vid.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300 group-hover:scale-110 shadow-xl">
                        <Play className="w-5 h-5 md:w-7 md:h-7 text-white ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-xs md:text-sm flex items-center gap-2">
                        Watch Video <ExternalLink className="w-3 h-3 text-purple-400" />
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-extrabold text-white mb-8">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-xl text-slate-200 font-medium mb-12">
              Interested in workshops, collaborations, or discussing the future of education? Drop a message.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white hover:text-blue-300 transition-colors cursor-pointer glass-panel p-4 rounded-xl w-fit font-bold">
                <Mail className="text-blue-400" /> mmhrishi93@gmail.com
              </div>
              <div className="flex items-center gap-4 text-white hover:text-green-300 transition-colors cursor-pointer glass-panel p-4 rounded-xl w-fit font-bold">
                <Phone className="text-green-400" /> +91 9496951256
              </div>
              <div className="flex items-center gap-4 text-white hover:text-purple-300 transition-colors cursor-pointer glass-panel p-4 rounded-xl w-fit font-bold">
                <MapPin className="text-purple-400" /> Kerala, India
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Linkedin, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-blue-500/20 text-white hover:text-blue-300 transition-all cursor-pointer">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/10 rounded-full blur-[60px] -z-10"></div>
            <PremiumPlaceholder label="Professional Office Portrait" aspect="aspect-[3/4]" className="rounded-[3rem] border-white/10" src="https://imgh.in/host/y93xf7" />
          </div>
        </div>

      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 border-t border-white/10 bg-black/80 backdrop-blur-lg text-center text-slate-300 font-medium text-sm">
    <p>© {new Date().getFullYear()} Hrishikesh M. Designed for the Future of Education.</p>
  </footer>
);

const ResumeModal = ({ isOpen, onClose }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", damping: 25, stiffness: 300,
        staggerChildren: 0.1, delayChildren: 0.1
      }
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99000] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="glass-panel relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[2rem] p-6 md:p-10 bg-slate-900/90 border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)] hide-scrollbar cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
             <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div variants={itemVariants} className="mb-8 border-b border-white/10 pb-6 pr-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Hrishikesh M</h2>
                <p className="text-blue-400 font-bold text-lg">Post Graduate Physics Teacher & AI Educator</p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-300 font-medium">
                  <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-slate-400"/> mmhrishi93@gmail.com</span>
                  <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-slate-400"/> +91 9496951256</span>
                </div>
              </motion.div>

              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-extrabold text-white mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-400" /> Professional Experience
                  </h3>
                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-purple-500/30">
                      <h4 className="text-lg font-bold text-slate-100">PGT Physics <span className="text-sm font-medium text-purple-300">— Carmel School (7+ Years)</span></h4>
                      <p className="text-sm text-slate-300 mt-1">Teaching Classes 9 to 12 (CBSE), actively integrating AI tools & interactive resources.</p>
                    </div>
                    <div className="pl-4 border-l-2 border-cyan-500/30">
                      <h4 className="text-lg font-bold text-slate-100">Founder & Lead Trainer <span className="text-sm font-medium text-cyan-300">— Skill Aura</span></h4>
                      <p className="text-sm text-slate-300 mt-1">Designing and delivering AI/ICT training sessions for educators and students.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-extrabold text-white mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-400" /> Education & Core Certifications
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                     <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <p className="font-bold text-white">M.Sc. Physics</p>
                        <p className="text-xs text-slate-400 mt-1">The Cochin College (2016) • 71.6%</p>
                     </div>
                     <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <p className="font-bold text-white">B.Ed. Physical Science</p>
                        <p className="text-xs text-slate-400 mt-1">Ideal Training College (2019) • 83%</p>
                     </div>
                     <div className="bg-white/5 p-4 rounded-xl border border-white/5 sm:col-span-2">
                        <p className="font-bold text-white">Key Certifications</p>
                        <p className="text-sm text-slate-300 mt-1 leading-relaxed">K-TET, CTET, Generative AI for Educators, Experimental Physics (Indian Academy of Science), CWPDE (Rutronix), NCC 'C' Certificate.</p>
                     </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-extrabold text-white mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" /> Top Achievements
                  </h3>
                  <ul className="list-disc list-inside text-sm text-slate-300 space-y-2 font-medium">
                    <li><strong className="text-white">2nd Rank:</strong> International Digital Teachers Olympiad (2025)</li>
                    <li><strong className="text-white">Top 20 Rank:</strong> International AI for Innovative Teaching Olympiad (2026)</li>
                    <li><strong className="text-white">Special Achievement Award:</strong> Carmel School, Shoranur</li>
                  </ul>
                </motion.div>
                
                <motion.div variants={itemVariants} className="pt-4 flex justify-center">
                   <button onClick={onClose} className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-blue-500/30 cursor-pointer">
                     Close Resume <X className="w-4 h-4" />
                   </button>
                </motion.div>
              </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function PortfolioApp() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <CustomCursor />
      
      <div className="bg-aurora"></div>
      <div className="glowing-orb bg-blue-600 top-[20%] left-[10%] w-[400px] h-[400px]"></div>
      <div className="glowing-orb bg-purple-600 bottom-[20%] right-[10%] w-[500px] h-[500px]" style={{ animationDelay: '2s' }}></div>
      <div className="glowing-orb bg-cyan-600 top-[60%] left-[40%] w-[300px] h-[300px]" style={{ animationDelay: '5s' }}></div>
      
      <div className="relative z-10 selection:bg-blue-500/50 selection:text-white">
        <Navigation onOpenResume={() => setIsResumeOpen(true)} />
        <HeroSection />
        <AboutSection />
        <ExperienceJourney />
        <EducationAndCertifications />
        <SkillAuraSection />
        <TechEcosystem />
        <ProjectsAndGallery />
        <CreatorAndContact />
        <Footer />
      </div>
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}