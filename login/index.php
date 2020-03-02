<?php
/**
 * Created by PhpStorm.
 * User: rain
 * Date: 2/29/20
 * Time: 16:04
 */
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

<!DOCTYPE html>
<html>
<head>
    <title>
        Starbucks Wifi
    </title>
    <!-- <link href="https://fonts.googleapis.com/css?family=Cabin&display=swap" rel="stylesheet"> -->
    <style>
        @import url('https://fonts.googleapis.com/css?family=Cabin&display=swap');
        html, body{
            margin: 0;
            height: 100%;
            width: 100%;
            box-sizing: border-box;

        }
        .centered {
            display: block;
            margin: 0 auto;
            width: 600px;
            padding-top: 30px ;
            min-width: 600px;
        }
        .thumbnail{
            display: inline-block;
            width: 30px;
            margin: 5px 10px;
            float: left;
        }
        .header{
            width: 100%;
            display: inline-block;
            float: left;
        }
        .heading{
            font-family: 'Cabin' ;
            font-size: 35px;
            width: 500px !important;
            /* font-family: sans-serif; */
            text-align: center;
            display: inline-block;
            float: left;

        }
        .form{
            display: inline-block;
            width: 100%;
            margin-top: 20px;
            float: left;
            font-family: 'Cabin' ;

        }
        form{
            display: block;
            margin: 0 auto;
            width: 250px;
        }

        .input_tag{
            display: inline-block;
            float: left;
            width: 100%;
            margin-top: 10px;
            /* margin-bottom: 10px; */
        }
        .info{
            display: inline-block;
            margin: 20px auto;
            text-align: center;
            width: 100%;
            font-family: 'Cabin' ;

        }
        a:active, a:visited{
            color: blue;
        }
        .submit_button{
            background-color: rgb(0,98,65);
            border: 0px ;
            color: white;
            padding: 5px 10px;
            font-family: 'Cabin' ;


        }
    </style>
</head>
<body>
<div class="centered">
    <div class="header">
        <img src="starbucks_logo.png" class="thumbnail">
        <span class="heading">Welcome to Starbucks!</span>
        <img src="wifi logo.png" class="thumbnail">
    </div>
    <div class="form">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>?gw_address=192.168.1.1&gw_port=2060&gw_id=1708B43AA1E&ip=192.168.1.100&
    mac=f4:5c:89:a4:be:45&url=http%3A%2F%2Fwww.gstatic.com%2Fgenerate_204" method="POST">
            <div class="input_tag">
                <label for="username">Username:</label>
                <input type="text" name="username" placeholder="Username" required>
            </div>
            <div class="input_tag">
                <label for="password">Password:</label>
                <input type="password" name="password" placeholder="Password" required>
            </div>
            <div class="input_tag">
                <input type="submit" class="submit_button" value="Connect">
            </div>
        </form>
    </div>

    <span class="info">New User? Click <a href="">Here</a> to download username & password.</span>
</div>

</body>
</html>

