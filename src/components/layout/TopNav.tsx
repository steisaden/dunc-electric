import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { assetPath } from "@/lib/asset";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Info", path: "/info" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
];

const logoCircle = assetPath("logos/circle.svg");
const logoCircleGlow = assetPath("logos/circle-glow.svg");
const logoLockup = assetPath("logos/header-lockup.svg");
const logoLockupGlow = assetPath("logos/header-lockup-glow.svg");

const glowFilter = "drop-shadow(0 0 12px rgba(180, 120, 255, 0.95)) drop-shadow(0 0 30px rgba(180, 120, 255, 0.72)) drop-shadow(0 0 56px rgba(129, 65, 128, 0.34))";

export function TopNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-surface/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1920px] items-center gap-3 px-4 sm:px-6 md:px-8">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group relative inline-flex shrink-0 items-center gap-3 md:gap-4"
          aria-label="Dunc Electric home"
        >
          <span className="relative block h-10 w-10 shrink-0 sm:h-11 sm:w-11 isolate">
            <img
              src={logoCircleGlow}
              alt=""
              aria-hidden="true"
              className="logo-glow-pulse pointer-events-none absolute inset-0 h-full w-full scale-[1.12] object-contain object-center opacity-100 blur-[3px] mix-blend-screen"
              style={{ filter: glowFilter }}
            />
            <img
              src={logoCircle}
              alt="DE logo"
              className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center drop-shadow-[0_0_8px_rgba(255,255,255,0.18)]"
            />
          </span>
          <span className="relative hidden h-10 w-[170px] shrink-0 sm:h-11 sm:w-[208px] md:block lg:w-[234px] isolate">
            <img
              src={logoLockupGlow}
              alt=""
              aria-hidden="true"
              className="logo-glow-pulse pointer-events-none absolute inset-0 h-full w-full scale-[1.06] object-contain object-center opacity-100 blur-[3px] mix-blend-screen"
              style={{ filter: glowFilter }}
            />
            <img
              src={logoLockup}
              alt="Dunc Electric"
              className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center drop-shadow-[0_0_8px_rgba(255,255,255,0.18)]"
            />
          </span>
        </Link>

        {/* Desktop / tablet nav */}
        <div className="hidden flex-1 items-center justify-center gap-8 font-grotesk text-sm font-medium uppercase tracking-tight md:flex lg:gap-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname === "/cart" && item.path === "/shop");
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "group relative py-1 font-bold transition-colors duration-200",
                  isActive ? "text-primary" : "text-white/75 hover:text-white"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-[#814180] transition-transform duration-200 group-hover:scale-x-100",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <a
            href="mailto:info@duncelectric.com"
            className="hidden whitespace-nowrap text-xs font-medium tracking-[0.22em] text-white/70 transition-colors hover:text-white md:inline-flex lg:text-sm"
          >
            info@duncelectric.com
          </a>

          <Link
            to="/cart"
            className="flex items-center justify-center p-2 text-white transition-colors duration-200 hover:text-primary active:scale-95"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
          </Link>

          <button
            className="flex items-center justify-center p-2 text-white transition-colors duration-200 hover:text-primary md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-surface/98 px-4 py-5 shadow-2xl backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-4 text-label-sm uppercase tracking-[0.22em] text-white/80">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (location.pathname === "/cart" && item.path === "/shop");
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-sm border border-transparent px-3 py-3 transition-colors",
                    isActive ? "border-primary/40 bg-primary/10 text-primary" : "hover:border-white/10 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
