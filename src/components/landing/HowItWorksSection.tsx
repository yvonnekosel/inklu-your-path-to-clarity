import { ArrowRight, Download, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Du startest – ohne Bürokratie",
    description: "Du lädst Inklu herunter und beantwortest ein paar einfache Fragen zu deiner Situation."
  },
  {
    number: "2",
    icon: Sparkles,
    title: "Inklu zeigt dir deinen persönlichen Weg",
    description: "Die App erkennt, welche Leistungen für dich wichtig sind – und sortiert die Infos für dich."
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Du gehst Schritt für Schritt voran",
    description: "Anleitungen, Checklisten und Erinnerungen helfen dir, alles in deinem Tempo zu schaffen."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding gradient-section">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            Dein Weg mit Inklu beginnt ganz leicht
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-inklu flex flex-col sm:flex-row gap-6 items-start">
                {/* Number */}
                <div className="w-16 h-16 rounded-2xl bg-turquoise flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-dark">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute left-8 top-full w-0.5 h-8 bg-turquoise/30" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#cta" className="btn-primary group">
            Jetzt kostenlos testen
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
