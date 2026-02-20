import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Vad är Guldgruvan Standupklubb?",
      answer: "Guldgruvan är en Stand-Up Comedy klubb som finns i Stockholm och Malmö."
    },
    {
      question: "När och var?",
      answer: "Guldgruvan kör varje torsdag i Stockholm i källaren på Restaurang La Cucaracha, Bondegatan 2 vid Medborgarplatsen i Stockholm. I Malmö är det varanna torsdag i källaren på Pizzeria Rex, Nobelvägen 107, Malmö."
    },
    {
      question: "Kostar det något?",
      answer: "Nej! Guldgruvan är helt gratis. Kom bara förbi och njut av showen!"
    },
    {
      question: "Vilken typ av humor kan man se på Guldgruvan?",
      answer: "Komedin har beskrivits som den nya generationens stand-up, delvis vågad och mörk men också fokuserad på kultur. Om du har sett mycket Stand-Up comedy live förut kommer du gilla showerna på Guldgruvan."
    },
    {
      question: "Vilket språk är det på?",
      answer: "Showerna är på svenska men komiker som uppträder på engelska uppträder ofta på Guldgruvan."
    },
    {
      question: "Är det grov komedi?",
      answer: "Det är väldigt blandat och beror mycket på vilken kväll man besöker Guldgruvan. Publiken på Guldgruvan brukar gilla grov humor vilket gör att komiker säger saker de inte gör på någon annan klubb i Sverige."
    },
    {
      question: "Vilka kan man se på Guldgruvan?",
      answer: "Vilka som uppträder på Guldgruvan kommer alltid vara hemliga men namn som Leon Jämtin, David Asp, Christoffer Nyqvist, Johannes Brenning, Sinthujha VK, Lovisa Hendriksson, Simon Gärdenfors och Anton Estby uppträder ofta."
    },
    {
      question: "Vad kan jag förvänta mig av showen?",
      answer: "Du kan förvänta dig att ha roligt och skratta väldigt mycket."
    },
    {
      question: "Vilken typ av komiker får man se på Guldgruvan?",
      answer: "På Guldgruvan uppträder bara komiker som regelbundet uppträder för en betalande publik. Guldgruvan är inte en klubb för helt nya komiker."
    },
    {
      question: "Vad har tidigare besökare sagt om Guldgruvan?",
      answer: "På Abundo har en användare skrivit: \"Fantastiskt bra standup i en grym lokal med äkta Comedy Cellar-känsla. Lite 'acquired taste' dock, om du inte gillar Specialisterna kanske det inte är något för dig.\""
    },
    {
      question: "Kan jag kolla in Guldgruvans komedi först?",
      answer: "Ja! Komiker som tidigare har stått på Guldgruvans scen syns bland annat i vår komiker-sektion här på sidan."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-normal text-center mb-12 inline-block">
            <span className="bg-foreground text-background px-6 py-3">
              FAQ
            </span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-xl font-bold text-foreground hover:text-primary font-impact tracking-wide">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
