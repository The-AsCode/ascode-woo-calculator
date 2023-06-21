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
        var_dump($_POST['calculatorId']);
    }
}
