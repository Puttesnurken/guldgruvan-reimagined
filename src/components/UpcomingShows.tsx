import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { Button } from "./ui/button";

const UpcomingShows = () => {
  const shows = [
    {
      date: "15 November 2025",
      time: "19:00",
      title: "Lördagskväll på Guldgruvan",
      location: "Guldgruvan Comedy Club",
      description: "En kväll full av skratt med några av Sveriges bästa komiker. Hemlig lineup som alltid!",
      available: true,
      price: "250 kr"
    },
    {
      date: "22 November 2025",
      time: "19:00",
      title: "Lördagskväll på Guldgruvan",
      location: "Guldgruvan Comedy Club",
      description: "Nya ansikten och gamla favoriter. Du vet aldrig vem som dyker upp på scenen!",
      available: true,
      price: "250 kr"
    },
    {
      date: "29 November 2025",
      time: "19:00",
      title: "Lördagskväll på Guldgruvan",
      location: "Guldgruvan Comedy Club",
      description: "Månadens sista show - missa inte chansen att avsluta november med skratt!",
      available: true,
      price: "250 kr"
    },
    {
      date: "6 December 2025",
      time: "19:00",
      title: "Julspecial på Guldgruvan",
      location: "Guldgruvan Comedy Club",
      description: "Julens roligaste kväll! Glögg, pepparkakor och massa skratt.",
      available: false,
      price: "300 kr"
    }
  ];

  return (
    <section id="shows" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient overlays */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-bw-gradient bg-clip-text text-transparent">
              Kommande Shower
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Boka din biljett nu och upplev Sveriges roligaste komedikväll!
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {shows.map((show, index) => (
            <div
              key={index}
              className="animate-scale-in opacity-0"
              style={{ 
                animationDelay: `${0.2 + (index * 0.1)}s`,
                animationFillMode: "forwards"
              }}
            >
              <div className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-500 hover:shadow-elevation-high h-full flex flex-col">
                {/* Header with date */}
                <div className="bg-secondary/50 p-6 border-b border-border/50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-bold text-lg">{show.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{show.title}</h3>
                    </div>
                    {!show.available && (
                      <span className="px-3 py-1 bg-destructive/20 text-destructive text-xs font-bold rounded-full whitespace-nowrap">
                        SLUTSÅLT
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{show.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{show.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {show.description}
                  </p>

                  {/* Footer with price and button */}
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
                    <div className="text-2xl font-bold text-foreground">
                      {show.price}
                    </div>
                    <Button 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group-hover:shadow-glow"
                      disabled={!show.available}
                    >
                      <Ticket className="w-4 h-4 mr-2" />
                      {show.available ? "Köp biljett" : "Slutsålt"}
                    </Button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-bw-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dörrarna öppnar 30 minuter innan showstart. Vi rekommenderar att komma i god tid för att få bästa platserna!
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingShows;
