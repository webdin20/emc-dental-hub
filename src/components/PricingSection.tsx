import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const packages = [
    {
      title: "1 An EMC",
      credits: "10 credite",
      price: "250",
      originalPrice: null,
      description: "Perfect pentru începători sau pentru completarea creditelor lipsă",
      features: [
        "10 credite EMC pentru 1 an selectat",
        "Acces imediat la revista digitală",
        "Certificat EMC oficial CMSR",
        "Suport tehnic inclus"
      ],
      popular: false,
      savings: null
    },
    {
      title: "3 Ani EMC",
      credits: "30 credite", 
      price: "600",
      originalPrice: "750",
      description: "Cea mai populară opțiune - economisești 150 lei",
      features: [
        "30 credite EMC pentru 3 ani selectați",
        "Acces la toate revistele digitale",
        "Certificate EMC oficiale CMSR",
        "Suport prioritar inclus",
        "Economii de 20%"
      ],
      popular: true,
      savings: "150 lei"
    },
    {
      title: "5 Ani EMC",
      credits: "50 credite",
      price: "950", 
      originalPrice: "1250",
      description: "Cea mai avantajoasă ofertă - economisești 300 lei",
      features: [
        "50 credite EMC pentru 5 ani selectați",
        "Acces complet la toate revistele",
        "Certificate EMC oficiale CMSR",
        "Suport premium inclus",
        "Economii de 24%"
      ],
      popular: false,
      savings: "300 lei"
    }
  ];

  const scrollToForm = () => {
    const element = document.getElementById('formular');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pachete" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Pachete{" "}
            <span className="text-primary">credite EMC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alege pachetul potrivit pentru nevoile tale. Toate pachetele includ 
            accesul la revista digitală și certificarea oficială CMSR.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                pkg.popular 
                  ? 'border-accent shadow-glow scale-105' 
                  : 'border-border hover:border-primary/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-center py-2">
                  <span className="text-white font-medium text-sm">⭐ CEL MAI POPULAR</span>
                </div>
              )}
              
              <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {pkg.title}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-accent font-medium">{pkg.credits}</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground">lei</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through ml-2">
                          {pkg.originalPrice} lei
                        </span>
                      )}
                    </div>
                    {pkg.savings && (
                      <div className="text-success font-medium text-sm">
                        Economisești {pkg.savings}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <span className="text-success text-lg flex-shrink-0">✓</span>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToForm}
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-accent hover:bg-accent-dark text-accent-foreground shadow-glow' 
                      : 'bg-primary hover:bg-primary-dark text-primary-foreground'
                  }`}
                  size="lg"
                >
                  Solicită acum
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Toate prețurile includ TVA. Plata se efectuează securizat prin Stripe.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
            <span className="flex items-center space-x-1">
              <span className="text-success">🔒</span>
              <span>Plată securizată</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-success">⚡</span>
              <span>Acces imediat</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-success">✓</span>
              <span>Certificat oficial</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;