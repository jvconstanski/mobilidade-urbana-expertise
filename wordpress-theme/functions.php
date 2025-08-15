<?php
/**
 * LG Mobilidade Urbana Theme Functions
 */

// Theme setup
function lg_mobilidade_setup() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => 'Menu Principal',
        'footer' => 'Menu do Rodapé',
    ));
}
add_action('after_setup_theme', 'lg_mobilidade_setup');

// Enqueue styles and scripts
function lg_mobilidade_scripts() {
    wp_enqueue_style('lg-mobilidade-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', array(), null);
    
    wp_enqueue_script('lg-mobilidade-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'lg_mobilidade_scripts');

// Register widget areas
function lg_mobilidade_widgets_init() {
    register_sidebar(array(
        'name'          => 'Sidebar Principal',
        'id'            => 'sidebar-1',
        'description'   => 'Adicione widgets aqui.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => 'Rodapé 1',
        'id'            => 'footer-1',
        'description'   => 'Primeira coluna do rodapé.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => 'Rodapé 2',
        'id'            => 'footer-2',
        'description'   => 'Segunda coluna do rodapé.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => 'Rodapé 3',
        'id'            => 'footer-3',
        'description'   => 'Terceira coluna do rodapé.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'lg_mobilidade_widgets_init');

// Custom excerpt length
function lg_mobilidade_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'lg_mobilidade_excerpt_length');

// Custom read more link
function lg_mobilidade_excerpt_more($more) {
    return '... <a href="' . get_permalink() . '" class="read-more">Leia mais</a>';
}
add_filter('excerpt_more', 'lg_mobilidade_excerpt_more');

// Contact form shortcode
function lg_mobilidade_contact_form() {
    ob_start();
    ?>
    <div class="contact-form">
        <form id="contact-form" method="post" action="">
            <?php wp_nonce_field('contact_form_nonce', 'contact_nonce'); ?>
            
            <div class="form-group">
                <label for="nome">Nome *</label>
                <input type="text" id="nome" name="nome" required>
            </div>
            
            <div class="form-group">
                <label for="email">E-mail *</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone">
            </div>
            
            <div class="form-group">
                <label for="empresa">Empresa/Órgão</label>
                <input type="text" id="empresa" name="empresa">
            </div>
            
            <div class="form-group">
                <label for="mensagem">Mensagem *</label>
                <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
        </form>
        
        <div class="whatsapp-section mt-3">
            <p class="text-center">Ou entre em contato pelo WhatsApp:</p>
            <div class="text-center">
                <a href="https://wa.me/5511999999999?text=Olá, gostaria de mais informações sobre os serviços da LG Mobilidade Urbana" 
                   class="btn btn-secondary" target="_blank">
                    💬 Conversar no WhatsApp
                </a>
            </div>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('contact_form', 'lg_mobilidade_contact_form');

// Handle contact form submission
function lg_mobilidade_handle_contact_form() {
    if (isset($_POST['contact_nonce']) && wp_verify_nonce($_POST['contact_nonce'], 'contact_form_nonce')) {
        $nome = sanitize_text_field($_POST['nome']);
        $email = sanitize_email($_POST['email']);
        $telefone = sanitize_text_field($_POST['telefone']);
        $empresa = sanitize_text_field($_POST['empresa']);
        $mensagem = sanitize_textarea_field($_POST['mensagem']);
        
        // Send email
        $to = get_option('admin_email');
        $subject = 'Novo contato do site - ' . $nome;
        $body = "Nome: {$nome}\n";
        $body .= "E-mail: {$email}\n";
        $body .= "Telefone: {$telefone}\n";
        $body .= "Empresa/Órgão: {$empresa}\n\n";
        $body .= "Mensagem:\n{$mensagem}";
        
        $headers = array('Content-Type: text/plain; charset=UTF-8');
        
        if (wp_mail($to, $subject, $body, $headers)) {
            add_action('wp_footer', function() {
                echo '<script>alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");</script>';
            });
        } else {
            add_action('wp_footer', function() {
                echo '<script>alert("Erro ao enviar mensagem. Tente novamente.");</script>';
            });
        }
    }
}
add_action('init', 'lg_mobilidade_handle_contact_form');

// Add custom body classes
function lg_mobilidade_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    return $classes;
}
add_filter('body_class', 'lg_mobilidade_body_classes');

// Custom post types (if needed)
function lg_mobilidade_custom_post_types() {
    // Projetos
    register_post_type('projetos', array(
        'labels' => array(
            'name' => 'Projetos',
            'singular_name' => 'Projeto',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-portfolio',
    ));
}
add_action('init', 'lg_mobilidade_custom_post_types');
?>