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
        // $calculator_settings_data = sanitize_text_field($_POST);
        // $ascode_calculator_name = $_POST['calculatorInfo'][0]['calculator']['calculatorName'];
        // print_r($ascode_calculator_name);
        // print_r($_POST['calculatorInfo'][0]);


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

        $calculator_setting_value = sanitize_multidimensional_array($_POST);

        $calculator_name = $calculator_setting_value['calculatorInfo'][0]['calculator']['calculatorName'];
    }
}
