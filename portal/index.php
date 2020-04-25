<?php
/**
 * Created by PhpStorm.
 * User: Wenbin Li
 * Date: 2/29/20
 * Time: 16:21
 * When the whole auth steps are finished, this page will show on the user's browser.
 */

if (isset($_GET['gw_id'])) {
    echo "Now, you can visit the Internet. Have Fun!";
    // header("Location: ".$_SESSION[$_GET['gw_id']]);
}
