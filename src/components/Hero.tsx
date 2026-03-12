
import { Button } from "@/components/ui/button";

const FOREVER_LINK = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-gradient-xy"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient-x">
            Free AI Tools: Probability GPT
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-muted-foreground">
            Advanced AI-Powered Probability Analysis Tool
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
            Discover truth through probability with Python calculations and comprehensive web research. Free AI tools from AI Web Tools - your trusted source for artificial intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button 
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-full text-base sm:text-lg"
            >
              <a href="https://chatgpt.com/g/g-UUjXxzpMX-probability-gpt" aria-label="Start using Probability GPT - Free AI Tool">
                Get Started with Free AI Tools
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-primary hover:bg-primary/10 text-foreground font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-full text-base sm:text-lg"
            >
              <a href="#how-it-works" aria-label="Learn more about AI Web Tools">
                Explore More AI Tools
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
