const About = () => {
  return <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-normal mb-8 inline-block">
            <span className="bg-foreground text-background py-px px-[2px] my-0">
              Om Guldgruvan
            </span>
          </h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Guldgruvan är en stört rolig och lite annorlunda klubb. Vi försöker gynna den växande alternativa ståupp-komedin i Sverige med komiker som skiljer sig från dom vanliga komikerna.
            </p>
            <p>
              Vi kör alltid hemlig lineup, dels på grund av att Guldgruvan är en "helhetsupplevelse" – ett ord vi uppfunnit. Man kommer hit för att uppleva klubben och inte en viss komiker i sig. En annan anledning är att etablerade kändisar ofta kommer till oss för att testa material i hemlighet.
            </p>
            <p className="text-primary font-medium">
              Välkommen till Sveriges mest unika gratisklubb.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;