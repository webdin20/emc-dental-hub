import journalMockup from "@/assets/journal-mockup.jpg";

const AboutSection = () => {
  return (
    <section id="despre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Revista de stomatologie{" "}
                <span className="text-primary">acreditată CMSR</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dental EMC Journal este o publicație medicală de prestigiu, dedicată 
                medicilor stomatologi din România. Oferim conținut de calitate și 
                creditele EMC necesare pentru menținerea competenței profesionale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <span className="text-primary text-2xl">📚</span>
                </div>
                <h3 className="font-semibold text-foreground">Conținut de calitate</h3>
                <p className="text-muted-foreground">
                  Articole științifice actualizate, studii de caz și tendințe în stomatologie.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center">
                  <span className="text-accent text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-foreground">Acces imediat</h3>
                <p className="text-muted-foreground">
                  Revista digitală disponibilă instant după procesarea plății.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <span className="text-success text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-foreground">Certificare oficială</h3>
                <p className="text-muted-foreground">
                  Certificat EMC recunoscut de CMSR și colegiile teritoriale.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <span className="text-primary text-2xl">👥</span>
                </div>
                <h3 className="font-semibold text-foreground">Echipă editorială</h3>
                <p className="text-muted-foreground">
                  Experți recunoscuți în domeniul stomatologiei românești.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={journalMockup} 
              alt="Mockup revista medicală digitală Dental EMC Journal pe tablet și laptop"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-card rounded-xl p-6 shadow-xl border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10</div>
                <div className="text-sm text-muted-foreground">Credite EMC</div>
                <div className="text-sm text-muted-foreground">per anul selectat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;