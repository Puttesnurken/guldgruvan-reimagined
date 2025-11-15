import ComedianCard from "./ComedianCard";

const Comedians = () => {
  const comedians = [
    {
      name: "Simon Gärdenfors",
      description: "Trots ämnen som sex och knark har Gärdenfors beskrivits som \"gullig\". Det är till viss del sant. Han ligger bakom succér som humortrion \"Specialisterna\" och låten \"Knulla barn\". Han samlar på olika godisförpackningar och etiketter och har på sin fritid blivit en av sveriges största underground-komiker.",
      image: "https://guldgruvan.com/wp-content/uploads/2025/02/simon-g2-1.png"
    },
    {
      name: "Johanna Hurtig Wagrell",
      description: "Johanna Wagrell! Mest känd för sina poddar \"Vad blir det för mord?\" och \"Kafferepet\" som hon driver tillsammans med Ellinor Svensson respektive Albin Olsson och Nisse Hallberg. Utöver det är hon en av sveriges absolut vassaste komiker.",
      image: "https://guldgruvan.com/wp-content/uploads/2025/02/wagrell.png"
    },
    {
      name: "Simon Svensson",
      description: "Simon Svensson är på många sätt humorsveriges Jay-Z. Han började som komiker men har på senare år genom imperiet Under Produktion gjort sig själv känd som podmogul och direktör. Han är också en av grundarna till sveriges bästa klubb Under Jord.",
      image: "https://guldgruvan.com/wp-content/uploads/2025/02/chippen2.png"
    }
  ];

  return (
    <section id="comedians" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Hemlig Lineup
            </span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            På Guldgruvan har vi en helt hemlig lineup. Ni får aldrig veta. Det spelar ingen roll hur mycket ni tjatar sa jag! Lägg av. Okej. Vi kan säga såhär: Sveriges bästa komiker kör hos oss. Bland annat dom här komikerna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comedians.map((comedian, index) => (
            <div
              key={comedian.name}
              className="animate-fade-in-up opacity-0"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards"
              }}
            >
              <ComedianCard {...comedian} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comedians;
