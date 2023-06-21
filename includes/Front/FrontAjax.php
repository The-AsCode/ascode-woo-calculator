<?php

namespace AsCode\WooCalculator\Front;

class FrontAjax
{

    public function __construct()
    {
        add_action('wp_ajax_ascode_load_calculator_preview_info_action', [$this, 'ascode_load_calculator_preview_info_action']);
        add_action('wp_ajax_nopriv_ascode_load_calculator_preview_info_action', [$this, 'ascode_load_calculator_preview_info_action']);
    }

    public function ascode_load_calculator_preview_info_action()
    {
        check_ajax_referer('ascode-calculator-show-calculator');

        $single_calculator_id = $_POST['calculator_id'];

        $single_calculator_data = get_post($single_calculator_id);

        $calculator_info = maybe_unserialize($single_calculator_data->post_content);

        $calculator_fields = $calculator_info['calculatorInfo'][0]['fields'];

        wp_send_json_success($calculator_fields);
    }
}
