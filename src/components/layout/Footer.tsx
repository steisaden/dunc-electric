export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t-2 border-surface-container-high flex flex-col md:flex-row justify-between items-center px-12 py-8 space-y-4 md:space-y-0 mt-auto z-50 relative">
      <div className="font-grotesk text-xs tracking-widest uppercase text-outline text-center md:text-left">
        © 2024 Dunc Electric. All Rights Reserved.
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 font-grotesk text-xs tracking-widest uppercase text-center md:text-left">
        <a href="#" className="text-outline hover:text-on-surface transition-colors">Patent Registry</a>
        <a href="#" className="text-outline hover:text-on-surface transition-colors">Return Policy (P.O. Box LA)</a>
        <a href="mailto:info@duncelectric.com" className="text-outline hover:text-on-surface transition-colors">info@duncelectric.com</a>
      </div>
    </footer>
  );
}
