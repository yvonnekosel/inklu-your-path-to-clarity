import founderPortrait from "@/assets/founder-portrait.png";

const FounderSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img 
                src={founderPortrait} 
                alt="Gründerin von Inklu" 
                className="w-72 h-80 md:w-80 md:h-96 object-cover object-top rounded-3xl shadow-card"
              />
              {/* Decorative */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-violet/20 rounded-3xl" />
            </div>
          </div>

          {/* Story Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-balance">
              „Ich weiß, wie überfordernd dieser Weg sein kann."
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nach einer Operation sollte ich querschnittsgelähmt sein – tatsächlich 
                war ich vom Hals abwärts gelähmt.
              </p>
              <p>
                Monate im Krankenhaus, Reha, Anträge, Hilfsmittel, Behörden. Ich musste 
                mein Leben komplett neu organisieren, ohne zu wissen, ob ich jemals wieder 
                gehen könnte.
              </p>
              <p>
                Viele Nächte habe ich geweint, weil ich nicht wusste, welche Hilfe mir 
                eigentlich zusteht.
              </p>
              <p>
                Und irgendwann dachte ich: <span className="text-foreground font-medium">Warum gibt es keine App, die mir das erklärt?</span>
              </p>
              <p className="text-foreground font-medium">
                Diese App habe ich nun gebaut. Für Menschen wie mich. Für Menschen wie dich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
