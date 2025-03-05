
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 relative animate-glow">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
            <div className="relative h-full w-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              PROBABILITY GPT
            </h1>
            <p className="text-xs text-gray-400">
              <a href="https://www.aiwebtools.ai" className="hover:text-primary transition-colors">
                Presented by AiWebTools.Ai
              </a>
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://chatgpt.com/g/g-UUjXxzpMX-probability-gpt" 
             className="text-white hover:text-primary transition-colors">
            GET STARTED
          </a>
          <a href="https://www.aiwebtools.ai" 
             className="text-white hover:text-primary transition-colors">
            MORE AI TOOLS
          </a>
          <a href="#faq" 
             className="text-white hover:text-primary transition-colors">
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
