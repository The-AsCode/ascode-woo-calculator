<?php

namespace AsCode\WooCalculator\Admin;

class AdminAction {
    public function __construct(){
        add_action('woocommerce_product_options_general_product_data', [$this, 'add_custom_field_to_product' ]);
    }

    public function add_custom_field_to_product() {
        echo '<div class="options_group">';
        woocommerce_wp_text_input(
            array(
                'id' => 'custom_field',
                'label' => 'Custom Field',
                'description' => 'Enter a value for the custom field.',
            )
        );
        echo '</div>';
    }
}