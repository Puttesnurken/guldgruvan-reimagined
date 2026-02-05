import { useState } from "react";
import ComedianCard from "./ComedianCard";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import simonGardenfors from "@/assets/simon-gardenfors-new.webp";
import wagrell from "@/assets/johanna-wagrell-new.jpg";

import davidAsp from "@/assets/david-asp-new.jpg";
import robinBerglund from "@/assets/robin-berglund-new.jpg";
import michelSanchez from "@/assets/michel-sanchez-new.jpg";
import emilArvas from "@/assets/emil-arvas-new.jpg";
import atoKarlsson from "@/assets/ato-karlsson-new.jpg";
import lovisaHenriksson from "@/assets/lovisa-henriksson-new.jpg";
import albinOlsson from "@/assets/albin-olsson-new.jpg";
import luddeSamuelsson from "@/assets/ludde-samuelsson-new.png";
import christerSvensson from "@/assets/christer-svensson-new.jpg";
import axelTidelius from "@/assets/axel-tidelius-new.jpg";
import fredrikAndersson from "@/assets/fredrik-andersson-new.jpg";
import ellinorSvensson from "@/assets/ellinor-svensson-new.jpg";
import feliciaTomala from "@/assets/felicia-tomala-new.jpg";
import elviraGullberg from "@/assets/elvira-gullberg-new.jpg";
const Comedians = () => {
  const [showAll, setShowAll] = useState(false);
  const comedians = [{
    name: "Ellinor Svensson",
    description: "En av Sveriges mest inflytelserika komiker. Hon började som en del av humorkollektivet Oslipat i Malmö och har sedan dess gjort sig känd för sin skånska tajming, orädda satir och kompromisslösa ärlighet.",
    image: ellinorSvensson
  }, {
    name: "Fredrik Andersson",
    description: "En av Sveriges främsta standupkomiker och skämtskrivare. Med sina smarta, noggrant utformade skämt har Fredrik blivit känd som en av landets bästa. Hans soloshow 'Serial Joker' vann pris som årets show.",
    image: fredrikAndersson
  }, {
    name: "Felicia Tomala",
    description: "En av de nya rösterna på Sveriges standupscen. Felicia har snabbt blivit en publikfavorit med sin fräscha och roliga stil. Hon har även jobbat med TV och är gäst i poddar som Arkiv Samtal.",
    image: feliciaTomala
  }, {
    name: "David Asp",
    description: "Sveriges yngsta komiker.",
    image: davidAsp
  }, {
    name: "Robin Berglund",
    description: "Robin Berglund har gjort det mesta inom svensk humor. Han turnerar nu med sin soloshow 'Soliga Hälsningar' och har även synts i Morgonpasset i P3 på Sveriges Radio.",
    image: robinBerglund
  }, {
    name: "Michel Sanchez",
    description: "En komiker vars namn har blivit synonymt med subtilitet och skärpa. Hans minimalistiska humorstil, där varje ord och blick räknas, har gjort honom till en favorit bland både publik och kollegor.",
    image: michelSanchez
  }, {
    name: "Emil Arvas",
    description: "Emil Arvas humor befinner sig i gränslandet mellan det sofistikerade och det hjärndöda. Hans humor kan handla om vad som helst, men gemensamt för alla hans skämt är att de överraskar publiken.",
    image: emilArvas
  }, {
    name: "Ato Karlsson",
    description: "Ato Karlsson har exploderat på standup-scenen hos Comedy Central och trollat med human crowd talk i London. Nu turnerar han med sin show fylld av skratt, självdistans och street-känsla.",
    image: atoKarlsson
  }, {
    name: "Lovisa Henriksson",
    description: "En uppskattad komiker på den svenska standupscenen som kombinerar skarp observation med hjärtlig humor.",
    image: lovisaHenriksson
  }, {
    name: "Simon Gärdenfors",
    description: "Trots ämnen som sex och knark har Gärdenfors beskrivits som 'gullig'. Han ligger bakom succéer som humortrion 'Specialisterna' och har blivit en av Sveriges största underground-komiker.",
    image: simonGardenfors
  }, {
    name: "Johanna Wagrell",
    description: "Mest känd för sina poddar 'Vad blir det för mord?' och 'Kafferepet' som hon driver tillsammans med Ellinor Svensson respektive Albin Olsson och Nisse Hallberg. En av Sveriges absolut vassaste komiker.",
    image: wagrell
  }, {
    name: "Albin Olsson",
    description: "Programledare i Sveriges Radio P3 och ståuppkomiker sedan början av 2010-talet. Han är en del av humorkollektivet Specialisterna tillsammans med bl.a. Simon Gärdenfors och driver podden Kafferepet.",
    image: albinOlsson
  }, {
    name: "Ludde Samuelsson",
    description: "Ett välkänt namn i ståuppbranschen sedan 2007, då han började som 17-åring. Sedan dess har han uppträtt på i stort sett alla Sveriges klubbar och driver Limhamns Comedy Club.",
    image: luddeSamuelsson
  }, {
    name: "Christer Svensson",
    description: "Nominerad till årets nykomling 2025 på Svenska Standupgalan. Flitigt anlitad skämtskrivare för TV (Svenska Nyheter, Roast on the coast, Parlamentet) och viral sensation med miljontals visningar på TikTok.",
    image: christerSvensson
  }, {
    name: "Axel Tidelius",
    description: "En uppskattad komiker på den svenska standupscenen med en unik förmåga att få publiken att skratta åt livets absurditeter.",
    image: axelTidelius
  }, {
    name: "Elvira Gullberg",
    description: "Även känd som 'Gullis'. Komiker, låtskrivare och läkare från Skåne. Känd för att skriva manus och låtar till Svenska Nyheter, där hennes låt om Tesla fick stor spridning. Nominerad till årets nykomling.",
    image: elviraGullberg
  }];
  return <section id="comedians" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{
        animationDelay: '0.1s',
        animationFillMode: 'forwards'
      }}>
          <h2 className="text-5xl md:text-6xl font-normal mb-6 inline-block">
            <span className="bg-foreground text-background px-6 py-3">
              Hemlig Lineup
            </span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            På Guldgruvan har vi en helt hemlig lineup. Ni får aldrig veta. Men: Sveriges bästa komiker kör hos oss. Bland annat dom här.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {comedians.slice(0, showAll ? comedians.length : 10).map((comedian, index) => <div key={comedian.name} className="animate-fade-in-up opacity-0" style={{
          animationDelay: `${0.2 + index * 0.05}s`,
          animationFillMode: "forwards"
        }}>
              <ComedianCard {...comedian} />
            </div>)}
        </div>

        {/* Show More/Less Button */}
        {comedians.length > 10 && <div className="mt-12 text-center">
            <Button onClick={() => setShowAll(!showAll)} className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-glow px-8 py-6 text-lg">
              {showAll ? <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Visa färre
                </> : <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Visa fler komiker ({comedians.length - 10} till)
                </>}
            </Button>
          </div>}
      </div>
    </section>;
};
export default Comedians;