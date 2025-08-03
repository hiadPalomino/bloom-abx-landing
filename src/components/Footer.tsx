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
              A holistic healing sanctuary dedicated to integral well-being 
              through ancient wisdom and modern practices.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="font-medium mb-4 text-sage">Navigation</h3>
            <ul className="space-y-2 text-forest-foreground/80">
              <li>
                <a href="#about" className="hover:text-sage transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sage transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sage transition-colors">
                  Contact
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
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-sage transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-forest-foreground/20 mt-8 pt-8 text-center">
          <p className="text-forest-foreground/60">
            © 2024 Abxsolutu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
