import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Cum primesc creditele EMC?",
      answer: "După finalizarea plății, veți primi prin email accesul la revista digitală și certificatul EMC oficial. Certificatul conține toate informațiile necesare pentru validarea creditelor la colegiul teritorial."
    },
    {
      question: "Se pot lua credite EMC retroactiv?",
      answer: "Da! Puteți selecta orice an din perioada 2017-2024. Creditele EMC pot fi obținute retroactiv pentru anii trecuți, conform reglementărilor CMSR."
    },
    {
      question: "Sunt creditele recunoscute de CMSR?",
      answer: "Absolut! Dental EMC Journal este oficial acreditată de CMSR și recunoscută de toate colegiile teritoriale din România. Certificatele emise sunt 100% valabile."
    },
    {
      question: "Cât timp am acces la revistă?",
      answer: "Accesul la revista digitală este permanent pentru anii achiziționați. Puteți descărca și păstra revista în format PDF pe dispozitivele dumneavoastră."
    },
    {
      question: "Ce metode de plată acceptați?",
      answer: "Acceptăm toate cardurile bancare (Visa, Mastercard), precum și plăți prin Google Pay și Apple Pay. Plățile sunt procesate securizat prin Stripe."
    },
    {
      question: "Pot solicita factură?",
      answer: "Da, pentru persoanele juridice oferim factură cu TVA. Completați datele de facturare în formular și veți primi factura prin email."
    },
    {
      question: "Cât durează să primesc accesul?",
      answer: "Accesul la revistă și certificatul EMC sunt trimise automat prin email în maxim 5 minute după confirmarea plății."
    },
    {
      question: "Pot anula comanda?",
      answer: "Având în vedere natura digitală a produsului, comenzile nu pot fi anulate după primirea accesului. Vă rugăm să verificați cu atenție datele înainte de finalizare."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Întrebări{" "}
              <span className="text-primary">frecvente</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Răspunsuri la cele mai comune întrebări despre creditele EMC și revista noastră.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg border border-border p-6 lg:p-8">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary-light rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Ai alte întrebări?
              </h3>
              <p className="text-muted-foreground">
                Nu ezita să ne contactezi pentru clarificări suplimentare despre creditele EMC.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <a 
                  href="mailto:contact@dentalemc.ro" 
                  className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <span>📧</span>
                  <span>contact@dentalemc.ro</span>
                </a>
                <a 
                  href="tel:+40123456789" 
                  className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <span>📞</span>
                  <span>0123 456 789</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;