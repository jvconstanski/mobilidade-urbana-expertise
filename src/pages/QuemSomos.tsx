import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, CheckCircle, Award, Users, TrendingUp } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-mobility-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">Quem Somos</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Especialistas em Mobilidade Urbana com 25+ Anos de Experiência
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A LG Mobilidade Urbana é uma consultoria técnica especializada que transforma 
              desafios complexos do transporte público em soluções eficazes e sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* História e Contexto */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Fundada por profissionais com vasta experiência no setor de transporte público, 
                a LG Mobilidade Urbana nasceu da necessidade de oferecer consultoria técnica 
                especializada e independente para os diversos agentes do setor.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa equipe técnica acumula mais de 25 anos de experiência prática em 
                planejamento, gestão e operação de sistemas de transporte público, atuando 
                tanto no setor público quanto privado.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Ao longo dos anos, desenvolvemos metodologias consolidadas e mantemos 
                relacionamento próximo com os principais players do setor, permitindo 
                uma visão abrangente e atualizada dos desafios da mobilidade urbana brasileira.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-mobility-light rounded-lg">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">25+ Anos</h4>
                  <p className="text-sm text-muted-foreground">Experiência Acumulada</p>
                </div>
                <div className="text-center p-4 bg-mobility-light rounded-lg">
                  <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold">100+ Projetos</h4>
                  <p className="text-sm text-muted-foreground">Desenvolvidos</p>
                </div>
              </div>
            </div>
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Nosso Diferencial</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-medium">Independência Técnica</h4>
                        <p className="text-sm text-muted-foreground">
                          Análises imparciais sem vínculos comerciais com fornecedores
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-medium">Visão Sistêmica</h4>
                        <p className="text-sm text-muted-foreground">
                          Compreensão ampla dos aspectos técnicos, econômicos e regulatórios
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-medium">Experiência Prática</h4>
                        <p className="text-sm text-muted-foreground">
                          Vivência real em gestão e operação de sistemas de transporte
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-medium">Atualização Constante</h4>
                        <p className="text-sm text-muted-foreground">
                          Acompanhamento das melhores práticas e inovações do setor
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-mobility-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossos princípios fundamentais orientam cada projeto e definem nossa 
              abordagem profissional no setor de mobilidade urbana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Fornecer consultoria técnica especializada em mobilidade urbana, 
                  desenvolvendo soluções eficazes que otimizam recursos públicos e 
                  privados, contribuindo para sistemas de transporte mais eficientes, 
                  sustentáveis e acessíveis.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <Eye className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como referência nacional em consultoria técnica 
                  para mobilidade urbana, contribuindo significativamente para a 
                  melhoria da qualidade do transporte público e da qualidade de 
                  vida nas cidades brasileiras.
                </p>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Valores</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Excelência técnica</li>
                  <li>• Independência e imparcialidade</li>
                  <li>• Transparência nas análises</li>
                  <li>• Compromisso com resultados</li>
                  <li>• Sustentabilidade urbana</li>
                  <li>• Ética profissional</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais Competitivos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Diferenciais Competitivos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos diferencia no mercado de consultoria em mobilidade urbana
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experiência */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-12 h-12 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Experiência Consolidada</h3>
                    <p className="text-muted-foreground mb-4">
                      Mais de 25 anos de experiência prática em todas as fases do 
                      transporte público: planejamento, implementação, operação e gestão.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Participação em projetos estruturantes</li>
                      <li>• Vivência em órgãos gestores públicos</li>
                      <li>• Experiência em empresas operadoras</li>
                      <li>• Conhecimento de fornecedores e tecnologias</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Abrangência */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-12 h-12 text-accent mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Abrangência Nacional</h3>
                    <p className="text-muted-foreground mb-4">
                      Atendimento especializado em todo o território nacional, 
                      com conhecimento das particularidades regionais do transporte público.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Projetos em todas as regiões brasileiras</li>
                      <li>• Adaptação às realidades locais</li>
                      <li>• Conhecimento da legislação específica</li>
                      <li>• Relacionamento com stakeholders regionais</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metodologia */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-12 h-12 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Metodologia Própria</h3>
                    <p className="text-muted-foreground mb-4">
                      Desenvolvimento de metodologias técnicas consolidadas e 
                      testadas em dezenas de projetos reais.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Processos estruturados e documentados</li>
                      <li>• Ferramentas de análise proprietárias</li>
                      <li>• Benchmarking com melhores práticas</li>
                      <li>• Indicadores de performance específicos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Relacionamento */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-12 h-12 text-accent mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Relacionamento Setorial</h3>
                    <p className="text-muted-foreground mb-4">
                      Ampla rede de relacionamentos no setor, facilitando 
                      acesso a informações e melhores práticas.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Contato direto com gestores públicos</li>
                      <li>• Relacionamento com operadores privados</li>
                      <li>• Acesso a fornecedores de tecnologia</li>
                      <li>• Participação em fóruns especializados</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Conheça nossos serviços especializados
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Descubra como nossa experiência e metodologia podem contribuir 
            para o sucesso do seu projeto de mobilidade urbana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/servicos">
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Ver Nossos Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;