<?php

namespace AsCode\WooCalculator\Admin;

/**
 * The menu handelar class
 */
class Menu {

    function __construct() {
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );    
    }

    public function admin_menu() {
        add_menu_page( 
            __( 'AsCode Woo Calculator', 'ascode-woo-calculator'), 
            __( 'Woo Calculator', 'ascode-woo-calculator' ), 
            'manage_options', 
            'ascode-woo-calculator', 
            [ $this, 'plugin_page'] 
        );
    }

    public function plugin_page() {
        echo '<div id="asc-pm-dashboard">Hello</div>';
    }
}