
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-accent/20 border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://chatgpt.com/g/g-UUjXxzpMX-probability-gpt" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  Get Started
                </a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  More AI Tools
                </a>
              </li>
              <li>
                <a href="#faq" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:4758008096" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" 
                   className="text-gray-400 hover:text-primary transition-colors">
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-black font-bold rounded-full"
            >
              <a href="https://www.aiwebtools.ai">
                More AI Tools
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a href="https://www.aiwebtools.ai" className="text-gray-400 hover:text-primary transition-colors">
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
            <div className="mt-4 md:mt-0">
              <span className="text-gray-400">Built with advanced AI technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
