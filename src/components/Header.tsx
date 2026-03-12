
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const FOREVER_LINK = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <div className="flex items-center space-x-2 min-w-0">
          <div className="h-8 w-8 sm:h-10 sm:w-10 relative animate-glow flex-shrink-0" aria-hidden="true">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
            <div className="relative h-full w-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary truncate">
              PROBABILITY GPT - FREE AI TOOLS
            </h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
              <a href={FOREVER_LINK} className="hover:text-primary transition-colors" aria-label="Visit AI Web Tools for more free AI tools">
                By AI Web Tools - Free AI Tools Collection
              </a>
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://chatgpt.com/g/g-UUjXxzpMX-probability-gpt"
             className="text-foreground hover:text-primary transition-colors text-sm"
             aria-label="Start using Probability GPT">
            GET STARTED - FREE AI TOOL
          </a>
          <a href={FOREVER_LINK}
             className="text-foreground hover:text-primary transition-colors text-sm"
             aria-label="Explore more free AI tools">
            MORE FREE AI TOOLS
          </a>
          <a href="#faq"
             className="text-foreground hover:text-primary transition-colors text-sm"
             aria-label="Frequently asked questions about AI tools">
            FAQ
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-4 flex flex-col space-y-3 bg-background/95 backdrop-blur-md">
          <a href="https://chatgpt.com/g/g-UUjXxzpMX-probability-gpt"
             className="text-foreground hover:text-primary transition-colors py-2 border-b border-primary/10"
             onClick={() => setMobileOpen(false)}>
            GET STARTED - FREE AI TOOL
          </a>
          <a href={FOREVER_LINK}
             className="text-foreground hover:text-primary transition-colors py-2 border-b border-primary/10"
             onClick={() => setMobileOpen(false)}>
            MORE FREE AI TOOLS
          </a>
          <a href="#faq"
             className="text-foreground hover:text-primary transition-colors py-2"
             onClick={() => setMobileOpen(false)}>
            FAQ
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
