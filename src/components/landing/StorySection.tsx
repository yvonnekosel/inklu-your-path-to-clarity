const StorySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-balance">
              Vielleicht kennst du diesen Moment …
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ein Unfall, eine Diagnose, eine Operation – und plötzlich ist nichts 
                mehr wie vorher.
              </p>
              <p>
                Du sitzt im Krankenhaus oder zu Hause, suchst nach Orientierung, 
                während Ärzt*innen, Kassen und Ämter neue Begriffe in den Raum werfen.
              </p>
              <p className="font-medium text-foreground">
                Pflegegrad. Reha. Hilfsmittel. Erwerbsminderung.
              </p>
              <p>
                Du möchtest einfach nur verstehen, was jetzt wichtig ist – aber 
                alles wirkt überwältigend.
              </p>
            </div>
          </div>

          {/* Illustration Placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-turquoise-light via-white to-violet-light rounded-3xl flex items-center justify-center p-12 shadow-soft">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-turquoise/50 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">
                  Der Moment der Unsicherheit
                </p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -z-10 top-4 right-4 w-full h-full bg-turquoise/20 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
