const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo și descriere */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold">EMC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Dental EMC Journal</h3>
                <p className="text-sm text-background/70">Revista acreditată CMSR</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Revista de stomatologie profesională care oferă creditele EMC necesare 
              pentru menținerea competenței profesionale.
            </p>
          </div>

          {/* Servicii */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Servicii</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#pachete" className="text-background/80 hover:text-accent transition-colors">
                  Credite EMC
                </a>
              </li>
              <li>
                <a href="#despre" className="text-background/80 hover:text-accent transition-colors">
                  Revista digitală
                </a>
              </li>
              <li>
                <a href="#testimoniale" className="text-background/80 hover:text-accent transition-colors">
                  Certificare CMSR
                </a>
              </li>
              <li>
                <a href="#formular" className="text-background/80 hover:text-accent transition-colors">
                  Procesare online
                </a>
              </li>
            </ul>
          </div>

          {/* Informații legale */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Informații legale</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors">
                  Termeni și condiții
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors">
                  Politica de confidențialitate
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors">
                  GDPR
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-accent transition-colors">
                  Politica de cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-accent">📧</span>
                <div>
                  <p className="text-background/80">Email</p>
                  <a 
                    href="mailto:contact@dentalemc.ro" 
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    contact@dentalemc.ro
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-accent">📞</span>
                <div>
                  <p className="text-background/80">Telefon</p>
                  <a 
                    href="tel:+40123456789" 
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    0123 456 789
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-accent">📍</span>
                <div>
                  <p className="text-background/80">Adresa</p>
                  <p className="text-background/60">
                    Str. Medicilor nr. 1<br />
                    București, România
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separatore și info companie */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              <p>S.C. DENTAL EMC JOURNAL S.R.L.</p>
              <p>CUI: RO12345678 | J40/1234/2017</p>
            </div>
            
            <div className="text-sm text-background/60 text-center md:text-right">
              <p>&copy; {currentYear} Dental EMC Journal. Toate drepturile rezervate.</p>
              <p>Acreditat oficial de CMSR pentru creditele EMC.</p>
            </div>
          </div>
        </div>

        {/* Certificări */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center space-x-6 bg-background/5 rounded-full px-6 py-3">
            <span className="text-xs text-background/60">ACREDITAT DE:</span>
            <span className="text-accent font-medium text-sm">CMSR</span>
            <span className="text-accent font-medium text-sm">Colegii Teritoriale</span>
            <span className="text-accent font-medium text-sm">Din 2017</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;