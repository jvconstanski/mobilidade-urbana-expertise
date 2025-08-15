<?php
/**
 * Template for the front page (Home)
 */

get_header();
?>

<main id="primary" class="site-main">
    
    <!-- Hero Section -->
    <section class="hero hero-bg" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/hero-mobility.jpg');">
        <div class="container">
            <div class="hero-content">
                <h1>Consultoria especializada em mobilidade urbana</h1>
                <p class="hero-subtitle">
                    Mais de 25 anos de experiência em planejamento, execução e operação 
                    de sistemas de transporte público para cidades mais eficientes e sustentáveis.
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo home_url('/contato/'); ?>" class="btn btn-primary">
                        Solicite uma Consulta
                    </a>
                    <a href="<?php echo home_url('/servicos/'); ?>" class="btn btn-secondary">
                        Conheça nossos Serviços
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Destaques -->
    <section class="section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">25+</div>
                    <div class="stat-label">Anos de Experiência</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">100+</div>
                    <div class="stat-label">Cidades Atendidas</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">Nacional</div>
                    <div class="stat-label">Abrangência</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">B2B/B2G</div>
                    <div class="stat-label">Especialização</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sobre a LG -->
    <section class="section section-alt">
        <div class="container">
            <div class="content-grid">
                <div class="content-text">
                    <h2>Sobre a LG Mobilidade Urbana</h2>
                    <p>
                        A LG Mobilidade Urbana é uma empresa especializada em consultoria para o setor 
                        de transporte público, com mais de 25 anos de experiência acumulada pela equipe técnica.
                    </p>
                    <p>
                        Atuamos junto a órgãos públicos, empresas de transporte e fornecedores do setor, 
                        oferecendo soluções técnicas que integram planejamento, gestão e operação para 
                        sistemas de mobilidade urbana mais eficientes e sustentáveis.
                    </p>
                    <a href="<?php echo home_url('/quem-somos/'); ?>" class="btn btn-primary">
                        Saiba mais sobre nós
                    </a>
                </div>
                <div class="content-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/about-image.jpg" 
                         alt="Sobre a LG Mobilidade Urbana" />
                </div>
            </div>
        </div>
    </section>

    <!-- Principais Serviços -->
    <section class="section">
        <div class="container">
            <div class="text-center mb-4">
                <h2>Nossos Principais Serviços</h2>
                <p>Soluções completas para o setor de transporte público</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">📊</div>
                    <h3>Planejamento</h3>
                    <p>
                        Estudos especializados que fundamentam decisões estratégicas no 
                        transporte público através de análise técnica detalhada.
                    </p>
                    <ul>
                        <li>Estudos de custos e tarifas</li>
                        <li>Estudos de demanda</li>
                        <li>Viabilidade técnica e econômica</li>
                        <li>Pesquisas especializadas</li>
                    </ul>
                </div>

                <div class="service-card">
                    <div class="service-icon">⚙️</div>
                    <h3>Gestão e Operação</h3>
                    <p>
                        Garantimos o funcionamento eficiente dos sistemas através de 
                        monitoramento contínuo e implementação de melhorias operacionais.
                    </p>
                    <ul>
                        <li>Programação operacional</li>
                        <li>Monitoramento de operação</li>
                        <li>Manutenção de frota</li>
                        <li>Capacitação técnica</li>
                    </ul>
                </div>

                <div class="service-card">
                    <div class="service-icon">🏗️</div>
                    <h3>Projetos e Engenharia</h3>
                    <p>
                        Desenvolvemos soluções inovadoras para os desafios do transporte 
                        público moderno, integrando sistemas e tecnologias.
                    </p>
                    <ul>
                        <li>Integração tarifária e operacional</li>
                        <li>Transporte escolar</li>
                        <li>Supervisão de tecnologias</li>
                        <li>Implementação de ITS</li>
                    </ul>
                </div>
            </div>
            
            <div class="text-center mt-4">
                <a href="<?php echo home_url('/servicos/'); ?>" class="btn btn-primary">
                    Ver todos os serviços
                </a>
            </div>
        </div>
    </section>

    <!-- O que fazemos -->
    <section class="section section-alt">
        <div class="container">
            <div class="text-center mb-4">
                <h2>O que fazemos e por que isso importa</h2>
                <p>Nossa atuação gera resultados concretos para nossos clientes</p>
            </div>
            
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">💰</div>
                    <h3>Redução de Custos</h3>
                    <p>Otimização de recursos através de análise técnica especializada e identificação de oportunidades de economia.</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">🛡️</div>
                    <h3>Melhoria da Qualidade</h3>
                    <p>Implementação de melhores práticas do setor e melhoria contínua dos indicadores de qualidade.</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">✅</div>
                    <h3>Conformidade Regulatória</h3>
                    <p>Adequação às normas e regulamentações específicas do setor de transporte público.</p>
                </div>
                
                <div class="benefit-card">
                    <div class="benefit-icon">📈</div>
                    <h3>Decisões Baseadas em Dados</h3>
                    <p>Relatórios técnicos detalhados que fundamentam escolhas estratégicas e reduzem riscos.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Áreas de Atuação -->
    <section class="section">
        <div class="container">
            <div class="text-center mb-4">
                <h2>Áreas de Atuação</h2>
                <p>Atendemos diferentes segmentos do setor de mobilidade urbana</p>
            </div>
            
            <div class="areas-grid">
                <div class="area-card">
                    <h3>Órgãos Públicos</h3>
                    <p>Prefeituras, secretarias e autarquias que precisam de suporte técnico especializado para gestão do transporte público.</p>
                </div>
                
                <div class="area-card">
                    <h3>Empresas de Transporte</h3>
                    <p>Operadores de transporte público que buscam otimização operacional e melhoria da eficiência.</p>
                </div>
                
                <div class="area-card">
                    <h3>Fabricantes e Fornecedores</h3>
                    <p>Empresas do setor que necessitam de validação técnica e suporte para implementação de soluções.</p>
                </div>
            </div>
            
            <div class="text-center mt-4">
                <a href="<?php echo home_url('/areas-atuacao/'); ?>" class="btn btn-primary">
                    Conheça nossas áreas de atuação
                </a>
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section class="section cta-section">
        <div class="container">
            <div class="text-center">
                <h2>Precisa de consultoria especializada em mobilidade urbana?</h2>
                <p>
                    Entre em contato conosco e descubra como nossa experiência pode 
                    contribuir para o sucesso do seu projeto.
                </p>
                <div class="cta-buttons">
                    <a href="<?php echo home_url('/contato/'); ?>" class="btn btn-primary">
                        Solicite uma Consulta
                    </a>
                    <a href="https://wa.me/5511999999999?text=Olá, gostaria de mais informações sobre os serviços da LG Mobilidade Urbana" 
                       class="btn btn-secondary" target="_blank">
                        💬 WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </section>

