<?php

namespace AsCode\WooCalculator\Front;

class FrontAjax
{

    public function __construct()
    {
        add_action('wp_ajax_ascode_load_calculator_preview_info_action', [$this, 'ascode_load_calculator_preview_info_action']);
        add_action('wp_ajax_nopriv_ascode_load_calculator_preview_info_action', [$this, 'ascode_load_calculator_preview_info_action']);

        add_action('wp_ajax_ascode_preview_product_action', [$this, 'ascode_preview_product_action']);
        add_action('wp_ajax_ascode_preview_product_action', [$this, 'ascode_preview_product_action']);

    }

    /**
     * calculator preview function
     *
     * @return void
     */
    public function ascode_load_calculator_preview_info_action()
    {
        check_ajax_referer('ascode-calculator-show-calculator');

        $single_calculator_id = sanitize_text_field($_POST['calculator_id']);

        $single_calculator_data = get_post($single_calculator_id);

        $calculator_info = maybe_unserialize($single_calculator_data->post_content);

        $calculator_fields = $calculator_info['calculatorInfo'][0]['fields'];

        wp_send_json_success($calculator_fields);
        wp_die();
    }

    /**
     * Preview product function
     *
     * @return void
     */
    public function ascode_preview_product_action(){
        check_ajax_referer('ascode-calculator-show-calculator');

        global $wpdb;
        $total_value = sanitize_text_field($_POST['total_value']);
        $metaKey = 'woo_calculator';

        $query = $wpdb->prepare("
            SELECT p.ID
            FROM {$wpdb->posts} AS p
            JOIN {$wpdb->postmeta} AS pm ON p.ID = pm.post_id
            WHERE p.post_type = 'product'
            AND p.post_status = 'publish'
            AND pm.meta_key = %s
            AND CAST(pm.meta_value AS SIGNED) > %d
            AND CAST(pm.meta_value AS SIGNED) < %d
            ",
            $metaKey,
            $total_value - 10,
            $total_value + 10
        );
        $results = $wpdb->get_results($query, ARRAY_A);
        $product_id = (int) $results[0]['ID'];

        global $product;
        $product = wc_get_product($product_id);

        $product_view_data = [
            'product_image' => wp_get_attachment_image_src($product->get_image_id(), 'full')[0],
            'product_name'  => $product->get_name(),
            'product_price' => $product->get_price(),
            'add_to_cart'   => $product->add_to_cart_url(),
            'currency_code' => get_option('woocommerce_currency')
        ];
        wp_send_json_success( $product_view_data, true  );
        wp_die();
    }
}