<?php
namespace AsCode\WooCalculator\Front;

/**
 * The Shortcode handelar class
 */
class Shortcode {
    public function __construct()
    {
        add_shortcode( 'foobar', [$this, 'foobar_func'] );
    }

    function foobar_func( $atts ){
        return '<h1>Hello from shorcode!</h1>';
    }
}