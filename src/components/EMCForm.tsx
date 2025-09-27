import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nume: z.string().trim().min(2, "Numele trebuie să aibă cel puțin 2 caractere").max(50, "Numele nu poate depăși 50 caractere"),
  prenume: z.string().trim().min(2, "Prenumele trebuie să aibă cel puțin 2 caractere").max(50, "Prenumele nu poate depăși 50 caractere"),
  email: z.string().trim().email("Adresa de email nu este validă").max(100, "Email-ul nu poate depăși 100 caractere"),
  telefon: z.string().trim().min(10, "Numărul de telefon trebuie să aibă cel puțin 10 cifre").max(15, "Numărul de telefon nu poate depăși 15 cifre"),
  adresa: z.string().trim().min(10, "Adresa trebuie să aibă cel puțin 10 caractere").max(200, "Adresa nu poate depăși 200 caractere"),
  colegiul: z.string().trim().min(5, "Selectați colegiul teritorial").max(100, "Numele colegiului nu poate depăși 100 caractere"),
  isPersoanaJuridica: z.boolean().default(false),
  denumireCabinet: z.string().trim().max(100, "Denumirea cabinetului nu poate depăși 100 caractere").optional(),
  cui: z.string().trim().max(20, "CUI-ul nu poate depăși 20 caractere").optional(),
  aniSelectati: z.array(z.number()).min(1, "Selectați cel puțin un an"),
  acceptaTermeni: z.boolean().refine(val => val === true, "Trebuie să acceptați termenii și condițiile")
});

type FormData = z.infer<typeof formSchema>;

const EMCForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isPersoanaJuridica: false,
      aniSelectati: [],
      acceptaTermeni: false
    }
  });

  const watchedIsPersoanaJuridica = watch("isPersoanaJuridica");
  const watchedAniSelectati = watch("aniSelectati");

  const availableYears = Array.from({ length: 2024 - 2017 + 1 }, (_, i) => 2017 + i);

  const handleYearChange = (year: number, checked: boolean) => {
    const currentYears = watchedAniSelectati || [];
    if (checked) {
      setValue("aniSelectati", [...currentYears, year]);
    } else {
      setValue("aniSelectati", currentYears.filter(y => y !== year));
    }
  };

  const calculateTotal = () => {
    const selectedCount = watchedAniSelectati?.length || 0;
    if (selectedCount === 0) return 0;
    if (selectedCount === 1) return 250;
    if (selectedCount <= 3) return 600;
    if (selectedCount <= 5) return 950;
    return selectedCount * 190; // Discount pentru mai mult de 5 ani
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulare procesare plată
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Cerere trimisă cu succes!",
        description: "Veți primi un email cu detaliile plății în curând.",
        variant: "default",
      });
      
      console.log("Form data:", data);
      
    } catch (error) {
      toast({
        title: "Eroare",
        description: "A apărut o problemă. Încercați din nou.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formular" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Solicită{" "}
              <span className="text-primary">creditele EMC</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Completează formularul și vei primi accesul la revistă plus certificatul EMC.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Informații personale</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nume">Nume *</Label>
                        <Input 
                          id="nume"
                          {...register("nume")}
                          className={errors.nume ? "border-destructive" : ""}
                        />
                        {errors.nume && (
                          <p className="text-sm text-destructive">{errors.nume.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="prenume">Prenume *</Label>
                        <Input 
                          id="prenume"
                          {...register("prenume")}
                          className={errors.prenume ? "border-destructive" : ""}
                        />
                        {errors.prenume && (
                          <p className="text-sm text-destructive">{errors.prenume.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email"
                          type="email"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="telefon">Telefon *</Label>
                        <Input 
                          id="telefon"
                          {...register("telefon")}
                          className={errors.telefon ? "border-destructive" : ""}
                        />
                        {errors.telefon && (
                          <p className="text-sm text-destructive">{errors.telefon.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="adresa">Adresa completă *</Label>
                      <Input 
                        id="adresa"
                        {...register("adresa")}
                        className={errors.adresa ? "border-destructive" : ""}
                      />
                      {errors.adresa && (
                        <p className="text-sm text-destructive">{errors.adresa.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="colegiul">Colegiul teritorial *</Label>
                      <Input 
                        id="colegiul"
                        placeholder="Ex: Colegiul Medicilor Stomatologi București"
                        {...register("colegiul")}
                        className={errors.colegiul ? "border-destructive" : ""}
                      />
                      {errors.colegiul && (
                        <p className="text-sm text-destructive">{errors.colegiul.message}</p>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="persoanaJuridica"
                          checked={watchedIsPersoanaJuridica}
                          onCheckedChange={(checked) => setValue("isPersoanaJuridica", checked as boolean)}
                        />
                        <Label htmlFor="persoanaJuridica">Persoană juridică (opțional)</Label>
                      </div>

                      {watchedIsPersoanaJuridica && (
                        <div className="grid sm:grid-cols-2 gap-4 ml-6">
                          <div className="space-y-2">
                            <Label htmlFor="denumireCabinet">Denumire cabinet</Label>
                            <Input 
                              id="denumireCabinet"
                              {...register("denumireCabinet")}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cui">CUI</Label>
                            <Input 
                              id="cui"
                              {...register("cui")}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <Label>Selectați anii pentru care doriți creditele EMC *</Label>
                      <div className="grid grid-cols-4 gap-3">
                        {availableYears.map((year) => (
                          <div key={year} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`year-${year}`}
                              checked={watchedAniSelectati?.includes(year) || false}
                              onCheckedChange={(checked) => handleYearChange(year, checked as boolean)}
                            />
                            <Label htmlFor={`year-${year}`} className="text-sm">{year}</Label>
                          </div>
                        ))}
                      </div>
                      {errors.aniSelectati && (
                        <p className="text-sm text-destructive">{errors.aniSelectati.message}</p>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="acceptaTermeni"
                        checked={watch("acceptaTermeni")}
                        onCheckedChange={(checked) => setValue("acceptaTermeni", checked as boolean)}
                      />
                      <Label htmlFor="acceptaTermeni" className="text-sm">
                        Accept <a href="#" className="text-primary hover:underline">termenii și condițiile</a> *
                      </Label>
                    </div>
                    {errors.acceptaTermeni && (
                      <p className="text-sm text-destructive">{errors.acceptaTermeni.message}</p>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent-dark text-accent-foreground" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Se procesează..." : "Continuă către plată"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Sumar comandă</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ani selectați:</span>
                      <span className="text-foreground">{watchedAniSelectati?.length || 0}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Credite EMC:</span>
                      <span className="text-foreground">{(watchedAniSelectati?.length || 0) * 10}</span>
                    </div>
                    <div className="border-t border-border pt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-foreground">Total:</span>
                        <span className="text-primary text-lg">{calculateTotal()} lei</span>
                      </div>
                    </div>
                  </div>

                  {watchedAniSelectati && watchedAniSelectati.length > 1 && (
                    <div className="bg-success/10 rounded-lg p-3">
                      <p className="text-success text-sm font-medium">
                        Economisești {watchedAniSelectati.length > 3 ? '24%' : '20%'} față de plata individuală!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-border shadow-lg">
                <CardContent className="p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-success">🔒</span>
                      <span className="text-muted-foreground">Plată securizată prin Stripe</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-success">⚡</span>
                      <span className="text-muted-foreground">Acces imediat la revistă</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-success">✓</span>
                      <span className="text-muted-foreground">Certificat EMC oficial</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMCForm;