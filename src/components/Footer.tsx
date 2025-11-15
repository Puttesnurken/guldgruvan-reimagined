const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">GULDGRUVAN</h3>
            <p className="text-foreground">
              Sveriges bästa stand-up klubb med hemlig lineup
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hem
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("comedians")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Komiker
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Om Oss
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Biljetter</h4>
            <a
              href="https://ticketmaster.se/artist/guldgruvan-standupklubb-biljetter/1241633"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-bw-gradient text-primary-foreground font-semibold px-6 py-2 rounded-lg hover:shadow-glow transition-all"
            >
              Köp via Ticketmaster
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Guldgruvan. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
