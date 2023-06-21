<?php

namespace AsCode\WooCalculator;

class Front
{
    public function __construct()
    {
        $this->load_front_files();
    }

    /**
     * Load front files
     *
     * @return void
     */
    public function load_front_files()
    {
        new Front\Enqueue();
        new Front\Shortcode();
        new Front\FrontAjax();
    }
}