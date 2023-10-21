<?php

namespace AsCode\WooCalculator\Admin;

/**
 * The menu handelar class
 */
class Menu
{

    function __construct()
    {
        add_action('admin_menu', [$this, 'admin_menu']);
    }

    public function admin_menu()
    {
        add_menu_page(
            __('AsCode Woo Calculator', 'ascode-woo-calculator'),
            __('Woo Calculator', 'ascode-woo-calculator'),
            'manage_options',
            'ascode-woo-calculator',
            [$this, 'plugin_page'],
            'dashicons-calculator',
        );
    }

    public function plugin_page()
    {
        require_once ASCODE_WOO_CALCULATOR_DIR_PATH . '/views/admin-view.php';
    }
}
