import { Heart, Stethoscope, Wrench, Briefcase, Shield, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Pflegeleistungen & Pflegegrad",
    description: "Was ist möglich – und wie du es bekommst."
  },
  {
    icon: Stethoscope,
    title: "Therapie & Reha",
    description: "Was ist möglich – und wie du es bekommst."
  },
  {
    icon: Wrench,
    title: "Hilfsmittel",
    description: "Was ist möglich – und wie du es bekommst."
  },
  {
    icon: Briefcase,
    title: "Arbeit & berufliche Integration",
    description: "Was ist möglich – und wie du es bekommst."
  },
  {
    icon: CreditCard,
    title: "EU-Rente & Absicherung",
    description: "Was ist möglich – und wie du es bekommst."
  },
  {
    icon: Shield,
    title: "Schwerbehindertenausweis",
    description: "Was ist möglich – und wie du es bekommst."
  }
];

const TurningPointSection = () => {
  return (
    <section id="features" className="section-padding gradient-section">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            Es gibt mehr Unterstützung, als du denkst — du musst sie nur sehen können.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Genau hier setzt Inklu an. Die App zeigt dir alle Möglichkeiten, die dir 
            zustehen – klar, verständlich und in einer Sprache, die du sofort verstehst.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-inklu group cursor-default"
            >
              <div className="space-y-4">
                <div className="icon-container group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-dark" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurningPointSection;
