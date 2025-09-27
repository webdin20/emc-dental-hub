import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">EMC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dental EMC Journal</h1>
              <p className="text-sm text-muted-foreground">Revista acreditată CMSR</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('despre')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Despre revistă
            </button>
            <button 
              onClick={() => scrollToSection('pachete')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pachete EMC
            </button>
            <button 
              onClick={() => scrollToSection('testimoniale')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Testimoniale
            </button>
            <Button 
              onClick={() => scrollToSection('formular')}
              variant="default"
              className="bg-accent hover:bg-accent-dark text-accent-foreground"
            >
              Solicită acum
            </Button>
          </nav>

          <Button 
            onClick={() => scrollToSection('formular')}
            variant="default"
            className="md:hidden bg-accent hover:bg-accent-dark text-accent-foreground"
          >
            Solicită EMC
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;