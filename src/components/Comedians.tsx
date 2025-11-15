import { useState } from "react";
import ComedianCard from "./ComedianCard";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import simonGardenfors from "@/assets/simon-gardenfors.png";
import wagrell from "@/assets/wagrell.png";
import chippen from "@/assets/chippen.png";
import davidAsp from "@/assets/david-asp.jpg";
import robinBerglund from "@/assets/robin-berglund.jpg";
import michelSanchez from "@/assets/michel-sanchez.jpg";
import emilArvas from "@/assets/emil-arvas.jpg";
import brannePavlovic from "@/assets/branne-pavlovic.jpg";
import atoKarlsson from "@/assets/ato-karlsson.jpg";
import lovisaHenriksson from "@/assets/lovisa-henriksson.jpg";
import albinOlsson from "@/assets/albin-olsson.jpg";
import luddeSamuelsson from "@/assets/ludde-samuelsson.jpg";
import christerSvensson from "@/assets/christer-svensson.jpg";
import axelTidelius from "@/assets/axel-tidelius.jpg";
import fredrikAndersson from "@/assets/fredrik-andersson.jpg";
import ellinorSvensson from "@/assets/ellinor-svensson.jpg";
import feliciaTomala from "@/assets/felicia-tomala.jpg";
import elviraGullberg from "@/assets/elvira-gullberg.jpg";

const Comedians = () => {
  const [showAll, setShowAll] = useState(false);
  const comedians = [
    {
      name: "Simon Gärdenfors",
      description: "Trots ämnen som sex och knark har Gärdenfors beskrivits som \"gullig\". Det är till viss del sant. Han ligger bakom succér som humortrion \"Specialisterna\" och låten \"Knulla barn\". Han samlar på olika godisförpackningar och etiketter och har på sin fritid blivit en av sveriges största underground-komiker.",
      image: simonGardenfors
    },
    {
      name: "Johanna Hurtig Wagrell",
      description: "Johanna Wagrell! Mest känd för sina poddar \"Vad blir det för mord?\" och \"Kafferepet\" som hon driver tillsammans med Ellinor Svensson respektive Albin Olsson och Nisse Hallberg. Utöver det är hon en av sveriges absolut vassaste komiker.",
      image: wagrell
    },
    {
      name: "Simon Svensson",
      description: "Simon Svensson är på många sätt humorsveriges Jay-Z. Han började som komiker men har på senare år genom imperiet Under Produktion gjort sig själv känd som podmogul och direktör. Han är också en av grundarna till sveriges bästa klubb Under Jord.",
      image: chippen
    },
    {
      name: "David Asp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: davidAsp
    },
    {
      name: "Robin Berglund",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: robinBerglund
    },
    {
      name: "Michel Sanchez",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: michelSanchez
    },
    {
      name: "Emil Arvas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: emilArvas
    },
    {
      name: "Branne Pavlovic",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: brannePavlovic
    },
    {
      name: "Ato Karlsson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: atoKarlsson
    },
    {
      name: "Lovisa Henriksson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: lovisaHenriksson
    },
    {
      name: "Albin Olsson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: albinOlsson
    },
    {
      name: "Ludde Samuelsson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: luddeSamuelsson
    },
    {
      name: "Christer Svensson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: christerSvensson
    },
    {
      name: "Axel Tidelius",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: axelTidelius
    },
    {
      name: "Fredrik Andersson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: fredrikAndersson
    },
    {
      name: "Ellinor Svensson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: ellinorSvensson
    },
    {
      name: "Felicia Tomala",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: feliciaTomala
    },
    {
      name: "Elvira Gullberg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: elviraGullberg
    }
  ];

  return (
    <section id="comedians" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-bw-gradient bg-clip-text text-transparent">
              Hemlig Lineup
            </span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            På Guldgruvan har vi en helt hemlig lineup. Ni får aldrig veta. Det spelar ingen roll hur mycket ni tjatar sa jag! Lägg av. Okej. Vi kan säga såhär: Sveriges bästa komiker kör hos oss. Bland annat dom här komikerna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {comedians.slice(0, showAll ? comedians.length : 10).map((comedian, index) => (
            <div
              key={comedian.name}
              className="animate-fade-in-up opacity-0"
              style={{ 
                animationDelay: `${0.2 + (index * 0.05)}s`,
                animationFillMode: "forwards"
              }}
            >
              <ComedianCard {...comedian} />
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {comedians.length > 10 && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-glow px-8 py-6 text-lg"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Visa färre
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Visa fler komiker ({comedians.length - 10} till)
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Comedians;
