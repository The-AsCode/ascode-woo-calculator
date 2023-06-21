<?php

namespace AsCode\WooCalculator\Front;

/**
 * The frontend enqueue class
 */
class Enqueue
{

    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'frontend_scipts'], 10, 1);
    }

    public function frontend_scipts()
    {
        wp_enqueue_style('ascode-woo-calculator-frontend', ASC_WOO_CALCULATOR_ASSETS . '/front/css/output.css');
        wp_enqueue_script('ascode-woo-calculator-frontend', ASC_WOO_CALCULATOR_ASSETS . '/front/js/frontend.js', ['jquery'], null, true);

        wp_localize_script(
            'ascode-woo-calculator-frontend',
            'output_ajax_object',
             [
                 'ajax_url' => admin_url( 'admin-ajax.php' ),
                 'ajax_nonce' => wp_create_nonce( 'ascode-calculator-show-calculator' )
             ] );
    }
}