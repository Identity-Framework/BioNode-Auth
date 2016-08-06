#!/bin/bash

if [ "$EUID" -ne 0 ]; then
    echo "Please run as root"
    exit
fi

# build the container
docker build -t bionode-auth .
# run the container
docker run -it -p 3000:3000 --rm --name bionode-auth-running bionode-auth
