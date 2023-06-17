import sys;
import logging;

logging.basicConfig(filename="./logs/cgi.log",format='%(process)d-%(levelname)s-%(message)s')
logging.warning('This is a Warning')
logging.info("Hello World!");
sys.stdout.flush();