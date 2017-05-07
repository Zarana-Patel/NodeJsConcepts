/*
Port : once a computer receives a packet how it knows what program to send it to..

Example: assume we have browser which send request to webserver. It send request via webserver IP address. Web server has many program running - node js,email server,FTP. . Each program has to set to port number. Based on port number it identify which program is going to receive information.
lets say nodejs has 443 port number then browser send request like : 192.168.1.48:443
*/