import Clientele from "@/components/landing/clientele";
import FAQ from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Guarantees from "@/components/landing/guarantees";
import Hero from "@/components/landing/hero";
import Included from "@/components/landing/included";
import Navbar from "@/components/landing/navbar";
import Pricing from "@/components/landing/pricing";
import Test from "@/components/landing/test";
import Testimonials from "@/components/landing/testimonials";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Included />
      <Test />
      <Guarantees />
      <Clientele />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
