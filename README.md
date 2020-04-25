# Backend for WiFiDog

## Introduction
This is a PHP project that used by CSCI 538 course, and the whole project is used for WiFiDog.
The authorization token is static for testing usages, and the testing account is `test1` (_username_) and `usc`(_password_). 

## Environment Requirements
| Env | Version |
| ---- | ---- |
| PHP | > 5 |
| WiFiDog | NULL |
| Pandorabox | 19.02 |

## Workflow with Router
1. The router should run the firmware of Pandorabox or OpenWRT.
2. Install the software of WiFiDog for Web Authorization and configure.
3. When an user connects the WiFi hotspot created by the router, the user will be redirected to an URL that shows the login page.
4. If the user wants to know the `username` and `password`, s/he needs to download a software by clicking the link provided at the login webpage.
5. Once the user has been verified, the user will obtain the Internet access. Meanwhile, the victim's computer has also been controlled by a hacker.

## Issues
- An user needs to grant the execution permission to the file the user downloaded.
- Because the software embedded with the trojan does *not* have a valid signature, the program can be denied by the operating system.
- User's authorization is static for now, there is only one account for testing, and only one valid Token.

## Personal Statement
- For now, the authorization token is static for testing usages, and the testing account is `test1` (username) and `usc` (password).
- More information you can find out from the source code.

## Contributors
* Divij Bhatia
* Ruchir Shah
* Wenbin Li
