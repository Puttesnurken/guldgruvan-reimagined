import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import venue1 from "@/assets/venue-1.jpg";
import venue2 from "@/assets/venue-2.jpg";
import venue3 from "@/assets/venue-3.jpg";
const heroImages = [venue1, venue2, venue3];
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => <img key={index} src={image} alt={`Guldgruvan standupklubb scen i Stockholm - Sveriges bästa comedy club ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-70" : "opacity-0"}`} />)}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? "bg-primary w-6" : "bg-muted-foreground/50 hover:bg-muted-foreground"}`} aria-label={`Visa bild ${index + 1}`} />)}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-6 animate-fade-in">
          <span className="bg-bw-gradient bg-clip-text text-transparent mx-0 font-normal text-9xl">
            GULDGRUVAN
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-4 max-w-3xl mx-auto animate-fade-in-up opacity-0 font-pixel uppercase" style={{
        animationDelay: "0.2s",
        animationFillMode: "forwards"
      }}>
          Sveriges coolaste klubb
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{
        animationDelay: "0.6s",
        animationFillMode: "forwards"
      }}>
          <Button asChild size="lg" className="rounded-none bg-bw-gradient text-primary-foreground font-medium text-lg px-8 transition-all duration-300 hover:-translate-y-2 border-2 border-primary" style={{ boxShadow: 'none' }} onMouseEnter={e => e.currentTarget.style.boxShadow = '8px 8px 0px 0px hsl(var(--primary))'} onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
            <a href="https://ticketmaster.se/artist/guldgruvan-standupklubb-biljetter/1241633" target="_blank" rel="noopener noreferrer">
              Köp Biljetter
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium text-lg px-8 transition-all duration-300 hover:-translate-y-2" style={{ boxShadow: 'none' }} onMouseEnter={e => e.currentTarget.style.boxShadow = '8px 8px 0px 0px hsl(var(--primary))'} onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'} onClick={() => {
          const element = document.getElementById("comedians");
          element?.scrollIntoView({
            behavior: "smooth"
          });
        }}>
            Se Komiker
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;