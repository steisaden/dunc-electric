import { Link } from "react-router-dom";
import { motion } from "motion/react";

const podcastEpisode = {
  title: "The Big Rab Show Podcast. Episode 434. David Duncan - DuncElectric",
  description:
    "Listen to the podcast episode featuring David Duncan and the DuncElectric chanter stock.",
  audioSrc:
    "https://mcdn.podbean.com/mf/web/ir79ms8h9qetvk8w/The_Big_Rab_Show_Podcast_Episode_434_David_Duncan_-_DuncElectric7j3gx.mp3",
  episodeUrl:
    "https://bigrabshow.podbean.com/e/the-big-rab-show-podcast-episode-434-david-duncan-duncelectric/"
};

export function Home() {
  return (
    <main className="flex-grow flex flex-col">
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-surface">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
            alt="dramatic close up of studio music equipment with dark metallic textures and moody purple stage lighting in a hazy atmosphere"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSTM7MX__4xX4z22YjM8UgRA5P87h2O07KiQQ1C1eEJd2x3FqIwWhu0sioD32C0gWwIbDOM_QmZ8ot4fN7GlvNdbanpvxibNMJj29BqZsY-lUkRRNIttWCGrvqsrQ7ru_eQFkYQtFrvAgEEkIZ4kBQfSH0Q7B3rSFQyp0l5s-dNsuiIdHiTT6neMez9kFVO8NYSs6l47a85OpkYSosI6_GxnymJ8l5GZ53AUoxLJxILCMnUnJe_r5bq5U0uRXZr6c0AbVMppOrKcw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/80 to-transparent"></div>
          {/* Vignette / Rack Shadow simulation */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-gutter grid grid-cols-12 gap-gutter py-margin">
          {/* Center Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 flex flex-col items-center text-center space-y-8"
          >
            {/* System Status Indicator (Glassmorphism + Neon) */}
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-sm shadow-xl">
              <div className="w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_8px_#00FF66] animate-pulse"></div>
              <span className="font-sans text-technical-data text-white/40 uppercase tracking-widest">
                Sys. Online / Active
              </span>
            </div>

            {/* Headlines */}
            <div className="space-y-4 flex flex-col items-center">
              <h1 className="font-grotesk text-[clamp(2.5rem,8vw,100px)] leading-[0.85] font-black tracking-tight uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                Plug In. Turn Up.<br />
                <span className="text-transparent text-stroke-white drop-shadow-none">
                  Play Your Heart Out.
                </span>
              </h1>
              <p className="font-sans text-body-md text-on-surface-variant max-w-xl mx-auto leading-relaxed border-l border-primary pl-4 text-left font-light">
                The ultimate patented piezoelectric pickup system for bagpipes. Engineered for the stadium stage, perfected for the dark studio rack.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-8 flex flex-col items-center gap-6 w-full">
              <Link
                to="/shop"
                className="group relative flex items-center justify-center font-sans text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-primary to-[#814180] px-10 py-4 rounded-sm shadow-xl hover:brightness-110 transition-all duration-300 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 font-bold">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </Link>

              <section className="w-full max-w-3xl rounded-xl border border-white/10 bg-black/35 backdrop-blur-md p-4 sm:p-5 shadow-2xl text-left">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <p className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                      Featured Podcast Episode
                    </p>
                    <h2 className="font-grotesk text-xl sm:text-2xl text-white leading-tight">
                      {podcastEpisode.title}
                    </h2>
                    <p className="font-sans text-sm text-white/70 max-w-2xl">
                      {podcastEpisode.description}
                    </p>
                  </div>
                  <a
                    href={podcastEpisode.episodeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center justify-center rounded-sm border border-white/15 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-widest text-white/85 transition-colors hover:border-primary hover:text-primary"
                  >
                    Open Episode
                  </a>
                </div>
                <div className="mt-4">
                  <audio controls preload="none" className="w-full">
                    <source src={podcastEpisode.audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
