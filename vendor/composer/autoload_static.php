<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9e76842b073759827f17782bd51fe175
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'AsCode\\WooCalculator\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'AsCode\\WooCalculator\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9e76842b073759827f17782bd51fe175::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9e76842b073759827f17782bd51fe175::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
