<?php
/**
 * Template for Contato page
 */

get_header();
?>

<main id="primary" class="site-main">
    
    <div class="section">
        <div class="container">
            <div class="text-center mb-4">
                <h1>Entre em Contato</h1>
                <p>Solicite uma consulta ou tire suas dúvidas sobre nossos serviços</p>
            </div>
            
            <div class="contact-layout">
                <div class="contact-info">
                    <h2>Informações de Contato</h2>
                    
                    <div class="contact-item">
                        <strong>📧 E-mail:</strong>
                        <p>contato@lgmobilidadeurbana.com.br</p>
                    </div>
                    
                    <div class="contact-item">
                        <strong>📱 Telefone:</strong>
                        <p>(11) 99999-9999</p>
                    </div>
                    
                    <div class="contact-item">
                        <strong>📍 Localização:</strong>
                        <p>São Paulo, SP</p>
                    </div>
                    
                    <div class="contact-item">
                        <strong>⏰ Horário de Atendimento:</strong>
                        <p>Segunda a Sexta: 8h às 18h</p>
                    </div>
                    
                    <div class="whatsapp-section">
                        <h3>Atendimento Rápido</h3>
                        <a href="https://wa.me/5511999999999?text=Olá, gostaria de mais informações sobre os serviços da LG Mobilidade Urbana" 
                           class="btn btn-primary" target="_blank">
                            💬 Conversar no WhatsApp
                        </a>
                    </div>
                </div>
                
                <div class="contact-form-section">
                    <?php echo do_shortcode('[contact_form]'); ?>
                </div>
            </div>
        </div>
    </div>

</main>

<style>
.contact-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 2rem;
}

.contact-info {
    background: var(--background-light);
    padding: 2rem;
    border-radius: 0.75rem;
}

.contact-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
}

.contact-item:last-child {
    border-bottom: none;
}

.contact-item strong {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.contact-item p {
    color: var(--text-muted);
    margin: 0;
}

.whatsapp-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px solid var(--border-color);
    text-align: center;
}

@media (max-width: 768px) {
    .contact-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
</style>

<?php
get_footer();
?>