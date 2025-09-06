import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <WhyUs />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Index;
