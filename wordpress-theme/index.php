<?php
/**
 * The main template file
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container">
        
        <?php if (have_posts()) : ?>
            
            <header class="page-header">
                <?php if (is_home() && !is_front_page()) : ?>
                    <h1 class="page-title"><?php single_post_title(); ?></h1>
                <?php elseif (is_search()) : ?>
                    <h1 class="page-title">
                        <?php printf(__('Resultados da busca por: %s'), '<span>' . get_search_query() . '</span>'); ?>
                    </h1>
                <?php elseif (is_archive()) : ?>
                    <h1 class="page-title">
                        <?php the_archive_title(); ?>
                    </h1>
                    <?php the_archive_description('<div class="archive-description">', '</div>'); ?>
                <?php else : ?>
                    <h1 class="page-title">Blog</h1>
                <?php endif; ?>
            </header>

            <div class="posts-container">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('large'); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="post-content">
                            <header class="entry-header">
                                <h2 class="entry-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                
                                <div class="entry-meta">
                                    <span class="posted-on">
                                        <?php echo get_the_date(); ?>
                                    </span>
                                    <?php if (get_the_category()) : ?>
                                        <span class="categories">
                                            <?php the_category(', '); ?>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </header>

                            <div class="entry-summary">
                                <?php the_excerpt(); ?>
                            </div>

                            <footer class="entry-footer">
                                <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                    Leia mais
                                </a>
                            </footer>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <?php the_posts_navigation(); ?>

        <?php else : ?>

            <section class="no-results not-found">
                <header class="page-header">
                    <h1 class="page-title">Nada encontrado</h1>
                </header>

                <div class="page-content">
                    <?php if (is_home() && current_user_can('publish_posts')) : ?>
                        <p>Pronto para publicar seu primeiro post? <a href="<?php echo esc_url(admin_url('post-new.php')); ?>">Comece aqui</a>.</p>
                    <?php elseif (is_search()) : ?>
                        <p>Desculpe, mas nada corresponde aos seus termos de pesquisa. Tente novamente com algumas palavras-chave diferentes.</p>
                        <?php get_search_form(); ?>
                    <?php else : ?>
                        <p>Parece que não conseguimos encontrar o que você está procurando. Talvez a pesquisa possa ajudar.</p>
                        <?php get_search_form(); ?>
                    <?php endif; ?>
                </div>
            </section>

        <?php endif; ?>
        
    </div>
</main>

<style>
.posts-container {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
}

.post-card {
    background: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    transition: transform 0.3s ease;
}

.post-card:hover {
    transform: translateY(-5px);
}

.post-thumbnail img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.post-content {
    padding: 1.5rem;
}

.entry-title a {
    text-decoration: none;
    color: var(--text-color);
}

.entry-title a:hover {
    color: var(--primary-color);
}

.entry-meta {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.entry-meta span {
    margin-right: 1rem;
}

.page-header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 2rem 0;
}

.posts-navigation {
    margin-top: 3rem;
    text-align: center;
}

.posts-navigation a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    margin: 0 0.5rem;
}

.posts-navigation a:hover {
    background-color: var(--primary-hover);
}
</style>

<?php
get_sidebar();
get_footer();
?>