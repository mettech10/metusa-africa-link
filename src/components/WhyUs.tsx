import { DollarSign, Zap, Shield } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "What you see is what you pay."
    },
    {
      icon: Zap,
      title: "Instant Transfers", 
      description: "Money delivered in minutes, not days."
    },
    {
      icon: Shield,
      title: "Built for Trust",
      description: "A platform designed with security at its core."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-foreground mb-4">
            Why choose Metusa?
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Icon Container */}
              <div className="mx-auto w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/50 transition-colors">
                <feature.icon className="h-10 w-10 text-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;