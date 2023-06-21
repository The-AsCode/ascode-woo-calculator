<?php

namespace AsCode\WooCalculator\Front;

class FrontAjax
{

    public function __construct()
    {
        add_action('wp_ajax_ascode_load_calculator_preview_info_action', [$this, 'ascode_load_calculator_preview_info_action']);
    }

    public function ascode_load_calculator_preview_info_action()
    {
        return null;
    }
}
