<?php
namespace AsCode\WooCalculator\Front;

/**
 * The Shortcode handelar class
 */
class Shortcode {
    public function __construct()
    {
        add_shortcode( 'woo-calculator', [ $this, 'ascode_calculator_shortcode' ] );
    }
    /**
     * Display Calculator in the page
     *
     * @param $atts
     *
     * @return string
     */
    function ascode_calculator_shortcode( $atts )
    {
        $calculator_id = sanitize_text_field( $atts['id'] );
        $post_data = get_post( $calculator_id );

        if ( ! $post_data ) {
            return '<p>There is no such a calculator! Please set the calculator, or check the shortcode.<p>';
        }

        if ( 'calculator' !== $post_data->post_type ) {
            return '<p>You have not set a correct Calculator ID, Please copy the shortcode from <strong>Calculator List<strong/> page</p>';
        }

        $calculator_info = maybe_unserialize( $post_data->post_content );

        if ( ! $calculator_info ) {
            return '<p>Your calculator is not set with proper data, Please check the shortcode in Calculator List.</p>';
        }

        $calculator_field_info  = $calculator_info['calculatorInfo'][0]['fields'];

        foreach ( $calculator_field_info as $fields ) {
            var_dump($fields['name']);
        }
//        return "Hello {$attr}";
    }
}