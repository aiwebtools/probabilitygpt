
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Python-Powered AI Probability Analysis",
      description: "Advanced calculations using Python AI algorithms to determine accurate probability scores with machine learning",
    },
    {
      title: "Free AI Tools for Web Research",
      description: "Comprehensive analysis of multiple credible sources using artificial intelligence for informed decision-making",
    },
    {
      title: "AI-Generated Clear Responses",
      description: "Straightforward yes/no answers backed by AI data analysis and probability calculations from our free AI tools",
    },
    {
      title: "Transparent AI Methodology",
      description: "Step-by-step AI process with detailed explanations when requested - completely free AI tools experience",
    },
  ];

  return (
    <section className="py-20 bg-accent/20" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Free AI Tools: Powerful Features
        </h2>
        <h3 className="text-xl text-center mb-12 text-gray-300">
          Advanced Artificial Intelligence Tools for Probability Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all">
              <CheckCircle className="w-12 h-12 text-primary mb-4" aria-hidden="true" />
              <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
