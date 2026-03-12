
import { Button } from "@/components/ui/button";

const FOREVER_LINK = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Footer = () => {
  return (
    <footer className="bg-accent/20 border-t border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Free AI Tools Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://chatgpt.com/g/g-UUjXxzpMX-probability-gpt" 
                   className="text-muted-foreground hover:text-primary transition-colors"
                   aria-label="Start using Probability GPT - Free AI Tool">
                  Probability GPT - Free AI Tool
                </a>
              </li>
              <li>
                <a href={FOREVER_LINK} 
                   className="text-muted-foreground hover:text-primary transition-colors"
                   aria-label="AI Web Tools - Collection of Free AI Tools">
                  AI Web Tools - More Free AI Tools
                </a>
              </li>
              <li>
                <a href="#faq" 
                   className="text-muted-foreground hover:text-primary transition-colors"
                   aria-label="FAQ about free AI tools">
                  AI Tools FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Legal - AI Web Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" 
                   className="text-muted-foreground hover:text-primary transition-colors"
                   aria-label="Privacy Policy for AI Tools">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={`${FOREVER_LINK}&page=terms`}
                   className="text-muted-foreground hover:text-primary transition-colors"
                   aria-label="Terms of Service for Free AI Tools">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Contact AI Web Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:4758008096" 
                   className="text-muted-foreground hover:text-primary transition-colors"
                   aria-label="Call AI Web Tools support">
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" 
                   className="text-muted-foreground hover:text-primary transition-colors"
                   aria-label="Email AI Web Tools support">
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-bold rounded-full"
            >
              <a href={FOREVER_LINK} aria-label="Explore more free AI tools from AI Web Tools">
                Discover More Free AI Tools
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a href={FOREVER_LINK} className="text-muted-foreground hover:text-primary transition-colors text-sm text-center" aria-label="AI Web Tools LLC - Free AI Tools Provider">
              © 2025 AI WEB TOOLS LLC - Leading Free AI Tools Provider
            </a>
            <div>
              <span className="text-muted-foreground text-sm">Advanced AI Technology & Free AI Tools Since 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
