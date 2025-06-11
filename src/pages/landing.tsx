import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import Pricing from "@/components/landing/pricing";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </>
  );
};

export default Landing;
