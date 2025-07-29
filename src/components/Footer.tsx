import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-forest-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-sage" />
              <span className="text-2xl font-light">ABXSOLUTU</span>
            </div>
            <p className="text-forest-foreground/80 leading-relaxed max-w-md">
              Santuario de sanación holística dedicado al bienestar integral 
              a través de la sabiduría ancestral y prácticas modernas.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="font-medium mb-4 text-sage">Navegación</h3>
            <ul className="space-y-2 text-forest-foreground/80">
              <li>
                <a href="#about" className="hover:text-sage transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sage transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sage transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="font-medium mb-4 text-sage">Legal</h3>
            <ul className="space-y-2 text-forest-foreground/80">
              <li>
                <a href="#privacy" className="hover:text-sage transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-sage transition-colors">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-forest-foreground/20 mt-8 pt-8 text-center">
          <p className="text-forest-foreground/60">
            © 2024 Abxsolutu. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;