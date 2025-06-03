
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 relative animate-glow" aria-hidden="true">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
            <div className="relative h-full w-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              PROBABILITY GPT - FREE AI TOOLS
            </h1>
            <p className="text-xs text-gray-400">
              <a href="https://www.aiwebtools.ai" className="hover:text-primary transition-colors" aria-label="Visit AI Web Tools for more free AI tools">
                By AI Web Tools - Free AI Tools Collection
              </a>
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://chatgpt.com/g/g-UUjXxzpMX-probability-gpt" 
             className="text-white hover:text-primary transition-colors"
             aria-label="Start using Probability GPT">
            GET STARTED - FREE AI TOOL
          </a>
          <a href="https://www.aiwebtools.ai" 
             className="text-white hover:text-primary transition-colors"
             aria-label="Explore more free AI tools">
            MORE FREE AI TOOLS
          </a>
          <a href="#faq" 
             className="text-white hover:text-primary transition-colors"
             aria-label="Frequently asked questions about AI tools">
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
