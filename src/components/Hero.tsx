import { Button } from "@/components/ui/button";
import heroStage from "@/assets/hero-stage.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStage}
          alt="Guldgruvan comedy club stage"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-bw-gradient bg-clip-text text-transparent">
            GULDGRUVAN
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-4 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Sveriges bästa stand-up klubb med hemlig lineup
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Upplev Sveriges vassaste komiker i en intim och professionell miljö
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <Button
            asChild
            size="lg"
            className="bg-bw-gradient text-primary-foreground font-bold text-lg px-8 hover:shadow-glow transition-all animate-glow-pulse"
          >
            <a href="https://ticketmaster.se/artist/guldgruvan-standupklubb-biljetter/1241633" target="_blank" rel="noopener noreferrer">
              Köp Biljetter
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 transition-all"
            onClick={() => {
              const element = document.getElementById("comedians");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
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
    </section>
  );
};

export default Hero;
