import { Compass, ClipboardList, Newspaper, MessageCircle, Users } from "lucide-react";
import appKategorien from "@/assets/app-kategorien.png";
import appCheckliste from "@/assets/app-checkliste.png";
import appNachrichten from "@/assets/app-nachrichten.png";
import appCommunity from "@/assets/app-community.png";

const features = [
  {
    icon: Compass,
    title: "Ein Weg, den du endlich verstehst",
    description: "Keine Paragraphen. Keine endlosen Formulare. Inklu führt dich wie eine vertraute Person Schritt für Schritt durch deine Möglichkeiten.",
    screenshot: appKategorien
  },
  {
    icon: ClipboardList,
    title: "Hilfreiche Checklisten statt Chaos",
    description: "Endlich weißt du, welche Unterlagen du brauchst – und kannst nichts mehr vergessen.",
    screenshot: appCheckliste
  },
  {
    icon: Newspaper,
    title: "Wichtige Neuigkeiten, verständlich erklärt",
    description: "Neue Leistungen? Gesetzesänderungen? Inklu sagt dir, was für dich relevant ist.",
    screenshot: appNachrichten
  },
  {
    icon: MessageCircle,
    title: "Ein Ort, an dem du nicht allein bist",
    description: "Chatte mit Menschen, die ähnliche Erfahrungen machen. Austausch, der stärkt – nicht überfordert.",
    screenshot: appCommunity
  },
  {
    icon: Users,
    title: "Für dich und deine Familie",
    description: "Angehörige können dein Konto mitbenutzen und dich unterstützen.",
    screenshot: appCommunity
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
        <div className="space-y-16 lg:space-y-24">
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

              {/* App Screenshot */}
              <div className="flex-1 max-w-xs">
                <div className="relative">
                  <img 
                    src={feature.screenshot} 
                    alt={`Inklu App - ${feature.title}`}
                    className="w-full h-auto rounded-[2rem] shadow-card"
                  />
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
