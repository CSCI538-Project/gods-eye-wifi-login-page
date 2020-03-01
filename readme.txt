This is a PHP project that used by CSCI 538 course, and the whole project is a kind of backend server for WiFiDog.

The login page has already moved to the folder of `login` and changed the index file from index.html to index.php in
order to accept necessary parameters from clients.

For now, the authorization token is static for testing usages, and the testing account is `test1` (username) and `usc`
(password).

I have tested the whole steps with this router at two MacBooks and one Window's computer. It works. --- 2020-02-29

========================================================================================================================
TODO:
We need to modify the form tag from the file of `login/index.php` in order to create a POST request to itself.
Please Notice that:
    Please keep the current request URL. For example, when the login/index.php is visited, the full URL might be `
    http://wifidog.liwenbin.com/wifidog/login/?gw_address=192.168.1.1&gw_port=2060&gw_id=1708B43AA1E&ip=192.168.1.100&
    mac=f4:5c:89:a4:be:45&url=http%3A%2F%2Fwww.gstatic.com%2Fgenerate_204` (1). When a user inputs the username and password,
    a POST request contained the `username` and `password` (2) inside the request's content should be sent to login/index.php
    without changing the current URL. That means the request URL should be (1), and the body inside the HTTP package
    should contain (2).

