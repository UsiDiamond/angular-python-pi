import sys;
import logging;

logging.basicConfig(format='%(process)d-%(levelname)s-%(message)s')
logging.warning('This is a Warning')
print("Hello World!");
sys.stdout.flush();