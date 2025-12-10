import { Check } from "lucide-react";

const audiences = [
  "… gerade versuchst, in einer neuen Situation nicht den Überblick zu verlieren.",
  "… Unterstützung brauchst, aber nicht weißt, wo du anfangen sollst.",
  "… sicher sein willst, dass du keine wichtige Leistung verpasst.",
  "… eine App möchtest, die dir alles verständlich erklärt.",
  "… jemanden unterstützen willst, den du liebst."
];

const TargetAudienceSection = () => {
  return (
    <section className="section-padding gradient-section">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            Inklu ist für dich, wenn du …
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-card rounded-2xl shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="w-8 h-8 rounded-full bg-turquoise flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-primary-dark" />
              </div>
              <p className="text-lg text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
