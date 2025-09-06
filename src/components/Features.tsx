import { CheckCircle } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold text-foreground mb-6">
            Simple. Reliable. Global.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Metusa is building a smarter way to send money from the UK to Africa.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0" />
              <h3 className="font-semibold text-foreground">Fair Exchange Rates</h3>
            </div>
            <p className="text-muted-foreground">
              No hidden fees with transparent pricing you can trust.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0" />
              <h3 className="font-semibold text-foreground">Fast Transfers</h3>
            </div>
            <p className="text-muted-foreground">
              Direct to bank accounts & mobile wallets in minutes.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0" />
              <h3 className="font-semibold text-foreground">Secure Transactions</h3>
            </div>
            <p className="text-muted-foreground">
              Full transparency with industry-leading security.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-foreground flex-shrink-0" />
              <h3 className="font-semibold text-foreground">Early User Rewards</h3>
            </div>
            <p className="text-muted-foreground">
              Special benefits for our founding community members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;