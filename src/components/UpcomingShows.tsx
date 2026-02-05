import { useState } from "react";
import { Calendar, Clock, MapPin, Ticket, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
const UpcomingShows = () => {
  const [showAll, setShowAll] = useState(false);
  const shows = [{
    date: "5 februari 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/661949754",
    available: true
  }, {
    date: "12 februari 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/1776329424",
    available: true
  }, {
    date: "19 februari 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/599797920",
    available: true
  }, {
    date: "26 februari 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/1864001394",
    available: true
  }, {
    date: "5 mars 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/1224613272",
    available: true
  }, {
    date: "12 mars 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/1950248950",
    available: true
  }, {
    date: "19 mars 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/1314808768",
    available: true
  }, {
    date: "26 mars 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/721297055",
    available: true
  }, {
    date: "2 april 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/1758059035",
    available: true
  }, {
    date: "9 april 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/330404075",
    available: true
  }, {
    date: "16 april 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/571843336",
    available: true
  }, {
    date: "23 april 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/1866004518",
    available: true
  }, {
    date: "30 april 2026",
    time: "20:00",
    title: "Guldgruvan ",
    location: "Sofia Common, Stockholm",
    ticketUrl: "https://www.ticketmaster.se/event/guldgruvan-comedyklubb-biljetter/2076887578",
    available: true
  }];
  return <section id="shows" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient overlays */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{
        animationDelay: '0.1s',
        animationFillMode: 'forwards'
      }}>
          <h2 className="text-5xl md:text-6xl font-normal mb-6 inline-block">
            <span className="bg-foreground text-background px-6 py-3">
              Kommande Shower
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Boka din biljett nu och upplev Sveriges roligaste komedikväll!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-extralight text-4xl">
          {shows.slice(0, showAll ? shows.length : 6).map((show, index) => <div key={index} className="animate-scale-in opacity-0" style={{
          animationDelay: `${0.2 + index * 0.1}s`,
          animationFillMode: "forwards"
        }}>
              <div className="group relative overflow-hidden rounded-none bg-card border-2 border-primary hover:-translate-y-2 transition-all duration-300 h-full flex flex-col" style={{
            boxShadow: 'none'
          }} onMouseEnter={e => e.currentTarget.style.boxShadow = '8px 8px 0px 0px hsl(var(--primary))'} onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                {/* Header with date */}
                <div className="bg-secondary/50 p-4 border-b border-border/50">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-bold text-base font-fnaf">{show.date}</span>
                      </div>
                      <h3 className="font-bold text-foreground font-pixel text-4xl uppercase">{show.title}</h3>
                    </div>
                    {!show.available && <span className="px-2 py-1 bg-destructive/20 text-destructive text-xs font-bold rounded-full whitespace-nowrap">
                        SLUTSÅLT
                      </span>}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="space-y-2 mb-auto">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{show.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{show.location}</span>
                    </div>
                  </div>

                  {/* Footer with button */}
                  <div className="flex items-center justify-center pt-4 border-t border-border/50 mt-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group-hover:shadow-glow w-full font-nabla text-lg" disabled={!show.available} asChild={show.available}>
                      {show.available ? <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer">
                          <Ticket className="w-4 h-4 mr-2" />
                          Köp biljett
                        </a> : <>
                          <Ticket className="w-4 h-4 mr-2" />
                          Slutsålt
                        </>}
                    </Button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-bw-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl pointer-events-none"></div>
              </div>
            </div>)}
        </div>

        {/* Show More/Less Button */}
        {shows.length > 6 && <div className="mt-8 text-center">
            <Button onClick={() => setShowAll(!showAll)} variant="outline" className="px-8 py-6 text-lg">
              {showAll ? <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Visa färre
                </> : <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Visa fler shower ({shows.length - 6} till)
                </>}
            </Button>
          </div>}

        {/* Additional info */}
        <div className="mt-12 text-center animate-fade-in opacity-0" style={{
        animationDelay: '0.8s',
        animationFillMode: 'forwards'
      }}>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dörrarna öppnar 30 minuter innan showstart. Vi rekommenderar att komma i god tid för att få bästa platserna!
          </p>
        </div>
      </div>
    </section>;
};
export default UpcomingShows;