<?php
/**
 * Created by PhpStorm.
 * User: rain
 * Date: 2/29/20
 * Time: 16:18
 */
require_once '../config/config.inc.php';

if (!isset($_GET['token'])) {
    echo "Auth: 0";
    exit;
}

if (DEBUG_MODE) {
    if ($_GET['token'] == DEBUG_MODE_TOKEN) {
        echo "Auth: 1";
    } else {
        echo "Auth: 0";
    }
} else {
    // empty for now
}

