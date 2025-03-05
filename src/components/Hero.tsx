
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-gradient-xy"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient-x">
            Discover Truth Through Probability
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Advanced AI-powered probability analysis with Python calculations and comprehensive web research
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button 
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-black font-bold py-6 px-8 rounded-full text-lg"
            >
              <a href="https://chatgpt.com/g/g-UUjXxzpMX-probability-gpt">
                Get Started Now
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-primary hover:bg-primary/10 text-white font-bold py-6 px-8 rounded-full text-lg"
            >
              <a href="#how-it-works">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
