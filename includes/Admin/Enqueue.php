<?php

namespace AsCode\WooCalculator\Admin;

class Enqueue {

    public function __construct() {
        add_action( 'admin_enqueue_scripts', [$this, 'admin_script'], 10, 1 );

    }

    /**
     * Load script
     *
     * @param $page
     * @return void
     */
    public function admin_script( $page ) {
        if( $page === 'toplevel_page_ascode-woo-calculator' ) {
            wp_enqueue_script( 'ascode-woo-calculator-dashboard', ASC_WOO_CALCULATOR_ASSETS .'/admin/js/dashboard.js', [], false, true );
            wp_enqueue_style( 'ascode-woo-calculator-dashboard', ASC_WOO_CALCULATOR_ASSETS .'/admin/css/dashboard.css');

        }
    }
}