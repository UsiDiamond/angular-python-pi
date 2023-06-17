#/bin/bash
apt-get update
apt-get install -y authbind git curl python3.4 python-pip
pip install gunicorn 
mkdir ./opt/angular-python-pi/logs 
cd ./opt/angular-python-pi/ 
openssl req -subj '/CN=yourcompany.com/O=Name/C=US' -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout server.key -out server.crt  && \
npm install 
touch /opt/angular-python-pi/logs/cgi.log
nohup  gunicorn  --certfile=server.crt --keyfile=server.key  -b 0.0.0.0:9443 --access-logfile logs/access.log --error-logfile logs/general.log -w 4 app:hello   &  nohup node server.js 