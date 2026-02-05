import foundersImage from "@/assets/founders.jpg";
const Owners = () => {
  return <section id="owners" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{
        animationDelay: '0.1s',
        animationFillMode: 'forwards'
      }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-bw-gradient bg-clip-text text-transparent">
              Grundarna
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Möt duon bakom Guldgruvan - Sveriges mest innovativa komediklubb
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="animate-scale-in opacity-0" style={{
          animationDelay: '0.3s',
          animationFillMode: "forwards"
        }}>
            <div className="group relative overflow-hidden rounded-lg bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-elevation-high hover:-translate-y-2 border-0">
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={foundersImage} alt="Leon Jämtin & Johannes Brenning - Grundare av Guldgruvan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80"></div>
                
                {/* Name overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-foreground mb-1 font-pixel">Leon Jämtin & Johannes Brenning</h3>
                  <p className="text-primary font-medium font-fnaf">Grundare</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-t border-border/50">
                <p className="text-muted-foreground leading-relaxed">
                  Tillsammans har Leon och Johannes skapat en unik plats där Sveriges bästa komiker kan växa och underhålla. Med passion för humor och en vision om att göra standup tillgängligt för alla.
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-bw-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Owners;