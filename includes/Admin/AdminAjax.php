<?php

namespace AsCode\WooCalculator\Admin;

/**
 * The admin class
 *
 * All admin Ajax will run here
 */
class AdminAjax
{

    function __construct()
    {
        add_action('wp_ajax_ascode_save_calculator_info_action', [$this, 'ascode_save_calculator_info_action']);
    }

    /**
     * Save calculator settings data
     *
     * @return void
     */
    public function ascode_save_calculator_info_action()
    {
        wp_send_json_success(true);
    }
}
