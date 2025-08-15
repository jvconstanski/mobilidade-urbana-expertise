import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Cog, Building2, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";
const Servicos = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-mobility-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">Nossos Serviços</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Serviços que integram planejamento, gestão e operação de transporte público</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">A LG Mobilidade Urbana oferece soluções completas para o setor de transporte público, atuando desde o diagnóstico inicial até a gestão operacional contínua.</p>
          </div>
        </div>
      </section>

      {/* Planejamento */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-12 h-12 text-primary" />
                <div>
                  <h2 className="text-3xl font-bold">Planejamento</h2>
                  <p className="text-muted-foreground">Definimos estratégias sólidas e sustentáveis para o funcionamento do sistema.

                </p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Nossos serviços de planejamento fornecem a fundamentação técnica necessária 
                para tomadas de decisão estratégicas no transporte público, através de 
                estudos especializados e análises detalhadas.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Serviços inclusos:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Estudos de custos e tarifas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Estudos de demanda</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Viabilidade técnica e econômica</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Pesquisas especializadas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Análise de cenários operacionais</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Modelagem financeira</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Benefícios do Planejamento Técnico</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Otimização de Recursos</h4>
                    <p className="text-sm text-muted-foreground">
                      Maximização da eficiência através de análise técnica detalhada
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Redução de Riscos</h4>
                    <p className="text-sm text-muted-foreground">
                      Identificação prévia de potenciais problemas operacionais
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Fundamentação Sólida</h4>
                    <p className="text-sm text-muted-foreground">
                      Decisões baseadas em dados técnicos confiáveis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Agilidade na Implementação</h4>
                    <p className="text-sm text-muted-foreground">
                      Planejamento adequado acelera a execução dos projetos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gestão e Operação */}
      <section className="py-16 bg-mobility-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="shadow-lg order-2 lg:order-1">
              <CardHeader>
                <CardTitle>Benefícios da Gestão Especializada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Cog className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Eficiência Operacional</h4>
                    <p className="text-sm text-muted-foreground">
                      Otimização contínua dos processos operacionais
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Redução de Custos</h4>
                    <p className="text-sm text-muted-foreground">
                      Identificação de oportunidades de economia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Qualidade do Serviço</h4>
                    <p className="text-sm text-muted-foreground">
                      Melhoria contínua dos indicadores de qualidade
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Conformidade Regulatória</h4>
                    <p className="text-sm text-muted-foreground">
                      Adequação às normas e regulamentações do setor
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Cog className="w-12 h-12 text-accent" />
                <div>
                  <h2 className="text-3xl font-bold">Gestão e Operação</h2>
                  <p className="text-muted-foreground">Otimização contínua para máxima eficiência</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Nossos serviços de gestão e operação garantem o funcionamento eficiente 
                dos sistemas de transporte público, através de monitoramento contínuo 
                e implementação de melhorias operacionais.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Serviços inclusos:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-sm">Programação operacional</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-sm">Monitoramento de operação</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-sm">Manutenção de frota</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-sm">Capacitação técnica</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-sm">Gestão de indicadores</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-sm">Otimização de rotas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos e Engenharia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-12 h-12 text-primary" />
                <div>
                  <h2 className="text-3xl font-bold">Projetos e Engenharia</h2>
                  <p className="text-muted-foreground">Inovação aplicada ao transporte urbano</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Nossos serviços de projetos e engenharia desenvolvem soluções inovadoras 
                e tecnológicas para os desafios do transporte público moderno, integrando 
                sistemas e implementando novas tecnologias.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Serviços inclusos:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Integração tarifária e operacional</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Transporte escolar</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Supervisão de tecnologias</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Testes de sistemas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Projetos de infraestrutura</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-1" />
                    <span className="text-sm">Implementação de ITS</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Benefícios dos Projetos Técnicos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Integração Sistêmica</h4>
                    <p className="text-sm text-muted-foreground">
                      Conexão eficiente entre diferentes modais e sistemas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Inovação Tecnológica</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementação das mais avançadas soluções do mercado
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Validação Técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Testes rigorosos garantem funcionamento adequado
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Implementação Eficiente</h4>
                    <p className="text-sm text-muted-foreground">
                      Projetos executados dentro do prazo e orçamento
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resumo dos Benefícios */}
      <section className="py-16 bg-mobility-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Por que escolher nossos serviços?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Benefícios consolidados que impactam diretamente o sucesso do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 shadow-lg">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Redução de Custos</h3>
              <p className="text-sm text-muted-foreground">
                Otimização de recursos através de análise técnica especializada
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Melhoria da Qualidade</h3>
              <p className="text-sm text-muted-foreground">
                Implementação de melhores práticas e padrões do setor
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Conformidade</h3>
              <p className="text-sm text-muted-foreground">
                Adequação às normas e regulamentações específicas
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg">
              <BarChart3 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Decisões Baseadas em Dados</h3>
              <p className="text-sm text-muted-foreground">
                Relatórios técnicos que fundamentam escolhas estratégicas
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Precisa de consultoria especializada em mobilidade urbana?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e descubra como nossos serviços podem 
            contribuir para o sucesso do seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Solicite uma Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/areas-atuacao">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Áreas de Atuação
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Servicos;