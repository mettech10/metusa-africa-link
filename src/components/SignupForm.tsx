import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      toast.success("Thanks! We'll notify you when Metusa launches.", {
        description: "Early users will receive a special welcome bonus."
      });
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-heading font-bold text-foreground mb-6">
            Be the First to Experience Metusa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join our waitlist today and be the first to know when we launch.
          </p>
          <p className="text-muted-foreground font-medium mt-4">
            💡 Early users will receive a special welcome bonus when we go live.
          </p>
        </div>
        
        {/* Signup Form */}
        <Card className="max-w-md mx-auto shadow-xl border-0 bg-card">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl font-semibold">Get Early Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 border-input-border focus:border-primary focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 border-input-border focus:border-primary focus:ring-primary"
                />
              </div>
              
              <Button 
                type="submit"
                variant="default" 
                size="lg"
                className="w-full"
              >
                Register Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignupForm;