

clean:
    rm -rf _output .jupyterlite.doit.db

init:
    jupyter lite init

build:
    jupyter lite build

serve:
    jupyter lite serve --port 8008

open:
    firefox http://127.0.0.1:8008/repl/?kernel=python

