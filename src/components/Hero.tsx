import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-4 tracking-wide">
            CUERPO. MENTE. ENERGÍA.
          </h1>
          <h2 className="text-4xl md:text-6xl font-extralight text-primary mb-8">
            ABXSOLUTU
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Abxsolutu es un santuario de sanación holística. A través de la sabiduría ancestral y prácticas modernas, 
          te acompañamos en reconectar con tu esencia natural.
        </p>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto font-light">
          Somos un centro dedicado al bienestar integral de cada persona. Trabajando a través de diversas disciplinas 
          que tocan lo físico, mental, emocional y energético, te ayudamos a restaurar la armonía y vitalidad en todos los niveles.
        </p>
        
        <Button variant="healing" size="lg" className="text-lg px-12 py-4 rounded-full shadow-2xl">
          Comienza Tu Viaje
        </Button>
      </div>
    </section>
  );
};

export default Hero;