</main>

<style>
/* Hero Section */
.hero {
    padding: 8rem 0 6rem;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    text-align: center;
    position: relative;
}

.hero-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
}

.stat-item {
    padding: 1.5rem;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.stat-label {
    color: var(--text-muted);
    font-weight: 500;
}

/* Content Grid */
.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.content-image img {
    width: 100%;
    border-radius: 0.75rem;
}

/* Service Cards */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: var(--shadow-lg);
    text-align: center;
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-card h3 {
    color: var(--text-color);
    margin-bottom: 1rem;
}

.service-card ul {
    list-style: none;
    text-align: left;
    margin-top: 1rem;
}

.service-card li {
    padding: 0.25rem 0;
    color: var(--text-muted);
}

.service-card li::before {
    content: '✓';
    color: var(--accent-color);
    font-weight: bold;
    margin-right: 0.5rem;
}

/* Benefits Grid */
.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.benefit-card {
    background: white;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: var(--shadow-lg);
    text-align: center;
}

.benefit-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

/* Areas Grid */
.areas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.area-card {
    background: white;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: var(--shadow-lg);
    text-align: center;
}

/* CTA Section */
.cta-section {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }
    
    .content-grid {
        grid-template-columns: 1fr;
    }
    
    .services-grid,
    .benefits-grid,
    .areas-grid {
        grid-template-columns: 1fr;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>

<?php
get_footer();
?>