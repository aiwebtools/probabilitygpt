
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How accurate are the probability calculations?",
      answer: "Our calculations utilize advanced Python algorithms to provide highly accurate probability scores, typically within a 95% confidence interval when sufficient data is available."
    },
    {
      question: "What sources do you use for research?",
      answer: "We analyze multiple credible sources including academic databases, statistical reports, and verified historical data to ensure comprehensive and reliable results."
    },
    {
      question: "How long does it take to get a response?",
      answer: "Most queries are processed within seconds, providing immediate probability assessments along with detailed explanations when requested."
    },
    {
      question: "Can I see the calculation methodology?",
      answer: "Yes! We provide transparent step-by-step breakdowns of our probability calculations upon request, helping you understand how we arrived at each conclusion."
    }
  ];

  return (
    <section className="py-20 bg-accent/10" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
