import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex items-center space-x-6">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-white/90 hover:text-white transition-colors font-medium"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white/90 hover:text-white transition-colors font-medium"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-white/90 hover:text-white transition-colors font-medium"
        >
          Contact
        </button>
        <Button 
          variant="default"
          size="sm"
          className="bg-white text-primary opacity-50 cursor-not-allowed font-semibold"
          disabled
        >
          Join Here
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;