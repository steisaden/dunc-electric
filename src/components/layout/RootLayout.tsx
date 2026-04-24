import { Outlet } from "react-router-dom";
import { TopNav } from "./TopNav";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container relative overflow-hidden bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#F4F4F4 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           
      {/* Visual Accent Circle */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-br from-primary to-[#814180] opacity-[0.08] blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col flex-grow">
        <TopNav />
        <div className="flex-grow flex flex-col">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
