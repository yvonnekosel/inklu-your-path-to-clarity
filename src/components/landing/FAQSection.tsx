import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Kostet Inklu etwas?",
    answer: "Inklu bietet eine kostenlose Basisversion, mit der du die wichtigsten Funktionen nutzen kannst. Für erweiterte Features wie personalisierte Checklisten und Community-Zugang gibt es eine Premium-Version zu einem fairen monatlichen Beitrag."
  },
  {
    question: "Werden die Inhalte aktuell gehalten?",
    answer: "Ja, unser Team aus Expert*innen aktualisiert alle Inhalte regelmäßig. Bei Gesetzesänderungen informieren wir dich direkt in der App, damit du immer auf dem neuesten Stand bist."
  },
  {
    question: "Ersetzt die App eine Rechtsberatung?",
    answer: "Nein, Inklu ersetzt keine professionelle Rechts- oder Sozialberatung. Die App gibt dir Orientierung und hilft dir, die richtigen Fragen zu stellen – aber bei komplexen Einzelfällen empfehlen wir dir immer, eine Beratungsstelle aufzusuchen."
  },
  {
    question: "Wie kann die Familie mithelfen?",
    answer: "Mit der Familienfunktion kannst du Angehörige einladen, die dann Zugriff auf deinen Fortschritt haben. So können sie dich unterstützen, ohne dass du alles erklären musst."
  },
  {
    question: "Für welche Länder ist die App gedacht?",
    answer: "Aktuell ist Inklu für Deutschland verfügbar. Die Inhalte basieren auf dem deutschen Sozial- und Gesundheitssystem. Eine Erweiterung für Österreich und die Schweiz ist geplant."
  },
  {
    question: "Wie barrierefrei ist die App?",
    answer: "Barrierefreiheit ist uns sehr wichtig. Inklu unterstützt Screenreader, hat anpassbare Schriftgrößen und hohe Kontraste. Wir arbeiten kontinuierlich daran, die App noch zugänglicher zu machen."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Noch Fragen?</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl px-6 shadow-soft border-none"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
