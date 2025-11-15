import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, Calendar } from "lucide-react";
import simonGardenfors from "@/assets/simon-gardenfors.png";
import wagrell from "@/assets/wagrell.png";
import chippen from "@/assets/chippen.png";
import davidAsp from "@/assets/david-asp.jpg";
import robinBerglund from "@/assets/robin-berglund.jpg";
import michelSanchez from "@/assets/michel-sanchez.jpg";

const BookEvent = () => {
  const featuredComedians = [
    { name: "Simon Gärdenfors", image: simonGardenfors },
    { name: "Johanna Hurtig Wagrell", image: wagrell },
    { name: "Simon Svensson", image: chippen },
    { name: "David Asp", image: davidAsp },
    { name: "Robin Berglund", image: robinBerglund },
    { name: "Michel Sanchez", image: michelSanchez },
  ];

  return (
    <section id="book-event" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Boka Event
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gör din företagskväll, kickoff eller krogshow oförglömlig med våra skickliga komiker
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="border-border bg-card hover:shadow-elevation-high transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Vad ingår?</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Professionell standupkomiker med minst 30-45 minuter material</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Anpassat innehåll efter er målgrupp och önskemål</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Teknisk utrustning (mikrofon och ljudanläggning vid behov)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Möjlighet att boka flera komiker för en hel show</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Flexibla tider och platser efter överenskommelse</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-elevation-high transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Pris & Kontakt</h3>
              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                  <p className="text-3xl font-bold text-primary mb-2">10 000 - 15 000 kr</p>
                  <p className="text-sm text-muted-foreground">Per event, beroende på längd och antal komiker</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <a href="mailto:booking@guldgruvan.se" className="hover:text-primary transition-colors">
                      booking@guldgruvan.se
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" size={20} />
                    <a href="tel:+46701234567" className="hover:text-primary transition-colors">
                      070-123 45 67
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary" size={20} />
                    <span>Bokningar tas emot alla dagar i veckan</span>
                  </div>
                </div>

                <Button className="w-full mt-6" size="lg">
                  Skicka Bokningsförfrågan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-primary mb-4">Några av våra komiker</h3>
          <p className="text-muted-foreground">
            Vi har Sveriges bästa komiker redo att underhålla er
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredComedians.map((comedian, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-500 hover:shadow-elevation-high">
                <img
                  src={comedian.image}
                  alt={comedian.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p className="text-sm text-center mt-3 text-foreground font-medium group-hover:text-primary transition-colors">
                {comedian.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookEvent;
