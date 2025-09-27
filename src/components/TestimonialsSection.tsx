import { Card, CardContent } from "@/components/ui/card";
import certificationsImage from "@/assets/certifications.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Maria Popescu",
      title: "Medic stomatolog, București",
      content: "Am obținut creditele EMC simplu și rapid, fără deplasări. Revista conține informații foarte utile pentru practica zilnică.",
      rating: 5
    },
    {
      name: "Dr. Alexandru Ionescu", 
      title: "Medic stomatolog, Cluj-Napoca",
      content: "Procesul online mi-a economisit foarte mult timp. Certificatul a fost recunoscut imediat de colegiul teritorial.",
      rating: 5
    },
    {
      name: "Dr. Elena Dumitrescu",
      title: "Medic stomatolog, Timișoara", 
      content: "Recomand cu încredere! Conținutul revistei este de calitate iar creditele EMC sunt 100% recunoscute de CMSR.",
      rating: 5
    }
  ];

  return (
    <section id="testimoniale" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ce spun{" "}
            <span className="text-primary">colegii</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mii de medici stomatologi din România și-au obținut deja creditele EMC 
            prin revista noastră acreditată.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex text-warning text-lg">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Credibilitate și{" "}
                <span className="text-primary">recunoaștere oficială</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dental EMC Journal este acreditată oficial de CMSR și recunoscută 
                de toate colegiile teritoriale din România. Creditele EMC obținute 
                sunt 100% valabile pentru menținerea competenței profesionale.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-success text-xl">✓</span>
                  <span className="text-foreground">Acreditat CMSR</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-success text-xl">✓</span>
                  <span className="text-foreground">Colegii teritoriale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-success text-xl">✓</span>
                  <span className="text-foreground">3000+ medici</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-success text-xl">✓</span>
                  <span className="text-foreground">Din 2017</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={certificationsImage} 
                alt="Logo CMSR și colegii teritoriale - certificări oficiale pentru creditele EMC"
                className="rounded-xl shadow-md w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;