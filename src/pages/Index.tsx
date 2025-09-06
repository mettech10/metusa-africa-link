import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <WhyUs />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Index;
