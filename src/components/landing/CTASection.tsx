import { ArrowRight } from "lucide-react";
import inkluLogo from "@/assets/inklu-logo.png";

const CTASection = () => {
  return (
    <section id="cta" className="section-padding gradient-section">
      <div className="container-narrow">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
              Du musst diesen Weg nicht allein gehen.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap">
              <img src={inkluLogo} alt="Inklu" className="h-8 w-auto inline-block" />
              <span>zeigt dir, welche Unterstützung dir zusteht – klar, verständlich 
              und Schritt für Schritt.</span>
            </p>
          </div>

          <div>
            <a href="#" className="btn-primary group text-lg">
              Jetzt kostenlos testen
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="text-muted-foreground">
            Nimm dir den Druck. Inklu hilft dir dabei, den nächsten Schritt zu sehen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
