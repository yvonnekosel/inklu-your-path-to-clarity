import { ArrowRight, ChevronDown } from "lucide-react";
import appWelcome from "@/assets/app-welcome.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      <div className="container-wide section-padding pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance animate-fade-up">
                Wenn sich dein Leben plötzlich verändert – zeigt dir{" "}
                <span className="text-primary-dark">Inklu</span> den Weg.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-100 opacity-0">
                Ob leichte Einschränkung oder Schwerbehinderung: Inklu erklärt dir 
                verständlich, welche Leistungen dir wirklich zustehen – und wie du 
                sie Schritt für Schritt bekommst.
              </p>
              <p className="text-base text-primary-dark font-medium italic animate-fade-up delay-200 opacity-0">
                „Du musst das nicht allein herausfinden."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300 opacity-0">
              <a href="#cta" className="btn-primary group">
                Jetzt kostenlos testen
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#features" className="btn-secondary">
                Wie Inklu dir hilft
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up delay-400 opacity-0">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-72 h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={appWelcome} 
                    alt="Inklu App Willkommensbildschirm" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-turquoise/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-violet/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
