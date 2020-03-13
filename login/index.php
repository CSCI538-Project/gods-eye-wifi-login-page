<?php
require_once '../config/config.inc.php';

if (!isset($_GET['gw_address']) || !isset($_GET['gw_port']) || !isset($_GET['gw_id']) || !isset($_GET['url'])) {
    exit;
}

if (isset($_POST['username']) && isset($_POST['password'])) {
    if (DEBUG_MODE) {
        if ($_POST['username'] == DEBUG_MODE_USERNAME && $_POST['password'] == DEBUG_MODE_PASSWORD) {
            $_SESSION[$_GET['gw_id']] = $_GET['url'];
                header("Location: http://".$_GET['gw_address'].":".$_GET['gw_port'].WIFIDOG_PATH_ROUTER."auth?token=".DEBUG_MODE_TOKEN);
        }
    } else {
        // empty for now
    }
}
?>
<html lang="en"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="GlobalReach Technology">
    <meta name="copyright" content="GlobalReach Technology (2018)">
    <meta name="robots" content="noindex">
    <meta name="description" content="Solution Powered by GlobalReach Technology">
    <meta property="og:title" content="Starbucks WiFi">
    <meta property="og:description" content="Solution Powered by GlobalReach Technology">
    <meta property="og:image" content="og-image.png">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="og-image.png">
    <title>Starbucks Wi-Fi</title>
    <link rel="stylesheet" href="bootstrap.min.css?v=100">
    <link rel="stylesheet" href="fonts.css?v=100">
    <link rel="stylesheet" href="styles.css?v=100">

    <script src="jquery.min.js?v=100"></script>
    <script src="signup.js?v=100"></script>
<!-- <script async="" src="//www.googletagmanager.com/gtm.js?id=GTM-W8LDLC&amp;l=_frameworkDataLayer"></script><script async="" src="//www.googletagmanager.com/gtm.js?id=GTM-W3739M7&amp;l=_siteDataLayer"></script><script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script></head> -->

<body class="bkground" data-gr-c-s-loaded="true">
<div class="login-dark" role="main">
    <form id="auth-form" method="post" class="centered" action="<?php echo $_SERVER['PHP_SELF']; ?>?gw_address=192.168.100.1&gw_port=2060&gw_id=1708B43AA1E&ip=192.168.1.100&
        mac=f4:5c:89:a4:be:45&url=http%3A%2F%2Fwww.gstatic.com%2Fgenerate_204">
        <img class="img-fluid centered sbux-logo" alt="Starbucks logo" src="siren_2x.png">
        <p class="text-center centered wifi-title"><strong>Wi-Fi + Coffee =&nbsp; 💚</strong></p>
        <p class="text-center centered wifi-desc">Welcome to Starbucks<br>Log on to our network once, and this device will automatically connect at participating &nbsp;Starbucks<sup>®</sup> stores everywhere you go.</p>
        <div class="form-group centered">
            <input class="form-control" type="text" id="fname" name="Username" placeholder="Usename" maxlength="50" autocomplete="off" aria-label="First name" autofocus="">
            <div id="fname-err" class="form-err" aria-live="assertive"></div>
            <input class="form-control" type="password" id="lname" name="Password" placeholder="Password" autocomplete="off" maxlength="50" aria-label="Last name">
            <div id="lname-err" class="form-err" aria-live="assertive"></div>
            <!-- <input class="form-control" type="text" id="email" name="email" placeholder="Email address" autocomplete="off" maxlength="255" aria-label="Email address">
            <div id="email-err" class="form-err" aria-live="assertive"></div>
            <input class="form-control" type="text" id="postcode" name="postcode" autocomplete="off" placeholder="Postal code" maxlength="12" aria-label="Postal code"> -->
            <div id="postcode-err" class="form-err" aria-live="assertive"></div>
            <p class="text-center centered accept-line">By accepting, I agree to receive emails about Starbucks news, promotions and offers.</p>
            <input class="btn btn-primary btn-block" type="submit" value="Accept &amp; Connect">
            <br>
            <a href="http://192.168.100.1/GetWiFiAccess" download=" " target="_blank">
            <input class="btn btn-primary btn-block" type="button" value="New User? Click Here!">
            </a>
        </div>
        <p class="text-center centered terms-line">Starbucks <a href="8E9005FEDE0249F086CF8283EA445595.pdf" aria-label="Privacy Statement">Privacy Statement</a></p>
        <p class="text-center centered terms-line"><a href="terms.html" aria-label="Terms of Service">Terms of Service</a></p>
    </form>
</div>