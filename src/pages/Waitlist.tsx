import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Thank you! You've been added to our waitlist. We'll be in touch soon!", {
      duration: 4000,
      icon: <CheckCircle2 className="h-5 w-5" />
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

            {/* Form Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* First Name */}
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-primary-foreground">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40 focus:ring-white/20"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-primary-foreground">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40 focus:ring-white/20"
                    placeholder="Enter your last name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40 focus:ring-white/20"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40 focus:ring-white/20"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-primary-foreground">
                    Company (Optional)
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40 focus:ring-white/20"
                    placeholder="Enter your company name"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary-foreground">
                    Additional Information (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40 focus:ring-white/20 min-h-[100px]"
                    placeholder="Tell us about your cross-border payment needs..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-3"
                  size="lg"
                >
                  Join Waitlist & Get Early Access
                </Button>

                {/* Privacy note */}
                <p className="text-xs text-primary-foreground/60 text-center">
                  By joining, you agree to receive updates about Metusa. 
                  We respect your privacy and you can unsubscribe at any time.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;