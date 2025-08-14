import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";

const Contato = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-mobility-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">Entre em Contato</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vamos Conversar Sobre Seu Projeto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa equipe de especialistas está pronta para discutir suas necessidades 
              e apresentar soluções técnicas customizadas para seu projeto de mobilidade urbana.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Solicite uma Consulta Técnica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preencha o formulário abaixo com informações sobre sua necessidade. 
              Entraremos em contato em até 24 horas para agendar uma conversa técnica.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-mobility-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Por que escolher a LG Mobilidade Urbana?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">25+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Anos de Experiência</h3>
              <p className="text-muted-foreground">
                Experiência acumulada em planejamento, gestão e operação de sistemas de transporte público
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">100+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Projetos Desenvolvidos</h3>
              <p className="text-muted-foreground">
                Projetos realizados em todo o território nacional para diversos tipos de clientes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">B2B+B2G</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Atuação Diversificada</h3>
              <p className="text-muted-foreground">
                Atendimento especializado para órgãos públicos, empresas privadas e fornecedores
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;