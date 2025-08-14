import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Sou ${formData.name} da empresa ${formData.company}.

Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            Fale Conosco
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
              />
            </div>
            
            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(11) 99999-9999"
              />
            </div>
            
            <div>
              <Label htmlFor="company">Empresa/Órgão *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Nome da empresa ou órgão"
              />
            </div>
            
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva brevemente sua necessidade ou projeto"
                rows={4}
              />
            </div>
            
            <Button type="submit" variant="corporate" className="w-full">
              Enviar via WhatsApp
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informações de Contato</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-medium">Telefone</h4>
              <p className="text-muted-foreground">(11) 99999-9999</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-medium">E-mail</h4>
              <p className="text-muted-foreground">contato@lgmobilidadeurbana.com.br</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-medium">Localização</h4>
              <p className="text-muted-foreground">
                Atendemos em todo o território nacional
              </p>
            </div>
          </div>

          <div className="bg-mobility-light p-4 rounded-lg">
            <h4 className="font-medium mb-2">Horário de Atendimento</h4>
            <p className="text-sm text-muted-foreground">
              Segunda a Sexta: 8h às 18h<br />
              Sábado: 8h às 12h
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;