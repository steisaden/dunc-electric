import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, Settings, Cable, Fingerprint, ShoppingCart } from "lucide-react";
import { assetPath } from "@/lib/asset";
import { cn } from "@/lib/utils";

const panelMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const }
};

const imageMotion = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 0.98, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] as const }
};

const imageVariants = [
  assetPath("shop-images/01-colorwave.jpg"),
  assetPath("shop-images/02-multicolor.webp"),
  assetPath("shop-images/03-purple.webp"),
  assetPath("shop-images/04-black.webp")
];

export function Shop() {
  const colorOptions = [
    { label: "Multicolor", imageIndex: 1 },
    { label: "Black", imageIndex: 3 },
    { label: "Purple", imageIndex: 2 }
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const handleSliderChange = (value: number) => {
    setSelectedColor(value);
    setSelectedImage(colorOptions[value].imageIndex);
  };

  const handleThumbnailClick = (idx: number) => {
    setSelectedImage(idx);

    const mappedColorIndex = colorOptions.findIndex((option) => option.imageIndex === idx);
    if (mappedColorIndex !== -1) {
      setSelectedColor(mappedColorIndex);
    }
  };

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-gutter py-margin flex flex-col lg:flex-row gap-gutter relative">
      {/* Left Side: Sticky Gallery */}
      <section className="lg:w-1/2 lg:sticky lg:top-[100px] h-fit space-y-4">
        <motion.div
          {...panelMotion}
          className="rack-unit rounded-xl overflow-hidden relative aspect-square group bg-surface-container"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage}
              {...imageMotion}
              alt="Electrified chanter stock"
              className="w-full h-full object-contain p-6 sm:p-8 lg:p-10 mix-blend-luminosity group-hover:mix-blend-normal transition-[filter,opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
              src={imageVariants[selectedImage]}
              onClick={() => {
                if (selectedImage === 0) {
                  setSelectedImage(0);
                }
              }}
            />
          </AnimatePresence>
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-primary-container text-on-primary-container font-sans text-label-sm px-2 py-1 rounded-sm neon-glow uppercase">
              Signal Active
            </span>
          </div>
          <button className="absolute bottom-4 right-4 text-surface-variant hover:text-on-surface transition-colors focus:outline-none">
            <ZoomIn size={32} />
          </button>
        </motion.div>

        <div className="grid grid-cols-4 gap-unit">
          {imageVariants.map((img, idx) => (
            <button
              key={idx}
              onClick={() => handleThumbnailClick(idx)}
              className={cn(
                "rack-unit rounded-lg aspect-square overflow-hidden transition-all",
                selectedImage === idx ? "neon-glow border-primary" : "opacity-60 hover:opacity-100"
              )}
            >
              <img
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0"
                src={img}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Right Side: Specs & Cart */}
      <section className="lg:w-1/2 flex flex-col space-y-stack-gap pb-32">
        <motion.div
          {...panelMotion}
          transition={{ ...panelMotion.transition, delay: 0.1 }}
          className="rack-unit p-panel-padding rounded-xl space-y-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-grotesk text-headline-xl text-on-background mb-2">Electrified Chanter Stock</h1>
              <p className="font-sans text-body-md text-on-surface-variant">
                Highland Bagpipe Version | Black Powder-Coated Aluminum
              </p>
            </div>
          </div>
          <div className="digital-readout bg-surface-container-lowest p-4 rounded border border-outline-variant flex items-center justify-between">
            <span className="font-sans text-label-sm text-outline uppercase tracking-widest">Output Level</span>
            <span className="font-sans text-technical-data text-primary text-2xl">$419 USD</span>
          </div>
        </motion.div>

        {/* Add to Cart Module */}
        <motion.div
          {...panelMotion}
          transition={{ ...panelMotion.transition, delay: 0.15 }}
          className="rack-unit p-panel-padding rounded-xl space-y-4"
        >
          <div className="flex items-center justify-between gap-4 border-b border-surface-variant pb-4">
            <div>
              <h2 className="font-grotesk text-headline-lg text-on-surface">Add to Cart</h2>
              <p className="font-sans text-body-md text-on-surface-variant">Ready to add the Electrified Chanter Stock to your session.</p>
            </div>
            <div className="hidden sm:block text-right">
              <span className="font-sans text-label-sm text-outline uppercase block">Total</span>
              <span className="font-sans text-technical-data text-primary text-xl">$419.00</span>
            </div>
          </div>
          <button className="tactile-button-primary w-full px-8 py-4 rounded-lg font-sans text-label-sm text-on-primary uppercase tracking-widest hover:neon-glow-active transition-all flex items-center justify-center gap-3">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </motion.div>

        {/* Value Props Module */}
        <motion.div
          {...panelMotion}
          transition={{ ...panelMotion.transition, delay: 0.2 }}
          className="rack-unit p-panel-padding rounded-xl space-y-6"
        >
          <h2 className="font-grotesk text-headline-lg text-on-surface border-b border-surface-variant pb-2">
            Technical Specs
          </h2>
          <ul className="space-y-6 font-sans text-body-md text-on-surface-variant">
            <li className="flex items-start gap-4">
              <Fingerprint className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <strong className="text-on-background block font-medium">Absolute Isolation</strong>
                <span>Completely eliminates mechanical finger noise from the audio signal path.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Settings className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <strong className="text-on-background block font-medium">Pedalboard Ready</strong>
                <span>Direct 1/4" output seamlessly integrates with standard effects pedals and outboard gear.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Cable className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <strong className="text-on-background block font-medium">Machined Durability</strong>
                <span>Aircraft-grade aluminum construction built to withstand rigorous touring environments.</span>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Configuration Module */}
        <motion.div
          {...panelMotion}
          transition={{ ...panelMotion.transition, delay: 0.3 }}
          className="rack-unit p-panel-padding rounded-xl space-y-6 relative overflow-hidden"
        >
          <h2 className="font-grotesk text-headline-lg text-on-surface border-b border-surface-variant pb-2">
            Configuration
          </h2>
          <div className="space-y-4">
            <label className="font-sans text-label-sm text-outline uppercase block mb-2">Color Select</label>
            <div className="relative pt-8 pb-10">
              <div className="w-full h-8 bg-surface-container-lowest rounded-full border border-outline-variant relative digital-readout">
                <div
                  className="absolute top-0 left-0 h-full bg-primary/20 rounded-full transition-all"
                  style={{ width: `${(selectedColor / 2) * 100}%` }}
                />
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="1"
                  value={selectedColor}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  className="w-full absolute inset-0 opacity-0 cursor-pointer"
                  aria-label="Color selection slider"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-6 bg-on-background rounded-sm border border-surface flex items-center justify-center cursor-pointer shadow-md pointer-events-none transition-all"
                  style={{ left: `calc(${(selectedColor / 2) * 100}% - 8px)` }}
                >
                  <div className="w-px h-4 bg-surface"></div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 font-sans text-technical-data uppercase text-center tracking-widest">
                {colorOptions.map((option, idx) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleSliderChange(idx)}
                    className={cn(
                      "transition-colors",
                      selectedColor === idx ? "text-primary" : "text-outline hover:text-on-surface-variant"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
