import sys;
import logging;

logging.basicConfig(filename="/opt/angular-python-pi/logs/cgi.log",format='%(process)d-%(levelname)s-%(message)s')
logging.warning('This is a Warning')
print("Hello World!");
sys.stdout.flush();