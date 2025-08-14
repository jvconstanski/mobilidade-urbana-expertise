import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Calendar, CheckCircle, BarChart3, Cog, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-mobility.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(34, 197, 94, 0.7)), url(${heroImage})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Expertise em Mobilidade Urbana que Transforma Cidades
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Consultoria especializada em planejamento, execução e operação de sistemas de transporte público. 
              Soluções técnicas que otimizam recursos e melhoram a qualidade do transporte urbano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Conheça Nossos Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Fale com Especialistas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-mobility-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">25+</h3>
              <p className="text-muted-foreground">Anos de experiência técnica acumulada</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-3xl font-bold text-accent mb-2">100+</h3>
              <p className="text-muted-foreground">Cidades atendidas em todo o Brasil</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">B2B + B2G</h3>
              <p className="text-muted-foreground">Órgãos públicos e empresas privadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Sobre a LG Mobilidade Urbana</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Transformamos complexidade em eficiência operacional
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A LG Mobilidade Urbana é uma consultoria especializada que oferece soluções técnicas 
                para o setor de transporte público. Nossa equipe reúne mais de 25 anos de experiência 
                em planejamento, gestão e operação de sistemas de mobilidade urbana.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Metodologia técnica consolidada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Atendimento nacional especializado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Foco em resultados mensuráveis</span>
                </div>
              </div>
              <Link to="/quem-somos">
                <Button variant="outline">
                  Saiba Mais Sobre Nós
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="lg:pl-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Áreas de Especialização</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Planejamento Estratégico</h4>
                        <p className="text-sm text-muted-foreground">Estudos de viabilidade e análise operacional</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Cog className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Gestão Operacional</h4>
                        <p className="text-sm text-muted-foreground">Monitoramento e otimização de sistemas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Projetos e Engenharia</h4>
                        <p className="text-sm text-muted-foreground">Integração tecnológica e inovação</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-mobility-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Nossos Serviços</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Soluções Completas para Mobilidade Urbana
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um portfólio abrangente de serviços técnicos especializados, 
              organizados em três pilares fundamentais para o transporte público eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Planejamento */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Planejamento</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Estudos de custos e tarifas</li>
                  <li>• Análise de demanda</li>
                  <li>• Viabilidade técnica e econômica</li>
                  <li>• Pesquisas especializadas</li>
                </ul>
                <p className="text-sm font-medium text-primary">
                  Base técnica para decisões estratégicas eficazes
                </p>
              </CardContent>
            </Card>

            {/* Gestão e Operação */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Cog className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Gestão e Operação</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Programação operacional</li>
                  <li>• Monitoramento contínuo</li>
                  <li>• Gestão de frota</li>
                  <li>• Capacitação técnica</li>
                </ul>
                <p className="text-sm font-medium text-primary">
                  Otimização contínua para máxima eficiência
                </p>
              </CardContent>
            </Card>

            {/* Projetos e Engenharia */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Projetos e Engenharia</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Integração tarifária</li>
                  <li>• Transporte escolar</li>
                  <li>• Supervisão tecnológica</li>
                  <li>• Testes e validação</li>
                </ul>
                <p className="text-sm font-medium text-primary">
                  Inovação aplicada ao transporte urbano
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/servicos">
              <Button variant="corporate" size="lg">
                Ver Todos os Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              O que fazemos e por que isso importa
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transformamos desafios complexos da mobilidade urbana em soluções práticas e eficazes. 
              Nossa abordagem técnica gera resultados mensuráveis para nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Como atuamos:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-medium mb-1">Diagnóstico técnico especializado</h4>
                    <p className="text-muted-foreground">Análise detalhada da situação atual com metodologia consolidada</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-medium mb-1">Soluções customizadas</h4>
                    <p className="text-muted-foreground">Desenvolvimento de estratégias adequadas ao contexto específico</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-medium mb-1">Implementação acompanhada</h4>
                    <p className="text-muted-foreground">Suporte técnico durante toda a execução do projeto</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Benefícios para seu projeto:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Redução de custos operacionais</h4>
                    <p className="text-sm text-muted-foreground">Otimização de recursos através de análise técnica especializada</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Melhoria da qualidade do serviço</h4>
                    <p className="text-sm text-muted-foreground">Implementação de melhores práticas do setor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Conformidade regulatória</h4>
                    <p className="text-sm text-muted-foreground">Adequação às normas e regulamentações do setor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Decisões baseadas em dados</h4>
                    <p className="text-sm text-muted-foreground">Relatórios técnicos que fundamentam escolhas estratégicas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Summary */}
      <section className="py-16 bg-mobility-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Áreas de Atuação</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Atendemos Diversos Segmentos do Setor
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa experiência abrange desde órgãos públicos gestores até empresas privadas 
              e fornecedores do setor de mobilidade urbana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 shadow-lg">
              <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Órgãos Públicos</h3>
              <p className="text-muted-foreground">
                Prefeituras, secretarias e autarquias gestoras de transporte público
              </p>
            </Card>
            <Card className="text-center p-6 shadow-lg">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Empresas de Transporte</h3>
              <p className="text-muted-foreground">
                Operadoras privadas de ônibus urbano e sistemas integrados
              </p>
            </Card>
            <Card className="text-center p-6 shadow-lg">
              <Cog className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fabricantes e Fornecedores</h3>
              <p className="text-muted-foreground">
                Empresas de tecnologia e equipamentos para transporte público
              </p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/areas-atuacao">
              <Button variant="outline" size="lg">
                Conheça Nossa Atuação
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto para otimizar seu sistema de transporte?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato com nossos especialistas e descubra como podemos 
            contribuir para o sucesso do seu projeto de mobilidade urbana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Fale com Especialistas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/servicos">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Nossos Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;