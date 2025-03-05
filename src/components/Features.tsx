
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Python-Powered Probability Analysis",
      description: "Advanced calculations using Python to determine accurate probability scores",
    },
    {
      title: "Comprehensive Web Research",
      description: "Thorough analysis of multiple credible sources for informed decision-making",
    },
    {
      title: "Clear Yes/No Responses",
      description: "Straightforward answers backed by data and probability calculations",
    },
    {
      title: "Step-by-Step Process",
      description: "Transparent methodology with detailed explanations when requested",
    },
  ];

  return (
    <section className="py-20 bg-accent/20" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
