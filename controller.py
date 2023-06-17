
def hello(environ, start_response):
    data = b"Hello, World!\n"
    start_response("200 OK", [
        ("Content-Type", "text/plain"),
        ('Access-Control-Allow-Origin', '*'),
        ("Content-Length", str(len(data)))
    ])
    return iter([data])