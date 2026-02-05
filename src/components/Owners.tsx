import foundersImage from "@/assets/founders.jpg";

const Owners = () => {
  return (
    <section
      id="owners"
      className="py-24 relative overflow-hidden min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${foundersImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in-up opacity-0" style={{
          animationDelay: '0.1s',
          animationFillMode: 'forwards'
        }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-bw-gradient bg-clip-text text-transparent">
              Grundarna
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-pixel uppercase">
            Leon Jämtin & Johannes Brenning
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Möt duon bakom Guldgruvan - Sveriges mest innovativa komediklubb
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tillsammans har Leon och Johannes skapat en unik plats där Sveriges bästa komiker kan växa och underhålla. Med passion för humor och en vision om att göra standup tillgängligt för alla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Owners;