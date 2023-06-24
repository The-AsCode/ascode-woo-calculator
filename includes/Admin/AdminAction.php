<?php

namespace AsCode\WooCalculator\Admin;

class AdminAction {
    public function __construct(){
        add_action('woocommerce_product_options_general_product_data', [ $this, 'ascode_custom_field_to_product' ]);
        add_action('woocommerce_process_product_meta', [ $this, 'woo_calculator_save_custom_field' ]);
    }

    /**
     * Custom field add in single product
     *
     * @return void
     */
    public function ascode_custom_field_to_product() {
        global $post;

        // Get the existing custom field value
        $custom_field_value = get_post_meta($post->ID, 'woo_calculator', true);

        echo '<div class="options_group">';
        woocommerce_wp_text_input(
            array(
                'id'            => 'woo_calculator_value',
                'label'         => 'Capacity',
                'type'          => 'number',
                'description'   => 'Enter a value number value in Watt',
                'value'         => $custom_field_value
            )
        );
        echo '</div>';
    }

    /**
     * Save custom field value from product page.
     *
     * @param $post_id
     * @return void
     */
    function woo_calculator_save_custom_field($post_id) {
        $custom_field_value = isset($_POST['woo_calculator_value']) ? sanitize_text_field($_POST['woo_calculator_value']) : '';
        update_post_meta($post_id, 'woo_calculator', $custom_field_value);
    }
}