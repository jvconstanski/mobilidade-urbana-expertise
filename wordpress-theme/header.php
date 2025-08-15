<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-content">
                <div class="site-branding">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        ?>
                        <h1 class="site-title">
                            <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
                                LG Mobilidade Urbana
                            </a>
                        </h1>
                        <?php
                    }
                    ?>
                </div>

                <nav id="site-navigation" class="main-nav">
                    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'container'      => false,
                        'fallback_cb'    => 'lg_mobilidade_fallback_menu',
                    ));
                    ?>
                </nav>
            </div>
        </div>
    </header>

    <div id="content" class="site-content">
        
<?php
// Fallback menu if no menu is assigned
function lg_mobilidade_fallback_menu() {
    echo '<ul id="primary-menu">';
    echo '<li><a href="' . home_url('/') . '">Home</a></li>';
    echo '<li><a href="' . home_url('/quem-somos/') . '">Quem Somos</a></li>';
    echo '<li><a href="' . home_url('/servicos/') . '">Serviços</a></li>';
    echo '<li><a href="' . home_url('/areas-atuacao/') . '">Áreas de Atuação</a></li>';
    echo '<li><a href="' . home_url('/contato/') . '">Contato</a></li>';
    echo '</ul>';
}
?>