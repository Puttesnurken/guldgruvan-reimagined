import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Guldgruvan" className="h-10 md:h-12" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Hem
            </button>
            <button
              onClick={() => scrollToSection("shows")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Shower
            </button>
            <button
              onClick={() => scrollToSection("comedians")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Komiker
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Om Oss
            </button>
            <button
              onClick={() => scrollToSection("book-event")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Boka Event
            </button>
            <button
              onClick={() => scrollToSection("find-us")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Hitta Oss
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button
              asChild
              className="bg-bw-gradient text-primary-foreground font-semibold hover:shadow-glow transition-all"
            >
              <a href="https://ticketmaster.se/artist/guldgruvan-standupklubb-biljetter/1241633" target="_blank" rel="noopener noreferrer">
                Biljetter
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Hem
              </button>
              <button
                onClick={() => scrollToSection("shows")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Shower
              </button>
              <button
                onClick={() => scrollToSection("comedians")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Komiker
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Om Oss
              </button>
              <button
                onClick={() => scrollToSection("book-event")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Boka Event
              </button>
              <button
                onClick={() => scrollToSection("find-us")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Hitta Oss
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                FAQ
              </button>
              <Button
                asChild
                className="bg-bw-gradient text-primary-foreground font-semibold hover:shadow-glow transition-all w-full"
              >
                <a href="https://ticketmaster.se/artist/guldgruvan-standupklubb-biljetter/1241633" target="_blank" rel="noopener noreferrer">
                  Biljetter
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
