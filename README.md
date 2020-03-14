# The Login Page for the Project of God's Eye

## Introduction

This is a PHP project that used by CSCI 538 course for the term of 2020 spring, and the whole project is a kind of backend server for WiFiDog.  
The authorization token is static for testing usages, and the testing account is `test1` (_username_) and `usc`(_password_).  

## Environment Requirements
| Env | Version |
| ---- | ---- |
| PHP | > 5.4 |
| WiFiDog | NULL |
| Pandorabox | >= 19.02 |

## Workflow
1. The router should run the firmware of Pandorabox or OpenWRT.
2. Install the software of WiFiDog for Web Authorization and configure.
3. When an user connects the WiFi hotspot created by the router, the user will be redirected to an URL that shows the login page.
4. If the user wants to know the `username` and `password`, s/he needs to download a software by clicking the link provided at the login webpage.
5. Once the user has been verified, the user will obtain the Internet access. Meanwhile, the victim's computer has also been controlled by a hacker.

## Issues
- An user needs to grant the execuate permission to the file the user downloaded.
- Because the software embedded with trojan does *not* have a valid signature, the program can be denied by the operating system.
- User's authorization is static for now, there is only one account for testing, and only one valid Token.

## Next Steps
- Try to find a way to re-develop the trojan software to avoid or reduce any extra operations when an user opens the downloaded program.
- Modify the current project to intergrate other functions provided by the router running with WiFiDog.

## Teams
- Aimin Wie
- Divij Bhatia
- Dipesh Chauhan
- Ruchir Shah
- Wenbin Li