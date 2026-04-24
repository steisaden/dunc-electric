import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Cable, HelpCircle, Plus, Minus, ShieldCheck } from "lucide-react";
import { assetPath } from "@/lib/asset";
import { cn } from "@/lib/utils";

export function Info() {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section");
    if (!section) return;

    const target = document.getElementById(section);
    if (!target) return;

    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.search]);

  const faqs = [
    {
      q: "What is Dunc Electric?",
      a: "Dunc Electric is a bagpipe hardware company founded by David Duncan in Los Angeles, California."
    },
    {
      q: "What do you make?",
      a: "We design and build tools that let bagpipers capture a clean, direct signal from the instrument for live performance, recording, and processing."
    },
    {
      q: "What is the flagship product?",
      a: "Our flagship product is the Electrified Chanter Stock. It gives you a clean output straight from the chanter so you can amplify your sound without relying only on an external microphone."
    },
    {
      q: "How does it work?",
      a: "The Electrified Chanter Stock uses a patented piezoelectric pickup system built into the stock itself. Install it, plug it in, power up, and play your heart out."
    },
    {
      q: "Can I use effects pedals?",
      a: "Yes. The 1/4\" TS output makes it easy to route your signal into pedals, amps, and digital processors so you can shape your sound however you want."
    },
    {
      q: "What if I don’t play Highland pipes?",
      a: "We are expanding the product line over time so other pipe types can benefit too. Future variations may include Medieval pipes, Uilleann pipes, Gaitas, and more."
    },
    {
      q: "Is the product patented?",
      a: "Yes. The Electrified Chanter Stock is patent protected. For more details, visit duncelectric.com/patents."
    },
    {
      q: "Why not just use a microphone?",
      a: "Microphones can work well, but they can move during performance, vary with placement, get in the way of your hands, and pick up stage noise. XLR setups are also not always as pedal-friendly as a 1/4\" output."
    },
    {
      q: "Where is it made?",
      a: "The chanter stock is manufactured by McCallum Bagpipes in Kilmarnock, Scotland. Electronic components are assembled by hand at Dunc Electric HQ, and every unit is checked before it ships."
    },
    {
      q: "Can I run it through a Marshall Full Stack?",
      a: "Yes — absolutely. You can push it through a Marshall Full Stack, or just about any amp or FX chain you want."
    },
    {
      q: "What about repairs or returns?",
      a: "If you need repair or return help, use the returns information here: duncelectric.com/returns."
    },
    {
      q: "Why is your website purple?",
      a: "Because purple fits the glow, and it looks cool."
    }
  ];

  return (
    <main className="relative isolate w-full overflow-hidden bg-[#050507]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 md:opacity-45"
        style={{ backgroundImage: `url('${assetPath("info/concert-photo.jpg")}')` }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-gutter px-margin py-margin md:grid-cols-12">
      {/* Left Column: Fixed Navigation */}
      <aside className="relative z-10 md:col-span-3 lg:col-span-2 hidden md:block">
        <div className="sticky top-[100px] flex flex-col gap-stack-gap">
          <div className="font-sans text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">
            Knowledge Base
          </div>
          <nav className="flex flex-col gap-unit">
            <Link to="/info?section=origin" className="group flex items-center gap-3 py-2 px-3 rounded bg-surface-container border border-outline-variant neon-glow">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(209,188,255,0.8)]"></div>
              <span className="font-sans text-label-sm text-primary uppercase">The Origin</span>
            </Link>
            <Link to="/info?section=tech" className="group flex items-center gap-3 py-2 px-3 rounded hover:bg-surface-container border border-transparent hover:border-outline-variant transition-all">
              <div className="w-2 h-2 rounded-full bg-outline-variant group-hover:bg-on-surface-variant transition-colors"></div>
              <span className="font-sans text-label-sm text-on-surface-variant group-hover:text-on-surface uppercase transition-colors">The Tech</span>
            </Link>
            <Link to="/info?section=faq" className="group flex items-center gap-3 py-2 px-3 rounded hover:bg-surface-container border border-transparent hover:border-outline-variant transition-all">
              <div className="w-2 h-2 rounded-full bg-outline-variant group-hover:bg-on-surface-variant transition-colors"></div>
              <span className="font-sans text-label-sm text-on-surface-variant group-hover:text-on-surface uppercase transition-colors">Returns & Warranty</span>
            </Link>
          </nav>
          
          {/* Decorative Rack Vents */}
          <div className="mt-8 flex flex-col gap-[2px] opacity-20">
            <div className="h-[2px] w-full bg-outline-variant"></div>
            <div className="h-[2px] w-full bg-outline-variant"></div>
            <div className="h-[2px] w-full bg-outline-variant"></div>
            <div className="h-[2px] w-full bg-outline-variant"></div>
          </div>
        </div>
      </aside>

      {/* Right Column: Scrolling Content */}
      <div className="relative z-10 col-span-1 md:col-span-9 lg:col-span-10 flex flex-col gap-margin pb-24">
        {/* Page Header */}
        <header className="border-b border-outline-variant pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-grotesk text-headline-xl text-on-surface mb-4"
          >
            System Info
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-body-md text-on-surface-variant max-w-2xl"
          >
            Dunc Electric builds bagpipe hardware for players who want a clean, direct signal for live performance, recording, and creative processing. Founded by David Duncan in Los Angeles, the company focuses on giving pipers a more stable alternative to traditional miking.
          </motion.p>
        </header>

        {/* Section 1: The Origin */}
        <section id="origin" className="scroll-mt-[100px]">
          <h2 className="font-grotesk text-headline-lg text-on-surface mb-8 flex items-center gap-4">
            <Cpu className="text-primary" size={32} />
            The Origin
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* Problem Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface-container border border-outline-variant rounded p-panel-padding machined-edge flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                <span className="font-sans text-technical-data text-error uppercase">SYS.ERR // Traditional Mics</span>
                <div className="w-3 h-3 rounded-full bg-error shadow-[0_0_8px_rgba(255,180,171,0.5)]"></div>
              </div>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                Traditional miking can work, but it often brings feedback, placement drift, stage-noise pickup, and hand-interference problems. That makes it harder to keep a stable signal when you’re running into modern pedals, amps, and processors.
              </p>
            </motion.div>

            {/* Solution Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-secondary-container border border-primary-container/30 rounded p-panel-padding neon-glow flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b border-primary-container/30 pb-2">
                <span className="font-sans text-technical-data text-primary uppercase">SYS.OK // Dunc Electric</span>
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(209,188,255,0.8)] animate-pulse"></div>
              </div>
              <p className="font-sans text-body-md text-on-primary-container leading-relaxed">
                The Electrified Chanter Stock uses a patented piezoelectric pickup system built into the stock itself. By capturing the signal at the source, it delivers a clean, feedback-resistant output that's ready for pedals, amp stacks, and digital processing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Hardware Specs */}
        <section id="tech" className="scroll-mt-[100px]">
          <h2 className="font-grotesk text-headline-lg text-on-surface mb-8 flex items-center gap-4">
            <Cable className="text-primary" size={32} />
            Hardware Specs
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-outline-variant rounded machined-edge overflow-hidden"
          >
            <div className="bg-surface-container-high px-6 py-3 border-b border-outline-variant flex items-center justify-between">
              <span className="font-sans text-label-sm text-on-surface-variant uppercase tracking-widest">Parameter</span>
              <span className="font-sans text-label-sm text-on-surface-variant uppercase tracking-widest">Value</span>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors">
                <span className="font-sans text-body-md text-on-surface">Base Material</span>
                <div className="bg-surface-container-highest px-3 py-1 rounded recessed-input">
                  <span className="font-sans text-technical-data text-primary">McCallum Bagpipes acetyl stock</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors">
                <span className="font-sans text-body-md text-on-surface">Assembly Location</span>
                <div className="bg-surface-container-highest px-3 py-1 rounded recessed-input">
                  <span className="font-sans text-technical-data text-primary">Hand-assembled in Los Angeles</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors">
                <span className="font-sans text-body-md text-on-surface">Signal Path</span>
                <div className="bg-surface-container-highest px-3 py-1 rounded recessed-input">
                  <span className="font-sans text-technical-data text-primary">Patented piezoelectric pickup with 1/4" TS output</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors border-l-2 border-l-tertiary">
                <span className="font-sans text-body-md text-on-surface">Intellectual Property</span>
                <div className="bg-surface-container-highest px-3 py-1 rounded recessed-input flex items-center gap-2">
                  <ShieldCheck className="text-tertiary" size={14} />
                  <span className="font-sans text-technical-data text-tertiary">Patent US 11,922,909</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-6 py-4 hover:bg-surface-container-low transition-colors">
                <span className="font-sans text-body-md text-on-surface">Output Impedance</span>
                <div className="bg-surface-container-highest px-3 py-1 rounded recessed-input">
                  <span className="font-sans text-technical-data text-on-surface-variant">Low-Z (instrument level)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: FAQ */}
        <section id="faq" className="scroll-mt-[100px]">
          <h2 className="font-grotesk text-headline-lg text-on-surface mb-8 flex items-center gap-4">
            <HelpCircle className="text-primary" size={32} />
            Operational Queries
          </h2>
          <div className="flex flex-col gap-[2px] bg-outline-variant p-[1px] rounded">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className={cn(
                    "p-6 first:rounded-t last:rounded-b flex flex-col gap-4 transition-colors",
                    isOpen ? "bg-surface-container" : "bg-surface hover:bg-surface-container-low"
                  )}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex items-center justify-between cursor-pointer w-full text-left"
                  >
                    <h3 className={cn(
                      "font-sans text-body-md font-semibold transition-colors",
                      isOpen ? "text-on-surface" : "text-on-surface-variant"
                    )}>
                      {faq.q}
                    </h3>
                    <div className={cn(
                      "p-1 rounded transition-colors",
                      isOpen ? "bg-primary/20 text-primary" : "bg-surface-container-highest text-on-surface-variant"
                    )}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-l-2 border-primary/50 ml-1 pl-4 pt-2">
                          <p className="font-sans text-body-md text-on-surface-variant">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
    </main>

  );
}
