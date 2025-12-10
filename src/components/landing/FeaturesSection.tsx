import { Compass, ClipboardList, Newspaper, MessageCircle, Users } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Ein Weg, den du endlich verstehst",
    description: "Keine Paragraphen. Keine endlosen Formulare. Inklu führt dich wie eine vertraute Person Schritt für Schritt durch deine Möglichkeiten."
  },
  {
    icon: ClipboardList,
    title: "Hilfreiche Checklisten statt Chaos",
    description: "Endlich weißt du, welche Unterlagen du brauchst – und kannst nichts mehr vergessen."
  },
  {
    icon: Newspaper,
    title: "Wichtige Neuigkeiten, verständlich erklärt",
    description: "Neue Leistungen? Gesetzesänderungen? Inklu sagt dir, was für dich relevant ist."
  },
  {
    icon: MessageCircle,
    title: "Ein Ort, an dem du nicht allein bist",
    description: "Chatte mit Menschen, die ähnliche Erfahrungen machen. Austausch, der stärkt – nicht überfordert."
  },
  {
    icon: Users,
    title: "Für dich und deine Familie",
    description: "Angehörige können dein Konto mitbenutzen und dich unterstützen."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            So fühlt es sich an, wenn Inklu an deiner Seite ist
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="icon-container">
                    <feature.icon className="w-7 h-7 text-primary-dark" />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed pl-0 lg:pl-[4.5rem]">
                  {feature.description}
                </p>
              </div>

              {/* App Screen Placeholder */}
              <div className="flex-1 max-w-sm">
                <div className="aspect-[9/16] max-h-80 bg-gradient-to-br from-turquoise-light to-white rounded-3xl shadow-card flex items-center justify-center p-8">
                  <div className="text-center space-y-3">
                    <feature.icon className="w-12 h-12 text-primary-dark mx-auto opacity-50" />
                    <p className="text-sm text-muted-foreground">App-Screen</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
