import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, Calendar } from "lucide-react";

const BookEvent = () => {
  return (
    <section id="book-event" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-normal mb-6 inline-block">
            <span className="bg-foreground text-background px-6 py-3">
              Boka Event
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gör din företagskväll, kickoff eller krogshow oförglömlig med våra skickliga komiker
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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
              <h3 className="text-2xl font-bold text-primary mb-6">Kontakt</h3>
              <div className="space-y-6">
                
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
      </div>
    </section>
  );
};

export default BookEvent;
