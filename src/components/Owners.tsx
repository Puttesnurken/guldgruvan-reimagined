import leonJamtin from "@/assets/leon-jamtin.jpg";
import johannesBrenning from "@/assets/johannes-brenning.jpg";

const Owners = () => {
  const owners = [
    {
      name: "Leon Jämtin",
      title: "Medgrundare & VD",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: leonJamtin
    },
    {
      name: "Johannes Brenning",
      title: "Medgrundare & Kreativ Direktör",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: johannesBrenning
    }
  ];

  return (
    <section id="owners" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-bw-gradient bg-clip-text text-transparent">
              Grundarna
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Möt duon bakom Guldgruvan - Sveriges mest innovativa komediklubb
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {owners.map((owner, index) => (
            <div
              key={owner.name}
              className="animate-scale-in opacity-0"
              style={{ 
                animationDelay: `${0.3 + (index * 0.2)}s`,
                animationFillMode: "forwards"
              }}
            >
              <div className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-500 hover:shadow-elevation-high hover:-translate-y-2">
                {/* Image container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80"></div>
                  
                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-foreground mb-1">{owner.name}</h3>
                    <p className="text-primary font-medium">{owner.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed">
                    {owner.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-bw-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <div className="inline-block px-8 py-6 bg-secondary/30 border border-border rounded-lg backdrop-blur-sm">
            <p className="text-lg text-muted-foreground max-w-2xl">
              <span className="text-foreground font-semibold">Tillsammans</span> har Leon och Johannes skapat en unik plats där Sveriges bästa komiker kan växa och underhålla. Med passion för humor och en vision om att göra standup tillgängligt för alla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owners;
