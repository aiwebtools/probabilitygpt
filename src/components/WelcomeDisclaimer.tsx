
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";

const WelcomeDisclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    if (!hasSeenDisclaimer) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("hasSeenDisclaimer", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-gradient-to-br from-background via-accent to-background border-primary/20 max-w-md">
        <div className="space-y-6 py-6">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-['Space_Grotesk']">
            Welcome to Probability GPT
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            By using this tool, you acknowledge that the probability calculations and assessments provided are for informational purposes only. Results should not be considered as definitive predictions.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handleAgree}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              I Agree
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDisclaimer;
