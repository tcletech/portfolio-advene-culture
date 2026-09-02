import WorkGallery from "./components/WorkGallery"
import GradualBlur from "./components/GradualBlur"
import FallingText from "./components/FallingText"
import { motion } from "framer-motion"

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 overflow-hidden selection:bg-[#ccff00] selection:text-black relative">
      {/* Marquee Header */}
      <motion.div 
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-[#ccff00] text-black py-2 overflow-hidden flex whitespace-nowrap border-b-4 border-black font-syne font-bold uppercase tracking-widest text-sm relative z-20"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex animate-marquee min-w-max" 
          style={{ animationDuration: '80s' }}
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-4 flex items-center gap-4">
              <span>MECHANICAL ENGINEERING</span>
              <span>✦</span>
              <span>JOHNS HOPKINS UNIVERSITY</span>
              <span>✦</span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#ccff00] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none" />

        {/* Logo / Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 mb-12 md:mb-16"
        >
          <img 
            src="/logo.svg" 
            alt="Harrison TC Le" 
            className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(204,255,0,0.5)] hover:scale-105 transition-transform cursor-pointer" 
          />
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 relative z-10 w-full mt-10"
        >
          <div className="w-full">
            <h1 className="font-syne text-[9vw] leading-[1.1] sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] font-extrabold tracking-tighter mb-4 w-full">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500 whitespace-nowrap">
                HARRISON
              </span>
              <span className="flex items-center gap-2 md:gap-4 flex-wrap md:flex-nowrap whitespace-nowrap">
                TC LE
                <div className="inline-block shrink-0 w-[8vw] h-[8vw] sm:w-12 sm:h-12 md:w-20 md:h-20 xl:w-24 xl:h-24 bg-[#ccff00] rounded-full animate-float flex items-center justify-center text-black text-[4vw] sm:text-2xl md:text-3xl xl:text-5xl border-2 border-black ml-2 mt-2 md:mt-0">
                  ✦
                </div>
              </span>
              <span className="block text-[#ccff00] italic pr-4 whitespace-nowrap">
                PORTFOLIO.
              </span>
            </h1>
          </div>
          <div className="max-w-xs text-slate-400 mt-8 lg:mt-0 font-medium lg:text-right text-lg shrink-0">
            <p className="leading-relaxed">Mechanical engineering and computer music at Johns Hopkins. CAD, prototyping, quality inspection, and hardware that has to work outside the lab.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full border-t border-white/10 pt-16 mt-8"
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-syne text-3xl font-bold uppercase tracking-tight">Selected Projects</h2>
            <div className="hidden md:flex gap-2">
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
              <span className="w-3 h-3 rounded-full bg-white/40"></span>
              <span className="w-3 h-3 rounded-full bg-[#ccff00]"></span>
            </div>
          </div>
          <WorkGallery />
        </motion.div>

        {/* Contact Section */}
        <div className="w-full mt-16 mb-20 relative z-20">
          
          {/* Brutalist Warning Tape */}
          <div className="w-[110%] -ml-[5%] bg-[#ccff00] text-black py-3 overflow-hidden flex whitespace-nowrap border-y-4 border-black font-syne font-black uppercase tracking-widest text-lg transform rotate-[-1deg] absolute -z-10 top-1/2 -translate-y-1/2 opacity-80 mix-blend-screen pointer-events-none group-hover:rotate-[1deg] transition-all duration-700">
            <div className="flex animate-marquee min-w-max" style={{ animationDuration: '240s' }}>
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-6 flex items-center gap-6">
                  <span>OPEN TO SUMMER 2027 INTERNSHIPS</span>
                  <span className="text-xl">✱</span>
                  <span>DESIGN · MANUFACTURING · HARDWARE</span>
                  <span className="text-xl">✱</span>
                </span>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-neutral-950/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden relative group"
          >
            
            {/* Outline Background Text Effect */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-syne text-[25vw] sm:text-[15rem] font-bold uppercase whitespace-nowrap text-transparent opacity-10 pointer-events-none select-none mix-blend-overlay" style={{ WebkitTextStroke: '2px white' }}>
              GET IN TOUCH
            </h2>

            {/* Glowing noise overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-hard-light" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"}}></div>

            <h2 className="font-syne text-[8vw] sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.9] mb-8 relative z-10 transition-transform duration-500 group-hover:scale-105 w-full">
              LET'S <br className="hidden sm:block"/>
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-teal-400">CONNECT.</span>
            </h2>
            
            <div className="font-mono text-slate-400 text-sm md:text-base max-w-md uppercase tracking-widest mb-12 relative z-10 w-full h-[150px] cursor-pointer" title="Hover me!">
              <FallingText
                text="Open to Summer 2027 mechanical engineering internships. Reach out about design, manufacturing, or hardware roles."
                highlightWords={[]}
                highlightClass=""
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="inherit"
                mouseConstraintStiffness={0.9}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto relative z-10 items-center justify-center">
              <a 
                href="https://linkedin.com/in/harrison-le-meche" 
                target="_blank" 
                rel="noreferrer"
                className="group/btn relative px-10 py-5 bg-black/50 border border-white/20 rounded-full overflow-hidden text-center backdrop-blur-md w-full sm:w-auto flex items-center justify-center gap-3 transition-all duration-300 hover:border-teal-400/50 hover:bg-neutral-900"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500" />
                <span className="relative z-10 font-syne font-bold uppercase tracking-widest text-sm text-white group-hover/btn:text-teal-300 transition-colors">
                  LinkedIn
                </span>
                <span className="text-teal-400 text-lg group-hover/btn:rotate-12 transition-transform duration-300">✦</span>
              </a>
              
              <a 
                href="mailto:hle34@jh.edu" 
                className="group/btn relative px-10 py-5 bg-[#ccff00] text-black rounded-full overflow-hidden text-center transition-all duration-300 shadow-[0_0_40px_rgba(204,255,0,0.15)] hover:shadow-[0_0_60px_rgba(204,255,0,0.4)] w-full sm:w-auto hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                <span className="relative z-10 font-syne font-black uppercase tracking-widest text-sm">
                  Email Me
                </span>
                <span className="text-xl leading-none -mt-1 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform inline-block font-black">↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <GradualBlur
        target="page"
        position="bottom"
        height="10rem"
        strength={3}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />

      {/* Footer Section - Moved outside main container and forced to top */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full relative z-[999] bg-black border-t border-white/10 pt-16 pb-16 px-6 mt-2 mb-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/logo.svg" 
              alt="Harrison TC Le" 
              className="h-10 w-auto object-contain opacity-50 mb-6 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
            />
            <p className="font-mono text-sm text-slate-500 uppercase tracking-widest text-center md:text-left">
              &copy; 2026 Harrison TC Le. <br className="block sm:hidden"/> All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4 items-center">
            <span className="font-syne font-bold text-sm uppercase tracking-widest text-slate-400">
              Built in Baltimore, MD.
            </span>
            <span className="text-[#ccff00] text-2xl animate-pulse">✦</span>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}