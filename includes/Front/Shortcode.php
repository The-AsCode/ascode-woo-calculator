<?php
namespace AsCode\WooCalculator\Front;

/**
 * The Shortcode handelar class
 */
class Shortcode {
    public function __construct()
    {
        add_shortcode( 'sample-shortcode',[$this,'shortcode_function']  );
    }

    function shortcode_function(  ): string
    {
        return "Hello Shortcode";
    }
}