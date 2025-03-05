
import { Code2, Database, Brain, Gauge } from "lucide-react";

const ToolCards = () => {
  const tools = [
    {
      icon: <Code2 className="w-12 h-12 text-primary" />,
      title: "Python-Powered Analysis",
      description: "Advanced algorithms process complex probability scenarios with high accuracy"
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Comprehensive Data",
      description: "Access to extensive databases for thorough probability assessments"
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "AI-Enhanced Results",
      description: "Machine learning models improve accuracy over time"
    },
    {
      icon: <Gauge className="w-12 h-12 text-primary" />,
      title: "Real-Time Processing",
      description: "Get instant probability calculations for time-sensitive decisions"
    }
  ];

  return (
    <section className="py-20" id="tools">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Powerful Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl glass-card hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{tool.title}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolCards;
