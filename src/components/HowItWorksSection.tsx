const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Alegi anii",
      description: "Selectezi anii pentru care dorești să obții creditele EMC (din 2017 până în prezent).",
      icon: "📅"
    },
    {
      step: "2", 
      title: "Plătești secure",
      description: "Efectuezi plata online în siguranță prin Stripe, cu toate metodele de plată acceptate.",
      icon: "💳"
    },
    {
      step: "3",
      title: "Primești tot",
      description: "Acces imediat la revistă în format digital plus certificatul EMC oficial.",
      icon: "🎓"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Cum obții{" "}
            <span className="text-primary">creditele EMC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Procesul este simplu și rapid - în doar 3 pași ești pe drumul cel bun către creditele EMC necesare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow text-center space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-primary"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-6 py-3">
            <span className="text-success text-xl">⚡</span>
            <span className="text-success font-medium">Procesul durează mai puțin de 5 minute!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;