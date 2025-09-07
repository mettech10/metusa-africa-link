import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import HubSpotModal from "@/components/HubSpotModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navigation onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <Features />
      <WhyUs />
      <SignupForm />
      <Footer />
      <HubSpotModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Index;
