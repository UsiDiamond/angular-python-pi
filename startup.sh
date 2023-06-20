#/bin/bash
add-apt-repository universe
apt-get update
apt-get install -y python3-pip
pip3 install gunicorn flask flask-cors
mkdir ./opt/angular-python-pi/logs
cd ./opt/angular-python-pi/ 
npm install
openssl req -subj '/CN=yourcompany.com/O=Name/C=US' -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout server.key -out server.crt   
nohup gunicorn --access-logfile logs/access.log --error-logfile logs/error.log --certfile=server.crt --keyfile=server.key --bind 0.0.0.0:9443 -w 4 controller:hello   &  nohup node /opt/angular-python-pi/server.js 