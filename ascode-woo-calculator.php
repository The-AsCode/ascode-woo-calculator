<?php

/*
 * Plugin Name:       AsCode Woo Calculator
 * Plugin URI:        
 * Description:       A plugin for build calculator for WooCommerce product.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.4
 * Author:            Osman Haider Adnan
 * Author URI:        
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        
 * Text Domain:       ascode-woo-calculator
 * Domain Path:       /languages
 */


 if( ! defined( 'ABSPATH' ) ) {
    exit;
 }

 if( ! file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
    die( 'Please run `composer install` on main plugin directory' );
 }

 require_once __DIR__ . '/vendor/autoload.php';

 /**
  * Plugin main class
  */
 final class AsCode_Woo_Calculator {

    /**
     * Define plugin version
     * 
     * @var string
     */
    const version = 1.0;

    private function __construct(){
        $this->define_constants();

        register_activation_hook( __FILE__, [ $this, 'activate' ] );

        add_action( 'plugins_loaded', [ $this, 'init_plugin' ] );
    }

    /**
     * Singleton instance
     *
     * @return \AsCode_Woo_Calculator
     */
    public static function init(){
        static $instance = false;

        if( ! $instance ) {
            $instance = new self();
        }

        return $instance;
    }

    /**
     * The constant function
     *
     * @return void
     */
    function define_constants() {
        define( 'ASCODE_WOO_CALCULATOR_VERSION', self::version );
        define( 'ASCODE_WOO_CALCULATOR_FILE', __FILE__ );
        define( 'ASCODE_WOO_CALCULATOR_DIR_PATH', __DIR__ );
        define( 'ASCODE_WOO_CALCULATOR_URL', plugins_url( '', ASCODE_WOO_CALCULATOR_FILE ) );
        define( 'ASC_WOO_CALCULATOR_ASSETS', ASCODE_WOO_CALCULATOR_URL . '/assets' );
    }

    /**
     * Do stuff upon plugin activation
     *
     * @return void
     */
    function activate() {
        $installed = get_option( 'ascode_installed_time' );

        if( ! $installed ) {
            update_option( 'ascode_installed_time', time() );
        }
    }

    /**
     * Initial plugin function
     *
     * @return void
     */
    public function init_plugin() {
        if( is_admin() ) {
            new AsCode\WooCalculator\Admin();
        } else {
            new AsCode\WooCalculator\Front();
        }
    }

 }

 /**
  * Initilized the main plugin
  *
  * @return \AsCode_Woo_Calculator
  */
 function ascode_woo_calcualtor(){
    return AsCode_Woo_Calculator::init();
 }

 //kick-off the plugin
 ascode_woo_calcualtor();