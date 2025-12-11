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
                war ich vom Hals ab gelähmt. Ein halbes Jahr dauerte es, bis ich 
                überhaupt wieder sitzen konnte.
              </p>
              <p>
                Ich musste mein Leben von Grund auf neu gestalten – barrierefreie Wohnung, 
                Pflegedienste, Hilfsmittel. Alles während ich in Krankenhäusern und Reha-Kliniken 
                um jeden kleinen Fortschritt kämpfte.
              </p>
              <p>
                In dieser Zeit fragte ich mich oft: <span className="text-foreground font-medium">Warum gibt es keine App, 
                die mir zeigt, welche Unterstützung mir eigentlich zusteht?</span>
              </p>
              <p className="text-foreground font-medium">
                Heute bin ich stolz auf das, was ich geschafft habe. Und genau deshalb 
                habe ich Inklu entwickelt – für Menschen wie mich. Für Menschen wie dich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
