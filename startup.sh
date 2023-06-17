#/bin/bash
apt-get update
apt-get install -y git curl python3.4 python-pip
pip install Flask 
export FLASK_APP='/opt/angular-python-pi/app.py' 
mkdir ./opt/angular-python-pi/logs 
cd ./opt/angular-python-pi/ 
openssl req -subj '/CN=yourcompany.com/O=Name/C=US' -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout server.key -out server.crt  && \
npm install 
touch /opt/angular-python-pi/logs/cgi.log
nohup flask run -h localhost -p 9443  &  nohup node server.js 