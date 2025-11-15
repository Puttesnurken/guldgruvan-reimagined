import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { Button } from "./ui/button";

const FindUs = () => {
  return (
    <section id="find-us" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-bw-gradient bg-clip-text text-transparent">
              Hitta Oss
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Välkommen till Guldgruvan - mitt i hjärtat av Stockholm
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div 
            className="animate-slide-in-left opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-elevation-medium transition-all duration-500">
              <h3 className="text-2xl font-bold text-foreground mb-6">Kontaktinformation</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Adress</h4>
                    <p className="text-muted-foreground">Södermalmsvägen 123</p>
                    <p className="text-muted-foreground">118 46 Stockholm</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Öppettider</h4>
                    <p className="text-muted-foreground">Fredagar & Lördagar: 18:00 - 23:00</p>
                    <p className="text-muted-foreground">Övriga dagar: Stängt</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                    <a href="tel:+46701234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +46 70 123 45 67
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-post</h4>
                    <a href="mailto:info@guldgruvan.se" className="text-muted-foreground hover:text-primary transition-colors">
                      info@guldgruvan.se
                    </a>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-glow">
                  <Navigation className="w-4 h-4 mr-2" />
                  Öppna i Google Maps
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 bg-secondary/50 border border-border/50 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Hitta hit</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vi ligger centralt på Södermalm, bara 5 minuters promenad från Medborgarplatsen. 
                Närmaste tunnelbanestation är Medborgarplatsen (Röda och Gröna linjen). 
                Det finns även god tillgång till busshållplatser i närheten.
              </p>
            </div>
          </div>

          {/* Map */}
          <div 
            className="animate-scale-in opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <div className="bg-card border border-border rounded-lg overflow-hidden h-full min-h-[500px] hover:shadow-elevation-medium transition-all duration-500">
              {/* Placeholder for map - in a real implementation, this would be a Google Maps embed */}
              <div className="w-full h-full bg-muted/20 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="text-center z-10">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-muted-foreground">
                    Karta laddas här
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Google Maps integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parking Info */}
        <div className="mt-12 max-w-6xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <h4 className="font-semibold text-foreground mb-2">Parkering</h4>
            <p className="text-muted-foreground">
              Det finns flera parkeringsgarage i närområdet. Närmast ligger Medborgarplatsen Parkering, ca 3 minuters promenad från klubben.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
