import inkluLogo from "@/assets/inklu-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-wide px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <img src={inkluLogo} alt="Inklu Logo" className="h-12 w-auto" />
            <p className="text-background/70 max-w-sm">
              Dein Wegweiser zu allen Leistungen, die dir zustehen – klar, verständlich 
              und Schritt für Schritt.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Rechtliches</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Impressum
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Datenschutz
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                AGB
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Kontakt</h4>
            <nav className="space-y-2">
              <a href="mailto:info@inklu-app.de" className="block text-background/70 hover:text-background transition-colors">
                info@inklu-app.de
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} Inklu. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
