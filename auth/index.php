<?php
/**
 * Created by PhpStorm.
 * User: Wenbin Li
 * Date: 2/29/20
 * Time: 16:18
 * When the client obtains a token, it will request to this PHP script with its token to verify.
 * Notice: the return strings are only valid for "Auth: 1" and "Auth: 0" !
 */
require_once '../config/config.inc.php';

class AuthStatus {
    const Success = "Auth: 1";      // Permit to access the Internet
    const Fail = "Auth: 0";         // Deny to access the Internet

    public static function GetSuccessResponse() {
        return self::Success;
    }
    public static function GetFailResponse() {
        return self::Fail;
    }
}

if (!isset($_GET['token'])) {
    echo AuthStatus::GetFailResponse();
    exit;
}

if (DEBUG_MODE) {
    if ($_GET['token'] == DEBUG_MODE_TOKEN) {
        echo AuthStatus::GetSuccessResponse();
    } else {
        echo AuthStatus::GetFailResponse();
    }
} else {
    // empty for now, you can add anything you want. Just make sure the return string is valid.
}

