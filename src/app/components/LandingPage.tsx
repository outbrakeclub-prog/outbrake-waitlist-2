import { motion } from 'motion/react';
import WaitlistForm from './WaitlistForm';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#111] p-2 md:p-3 flex items-center justify-center overflow-hidden">
      {/* Main Container with borders revealed */}
      <div className="relative w-full h-[calc(100vh-16px)] md:h-[calc(100vh-24px)] rounded-2xl overflow-hidden shadow-2xl shadow-black">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1666947520667-371348873d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcnNwb3J0JTIwcmFjZXIlMjB3aXRoJTIwY2FyJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzE2ODk1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Motorsport racer with car" 
            className="w-full h-full object-cover grayscale brightness-75 contrast-125"
          />
          {/* Overlay Gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-2xl mt-16"
          >
            {/* Logo Circle - Overlapping the top edge */}
            <div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 z-20">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-md overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                 <img src="/src/assets/logo.png" alt="Outbrake Logo" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Liquid Glass Rectangle Container */}
            <div className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-10 pt-20 md:pt-24 shadow-2xl relative overflow-hidden group">
              {/* Subtle glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
              
              {/* Shine effect */}
              <div className="absolute -inset-[100%] top-0 block h-[200%] w-1/2 -rotate-12 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:animate-shine pointer-events-none" />

              {/* Brand Name - Racing Sans One */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter mb-4 uppercase" style={{ fontFamily: '"Racing Sans One", sans-serif' }}>
                Outbrake
              </h1>

              {/* Hero Phrase - Work Sans Extra Bold 800 - Sentence case, period */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 border-b border-white/30 pb-4 inline-block" style={{ fontFamily: '"Work Sans", sans-serif', fontWeight: 700 }}>
                A new generation of racing.
              </p>

              {/* Description - Work Sans Medium 500 */}
              <p className="text-base md:text-lg text-white/70 max-w-lg mx-auto mb-10 leading-relaxed" style={{ fontFamily: '"Work Sans", sans-serif', fontWeight: 500 }}>
                Receive all the news about Outbrake and be the first to know when the brand goes live.
              </p>

              {/* Form */}
              <div className="max-w-xl mx-auto">
                <WaitlistForm />
              </div>
            </div>

          </motion.div>

          {/* Footer/Copyright (Optional nice touch) */}
          <div className="absolute bottom-6 md:bottom-10 text-white/20 text-xs uppercase tracking-widest">
            © 2026 Outbrake Motorsport
          </div>
        </div>
      </div>
    </div>
  );
}
