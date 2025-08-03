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
    title: "Acupuncture",
    icon: Target,
    description: "Ancient Chinese technique that balances the body's energy"
  },
  {
    title: "Cupping Therapy",
    icon: Zap,
    description: "Suction therapy that improves circulation and releases tension"
  },
  {
    title: "Moxibustion",
    icon: Flame,
    description: "Therapeutic heat that stimulates specific points on the body"
  },
  {
    title: "Dowsing",
    icon: Compass,
    description: "Detection and harmonization of subtle energies"
  },
  {
    title: "Bioenergetic Balance",
    icon: Battery,
    description: "Restoration of the body's natural energy flow"
  },
  {
    title: "Osteopathy",
    icon: Activity,
    description: "Manual treatment of the musculoskeletal system"
  },
  {
    title: "Inca Chiropractic",
    icon: Leaf,
    description: "Ancient Andean techniques for body alignment"
  },
  {
    title: "Conscious Nutrition",
    icon: Apple,
    description: "Holistic nutrition to nourish body, mind, and spirit"
  },
  {
    title: "Crystal Therapy",
    icon: Gem,
    description: "Vibrational healing through the properties of crystals"
  },
  {
    title: "Family Constellations",
    icon: Users,
    description: "Systemic work to heal family patterns"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Our Healing Practices
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We explore a broad range of ancient and modern disciplines 
            to offer you a holistic approach to well-being
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
