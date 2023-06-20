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
        wp_enqueue_script('ascode-frontend', ASC_WOO_CALCULATOR_ASSETS . '/front/js/frontend.js', [], null, true);
    }
}
