import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Waitlist = () => {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 opacity-95"
        style={{ background: 'var(--background-gradient)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with back button */}
        <div className="p-6">
          <Link to="/">
            <Button 
              variant="ghost" 
              className="text-primary-foreground hover:bg-white/10 p-2"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">
                Join the Waitlist
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Be the first to experience seamless cross-border payments to Africa.
                Get exclusive early access and unlock your welcome bonus.
              </p>
            </div>

            {/* Waitlist Form Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="p-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-3"
                  >
                    Join the Waitlist
                  </Button>
                </form>
                
                {/* HubSpot form will be injected here */}
                <div id="hubspot-form"></div>
                
                {/* Privacy note */}
                <p className="text-xs text-primary-foreground/60 text-center mt-4">
                  By joining, you agree to receive updates about Metusa. 
                  We respect your privacy and you can unsubscribe at any time.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;