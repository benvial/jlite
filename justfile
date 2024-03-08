
code := "&code=import numpy as np&code=import matplotlib.pyplot as plt&code=plt.style.use('matplotlib/jlab.mplstyle')"

clean:
    rm -rf _output .jupyterlite.doit.db

init:
    jupyter lite init

build:
    jupyter lite build --contents=./content

serve:
    jupyter lite serve --port 8008

open:
    firefox "http://127.0.0.1:8008/repl/?kernel=python"

min:
    firefox "http://127.0.0.1:8008/repl/?kernel=python{{code}}"