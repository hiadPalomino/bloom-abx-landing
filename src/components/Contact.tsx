import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// === WhatsApp (solo EN) ===
// Número en formato internacional SIN "+" ni espacios
const whatsappNumber = "51931205945";

// Emojis con código Unicode para compatibilidad total en WhatsApp
// 👋 = U+1F44B, ✨ = U+2728, 🙏 = U+1F64F
const whatsappMessageEN =
  "Hi! I'm interested in your healing therapies. Could you share available schedules and how to book? Thank you!";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessageEN
)}`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We will get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-sage/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let’s connect and find the right path for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-sage/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-medium">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="mailto:contact@abxolutu.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  contact@abxolutu.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-sage/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-medium">Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {/* WhatsApp con mensaje en inglés y emojis asegurados */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Contact via WhatsApp"
                >
                  +51 931 205 945
                </a>

                {/* (Opcional) Fallback para llamada directa */}
                {/* <div className="mt-2 text-sm">
                  <a
                    href="tel:+51931205945"
                    className="underline text-muted-foreground hover:text-foreground"
                  >
                    or call us
                  </a>
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/70 backdrop-blur-sm border-sage/20">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-center">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-sage/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-sage/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-sage/30 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="healing" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
