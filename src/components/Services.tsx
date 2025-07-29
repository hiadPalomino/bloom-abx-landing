import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Target, 
  Flame, 
  Compass, 
  Battery, 
  Activity, 
  Leaf, 
  Apple, 
  Gem, 
  Users 
} from "lucide-react";

const services = [
  {
    title: "Acupuntura",
    icon: Target,
    description: "Técnica milenaria china que equilibra la energía del cuerpo"
  },
  {
    title: "Ventosas",
    icon: Zap,
    description: "Terapia de succión que mejora la circulación y libera tensiones"
  },
  {
    title: "Moxibustión",
    icon: Flame,
    description: "Calor terapéutico que estimula puntos específicos del cuerpo"
  },
  {
    title: "Radiestesia",
    icon: Compass,
    description: "Detección y armonización de energías sutiles"
  },
  {
    title: "Equilibrio Bioenergético",
    icon: Battery,
    description: "Restauración del flujo energético natural del organismo"
  },
  {
    title: "Osteopatía",
    icon: Activity,
    description: "Tratamiento manual del sistema músculo-esquelético"
  },
  {
    title: "Quiropráxia Inca",
    icon: Leaf,
    description: "Técnicas ancestrales andinas para el alineamiento corporal"
  },
  {
    title: "Nutrición Consciente",
    icon: Apple,
    description: "Alimentación holística para nutrir cuerpo, mente y espíritu"
  },
  {
    title: "Cristaloterapia",
    icon: Gem,
    description: "Sanación vibracional a través de las propiedades de los cristales"
  },
  {
    title: "Constelaciones Familiares",
    icon: Users,
    description: "Trabajo sistémico para sanar patrones familiares"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Nuestras Prácticas de Sanación
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploramos un amplio espectro de disciplinas ancestrales y modernas 
            para ofrecerte un enfoque integral de bienestar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-sage/20 hover:border-primary/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;