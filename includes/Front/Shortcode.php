<?php

namespace AsCode\WooCalculator\Front;

/**
 * The Shortcode handelar class
 */
class Shortcode
{
    public function __construct()
    {
        add_shortcode('woo-calculator', [$this, 'ascode_calculator_shortcode']);
    }
    /**
     * Display Calculator in the page
     *
     * @param $atts
     *
     * @return string
     */
    function ascode_calculator_shortcode($atts)
    {
        $calculator_id = sanitize_text_field($atts['id']);
        $post_data = get_post($calculator_id);

        // if (!$post_data) {
        //     return '<p>There is no such a calculator! Please set the calculator, or check the shortcode.<p>';
        // }

        // if ('calculator' !== $post_data->post_type) {
        //     return '<p>You have not set a correct Calculator ID, Please copy the shortcode from <strong>Calculator List<strong/> page</p>';
        // }

        // $calculator_info = maybe_unserialize($post_data->post_content);

        // if (!$calculator_info) {
        //     return '<p>Your calculator is not set with proper data, Please check the shortcode in Calculator List.</p>';
        // }

        // $calculator_field_info  = $calculator_info['calculatorInfo'][0]['fields'];

        // foreach ($calculator_field_info as $fields) {
        //     var_dump($fields['name']);
        // }
        //        return "Hello {$attr}";

        ob_start();
        ?>
        <div style="display:flex">
            <div id="ascode_calculator_view" data-value="<?php echo $calculator_id; ?>" style="padding:20px;">Hello</div>
            <div style="padding:20px;">
            <?php
                global $product;

                // Get the product ID
                $product_id = 32;

                // Get the product object
                $product = wc_get_product($product_id);

                // Output the product image
                echo '<img src="' . wp_get_attachment_image_src($product->get_image_id(), 'full')[0] . '" alt="' . $product->get_name() . '">';

                // Output the product title
                echo '<h2>' . $product->get_name() . '</h2>';

                // Output the product price
                echo '<p>' . $product->get_price_html() . '</p>';

                // Output the product add to cart button
                echo '<a href="' . $product->add_to_cart_url() . '" class="button">' . __('Add to Cart', 'woocommerce') . '</a>';
              ?>
            </div>
        </div>

        <?php
        return ob_get_clean();
    }
}