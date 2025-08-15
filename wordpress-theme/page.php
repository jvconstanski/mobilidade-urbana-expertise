<?php
/**
 * The template for displaying all pages
 */

get_header();
?>

<main id="primary" class="site-main">
    
    <?php while (have_posts()) : the_post(); ?>
        
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            
            <?php if (has_post_thumbnail() && !is_front_page()) : ?>
                <div class="hero hero-bg" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>');">
                    <div class="container">
                        <div class="hero-content">
                            <header class="entry-header">
                                <h1 class="entry-title"><?php the_title(); ?></h1>
                            </header>
                        </div>
                    </div>
                </div>
            <?php else : ?>
                <div class="section">
                    <div class="container">
                        <header class="entry-header text-center">
                            <h1 class="entry-title"><?php the_title(); ?></h1>
                        </header>
                    </div>
                </div>
            <?php endif; ?>

            <div class="section">
                <div class="container">
                    <div class="entry-content">
                        <?php
                        the_content();

                        wp_link_pages(array(
                            'before' => '<div class="page-links">Páginas: ',
                            'after'  => '</div>',
                        ));
                        ?>
                    </div>

                    <?php if (get_edit_post_link()) : ?>
                        <footer class="entry-footer">
                            <?php edit_post_link('Editar esta página', '<span class="edit-link">', '</span>'); ?>
                        </footer>
                    <?php endif; ?>
                </div>
            </div>

        </article>

        <?php
        // If comments are open or we have at least one comment, load up the comment template.
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;
        ?>

    <?php endwhile; ?>

</main>

<style>
.entry-content {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
}

.entry-content h2,
.entry-content h3,
.entry-content h4 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.entry-content p {
    margin-bottom: 1.5rem;
}

.entry-content ul,
.entry-content ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
}

.entry-content li {
    margin-bottom: 0.5rem;
}

.entry-content img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1rem 0;
}

.entry-content blockquote {
    background: var(--background-light);
    border-left: 4px solid var(--primary-color);
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
    font-style: italic;
}

.page-links {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
}

.edit-link {
    margin-top: 2rem;
    display: inline-block;
}

.edit-link a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.9rem;
}

.edit-link a:hover {
    color: var(--primary-color);
}
</style>

<?php
get_footer();
?>