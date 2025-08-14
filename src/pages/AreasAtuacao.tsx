import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Cog, CheckCircle, Target, TrendingUp, Shield } from "lucide-react";

const AreasAtuacao = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-mobility-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">Áreas de Atuação</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Atendemos Diversos Segmentos do Setor de Mobilidade Urbana
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa experiência abrange desde órgãos públicos gestores até empresas privadas 
              e fornecedores, oferecendo soluções especializadas para cada necessidade específica.
            </p>
          </div>
        </div>
      </section>

      {/* Órgãos Públicos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-12 h-12 text-primary" />
                <div>
                  <h2 className="text-3xl font-bold">Órgãos Públicos</h2>
                  <p className="text-muted-foreground">Gestores e reguladores do transporte público</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Oferecemos suporte técnico especializado para prefeituras, secretarias municipais, 
                autarquias e demais órgãos responsáveis pela gestão e regulação do transporte público.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Tipos de projetos:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Reestruturação de sistemas</h4>
                      <p className="text-sm text-muted-foreground">Redesenho completo de redes de transporte público</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Revisão tarifária</h4>
                      <p className="text-sm text-muted-foreground">Estudos técnicos para reajustes e políticas tarifárias</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Processos licitatórios</h4>
                      <p className="text-sm text-muted-foreground">Elaboração de editais e especificações técnicas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Fiscalização e controle</h4>
                      <p className="text-sm text-muted-foreground">Desenvolvimento de sistemas de monitoramento</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Estudos de viabilidade</h4>
                      <p className="text-sm text-muted-foreground">Análises para novos modais e projetos estruturantes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Benefícios para Órgãos Públicos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Fundamentação Técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Decisões respaldadas por análises técnicas sólidas e imparciais
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Otimização de Recursos Públicos</h4>
                    <p className="text-sm text-muted-foreground">
                      Maximização da eficiência dos investimentos em transporte
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Conformidade Legal</h4>
                    <p className="text-sm text-muted-foreground">
                      Adequação às normas e regulamentações do setor
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Melhoria do Serviço Público</h4>
                    <p className="text-sm text-muted-foreground">
                      Elevação da qualidade do transporte oferecido à população
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Empresas de Transporte Público */}
      <section className="py-16 bg-mobility-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="shadow-lg order-2 lg:order-1">
              <CardHeader>
                <CardTitle>Benefícios para Empresas Operadoras</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Redução de Custos Operacionais</h4>
                    <p className="text-sm text-muted-foreground">
                      Identificação de oportunidades de economia e otimização
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Melhoria da Eficiência</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementação de melhores práticas operacionais
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Adequação Regulatória</h4>
                    <p className="text-sm text-muted-foreground">
                      Conformidade com exigências dos órgãos gestores
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Competitividade</h4>
                    <p className="text-sm text-muted-foreground">
                      Fortalecimento da posição no mercado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-12 h-12 text-accent" />
                <div>
                  <h2 className="text-3xl font-bold">Empresas de Transporte Público</h2>
                  <p className="text-muted-foreground">Operadores privados e cooperativas</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Fornecemos consultoria especializada para empresas operadoras de transporte público, 
                cooperativas e consórcios, visando otimização operacional e competitividade.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Tipos de projetos:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Otimização operacional</h4>
                      <p className="text-sm text-muted-foreground">Melhoria de rotas, horários e utilização de frota</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Gestão de custos</h4>
                      <p className="text-sm text-muted-foreground">Análise detalhada e controle de custos operacionais</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Implementação de tecnologias</h4>
                      <p className="text-sm text-muted-foreground">Sistemas de gestão e controle operacional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Capacitação de equipes</h4>
                      <p className="text-sm text-muted-foreground">Treinamento técnico e operacional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Participação em licitações</h4>
                      <p className="text-sm text-muted-foreground">Suporte técnico para processos licitatórios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabricantes e Fornecedores */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cog className="w-12 h-12 text-primary" />
                <div>
                  <h2 className="text-3xl font-bold">Fabricantes e Fornecedores</h2>
                  <p className="text-muted-foreground">Empresas de tecnologia e equipamentos</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Apoiamos fabricantes e fornecedores de tecnologia para transporte público 
                no desenvolvimento, validação e implementação de suas soluções no mercado brasileiro.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Tipos de projetos:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Validação de tecnologias</h4>
                      <p className="text-sm text-muted-foreground">Testes de campo e certificação de soluções</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Estudos de mercado</h4>
                      <p className="text-sm text-muted-foreground">Análise de oportunidades e demanda</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Desenvolvimento de especificações</h4>
                      <p className="text-sm text-muted-foreground">Adequação às normas e necessidades locais</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Suporte à implementação</h4>
                      <p className="text-sm text-muted-foreground">Acompanhamento de projetos piloto</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium">Relacionamento institucional</h4>
                      <p className="text-sm text-muted-foreground">Facilitação de contatos com stakeholders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Benefícios para Fornecedores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Acesso ao Mercado</h4>
                    <p className="text-sm text-muted-foreground">
                      Facilitação da entrada no mercado brasileiro
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Validação Técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprovação da eficácia das soluções propostas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Adequação Regulatória</h4>
                    <p className="text-sm text-muted-foreground">
                      Conformidade com normas e padrões nacionais
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Credibilidade Técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Referências e validação independente
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios Gerais */}
      <section className="py-16 bg-mobility-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Benefícios da Nossa Atuação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Independentemente do segmento, nossa consultoria gera valor através de 
              análises técnicas especializadas e soluções customizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 shadow-lg">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visão Imparcial</h3>
              <p className="text-sm text-muted-foreground">
                Análises técnicas independentes sem vínculos comerciais
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Otimização</h3>
              <p className="text-sm text-muted-foreground">
                Identificação de oportunidades de melhoria e economia
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Conformidade</h3>
              <p className="text-sm text-muted-foreground">
                Adequação às normas e melhores práticas do setor
              </p>
            </Card>

            <Card className="text-center p-6 shadow-lg">
              <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Resultados</h3>
              <p className="text-sm text-muted-foreground">
                Soluções práticas que geram impacto mensurável
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Seu segmento precisa de consultoria especializada?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e descubra como podemos contribuir 
            para o sucesso do seu projeto ou organização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Fale com Nossos Especialistas
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

export default AreasAtuacao;