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
        check_ajax_referer('ascode-calculator-save-data');

        /**
         * Recursive function to sanitize multidimensional array values.
         *
         * @param array $array The array to sanitize.
         *
         * @return array The sanitized array.
         */
        function sanitize_multidimensional_array($array)
        {
            $sanitizedArray = array();

            foreach ($array as $key => $value) {
                if (is_array($value)) {
                    $sanitizedArray[$key] = sanitize_multidimensional_array($value);
                } else {
                    $sanitizedArray[$key] = sanitize_text_field($value);
                }
            }

            return $sanitizedArray;
        }

        $user_id = get_current_user_id();
        $calculator_setting_value = sanitize_multidimensional_array($_POST);
        $calculator_name = $calculator_setting_value['calculatorInfo'][0]['calculator']['calculatorName'];


        if (!is_serialized($calculator_setting_value)) {
            $calculator_setting_value = maybe_serialize($calculator_setting_value);
        }

        $calculator_post_value = array(
            // 'post_author'   => $user_id,
            'post_title'    => $calculator_name,
            'post_content'  => $calculator_setting_value,
            // 'post_type'     => 'ascode_woo_calculator',
            'post_status'   => 'publish',
        );

        var_dump($calculator_post_value);

        wp_insert_post($calculator_post_value);

        wp_send_json_success([
            'message' => 'Calculator are Created Successfully.',
        ]);
    }
}
