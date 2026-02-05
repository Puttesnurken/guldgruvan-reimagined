import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ZigzagDivider from "@/components/ZigzagDivider";
import UpcomingShows from "@/components/UpcomingShows";
import Comedians from "@/components/Comedians";
import Owners from "@/components/Owners";
import About from "@/components/About";
import BookEvent from "@/components/BookEvent";
import FindUs from "@/components/FindUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/SEOSchema";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOSchema />
      <Navigation />
      <Hero />
      <ZigzagDivider />
      <UpcomingShows />
      <Comedians />
      <Owners />
      <About />
      <BookEvent />
      <FindUs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
