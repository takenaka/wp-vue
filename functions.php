<?php

// Remove all default WP template redirects/lookups
remove_action('template_redirect', 'redirect_canonical');

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown

add_action('init', function () {
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
});

// Load scripts
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script(
        'WP-Vue-js',
        get_stylesheet_directory_uri().'/dist/app.js',
        array('jquery'),
        filemtime(get_stylesheet_directory().'/dist/app.js'),
        true
    );

    wp_enqueue_style(
        'WP-Vue-css',
        get_stylesheet_directory_uri().'/dist/app.css',
        null,
        filemtime(get_stylesheet_directory().'/dist/app.css')
    );
}, 100);
