import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  const scrollToFormular = () => {
    const element = document.getElementById('formular');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Obține rapid{" "}
                <span className="text-primary">10 credite EMC</span>{" "}
                pe an
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Acreditate CMSR, direct online. Revista de stomatologie profesională 
                cu acces imediat și certificare oficială pentru medicii din România.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToFormular}
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-glow text-lg px-8 py-4 h-auto"
              >
                Solicită creditele EMC acum
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('despre')?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="border-primary text-primary hover:bg-primary-light text-lg px-8 py-4 h-auto"
              >
                Află mai multe
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10</div>
                <div className="text-sm text-muted-foreground">Credite EMC/an</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">CMSR</div>
                <div className="text-sm text-muted-foreground">Acreditat oficial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2017+</div>
                <div className="text-sm text-muted-foreground">Ani disponibili</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Doctor stomatolog lucrând pe laptop pentru obținerea creditelor EMC"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;