import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-gutter py-margin flex flex-col gap-12 relative items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-3xl space-y-12">
        <header className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-grotesk text-headline-xl text-on-surface"
          >
            Initiate Contact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-body-md text-on-surface-variant max-w-lg mx-auto"
          >
            For technical support, dealer inquiries, or custom modifications, transmit your request below.
          </motion.p>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rack-unit p-panel-padding rounded-xl bg-surface-container shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 p-4 opacity-50 flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-outline-variant animate-pulse" />
             <span className="font-sans text-technical-data text-outline-variant">AWAITING INPUT</span>
          </div>

          <form className="space-y-6 mt-4" onSubmit={(e) => { e.preventDefault(); alert("Form submitted via Dunc Electric network.") }}>
            <div className="space-y-2">
              <label htmlFor="name" className="font-sans text-label-sm text-outline uppercase block">Designation</label>
              <input 
                id="name" 
                type="text" 
                placeholder="Name / Studio" 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 font-sans text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors recessed-input focus:shadow-[0_0_8px_rgba(209,188,255,0.3)]"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-sans text-label-sm text-outline uppercase block">Return Frequency (Email)</label>
              <input 
                id="email" 
                type="email" 
                placeholder="tech@studio.com" 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 font-sans text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors recessed-input focus:shadow-[0_0_8px_rgba(209,188,255,0.3)]"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="font-sans text-label-sm text-outline uppercase block">Transmission</label>
              <textarea 
                id="message" 
                rows={5}
                placeholder="Detail your requirements..." 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 font-sans text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors recessed-input focus:shadow-[0_0_8px_rgba(209,188,255,0.3)] resize-none"
                required
              />
            </div>
            
            <div className="pt-4 flex justify-end">
              <button 
                type="submit" 
                className="tactile-button-primary px-8 py-3 rounded font-sans text-label-sm text-on-primary uppercase tracking-widest hover:neon-glow-active transition-all flex items-center justify-center gap-3 w-full md:w-auto"
              >
                <Send size={18} />
                Transmit
              </button>
            </div>
          </form>
        </motion.div>

        {/* Direct Comms */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 font-sans text-body-md text-outline"
        >
          <div className="flex items-center gap-3">
            <Mail className="text-primary" size={20} />
            <a href="mailto:info@duncelectric.com" className="hover:text-primary transition-colors">info@duncelectric.com</a>
          </div>
          <div className="hidden md:block w-px h-6 bg-outline-variant"></div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" size={20} />
            <span>P.O. Box Base, LA 90028</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
