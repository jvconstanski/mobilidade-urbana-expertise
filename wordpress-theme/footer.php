    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>LG Mobilidade Urbana</h3>
                    <p>Consultoria especializada em planejamento, execução e operação de sistemas de transporte público.</p>
                    <p><strong>Mais de 25 anos</strong> de experiência acumulada em mobilidade urbana.</p>
                </div>

                <div class="footer-section">
                    <h3>Nossos Serviços</h3>
                    <ul>
                        <li><a href="<?php echo home_url('/servicos/'); ?>">Planejamento</a></li>
                        <li><a href="<?php echo home_url('/servicos/'); ?>">Gestão e Operação</a></li>
                        <li><a href="<?php echo home_url('/servicos/'); ?>">Projetos e Engenharia</a></li>
                        <li><a href="<?php echo home_url('/areas-atuacao/'); ?>">Áreas de Atuação</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Empresa</h3>
                    <ul>
                        <li><a href="<?php echo home_url('/quem-somos/'); ?>">Quem Somos</a></li>
                        <li><a href="<?php echo home_url('/servicos/'); ?>">Serviços</a></li>
                        <li><a href="<?php echo home_url('/contato/'); ?>">Contato</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Contato</h3>
                    <p>📧 contato@lgmobilidadeurbana.com.br</p>
                    <p>📱 (11) 99999-9999</p>
                    <p>📍 São Paulo, SP</p>
                    
                    <div class="footer-cta mt-2">
                        <a href="https://wa.me/5511999999999?text=Olá, gostaria de mais informações sobre os serviços da LG Mobilidade Urbana" 
                           class="btn btn-primary" target="_blank">
                            💬 WhatsApp
                        </a>
                    </div>
                </div>

                <?php if (is_active_sidebar('footer-1') || is_active_sidebar('footer-2') || is_active_sidebar('footer-3')) : ?>
                    <div class="footer-widgets">
                        <?php if (is_active_sidebar('footer-1')) : ?>
                            <div class="footer-widget-area">
                                <?php dynamic_sidebar('footer-1'); ?>
                            </div>
                        <?php endif; ?>
                        
                        <?php if (is_active_sidebar('footer-2')) : ?>
                            <div class="footer-widget-area">
                                <?php dynamic_sidebar('footer-2'); ?>
                            </div>
                        <?php endif; ?>
                        
                        <?php if (is_active_sidebar('footer-3')) : ?>
                            <div class="footer-widget-area">
                                <?php dynamic_sidebar('footer-3'); ?>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> LG Mobilidade Urbana. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav ul');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
            this.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
</script>

<style>
/* Mobile menu styles */
@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    .menu-toggle span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: var(--text-color);
        margin: 3px 0;
        transition: 0.3s;
    }
    
    .menu-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .menu-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .main-nav ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        box-shadow: var(--shadow);
        flex-direction: column;
        padding: 1rem;
    }
    
    .main-nav ul.show {
        display: flex;
    }
}

@media (min-width: 769px) {
    .menu-toggle {
        display: none;
    }
}
</style>

</body>
</html>