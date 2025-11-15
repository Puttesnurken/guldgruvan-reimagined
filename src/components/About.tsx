const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-bw-gradient bg-clip-text text-transparent">
              Om Guldgruvan
            </span>
          </h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Guldgruvan är Sveriges mest intima och professionella stand-up klubb där vi presenterar landets vassaste komiker i en unik atmosfär.
            </p>
            <p>
              Med vår hemliga lineup garanterar vi att varje kväll blir en överraskning fylld med skratt och kvalitet. Vi tror på att komiken ska tala för sig själv, och våra artister är handplockade för att leverera oförglömliga upplevelser.
            </p>
            <p className="text-primary font-semibold">
              Välkommen till klubben där Sveriges bästa komiker bjuder på show!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
