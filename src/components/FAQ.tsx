import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Hur fungerar den hemliga lineupen?",
      answer: "Vi avslöjar aldrig i förväg vilka komiker som kommer att uppträda. Detta gör varje show till en unik överraskning och håller upplevelsen fräsch och spännande."
    },
    {
      question: "Hur köper jag biljetter?",
      answer: "Biljetter köps enkelt via Ticketmaster. Klicka på Biljetter-knappen här på sidan så kommer du direkt till biljettsidan."
    },
    {
      question: "Vilken är åldersgränsen?",
      answer: "Guldgruvan har 18 års åldersgräns. Var vänlig att ta med giltig legitimation."
    },
    {
      question: "Hur lång är showen?",
      answer: "En typisk show på Guldgruvan varar cirka 2 timmar inklusive paus."
    },
    {
      question: "Serveras mat och dryck?",
      answer: "Ja, vi har ett fullt utrustat barområde där du kan köpa dryck och snacks före showen och under pausen."
    },
    {
      question: "Var ligger klubben?",
      answer: "Kontakta oss via våra sociala medier eller e-post för information om platsen och vägbeskrivning."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-bw-gradient bg-clip-text text-transparent">
              Vanliga Frågor
            </span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
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
