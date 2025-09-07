import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20" id="hero">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-95"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <div className="space-y-6">
          {/* Main headline */}
          <h1 className="text-hero font-bold leading-tight mb-6">
            Metusa: The Smarter Way 
            <span className="block">to Send Money to Africa</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-subheading text-white/90 max-w-2xl mx-auto mb-12">
            Seamless, secure, and affordable cross-border payments — designed for trust and transparency.
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="default" 
            size="lg"
            className="group px-8 py-4 text-lg font-semibold"
            onClick={onOpenModal}
          >
            Join the Waitlist & Unlock Your Welcome Bonus
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;