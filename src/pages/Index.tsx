import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Comedians from "@/components/Comedians";
import Owners from "@/components/Owners";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Comedians />
      <Owners />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
