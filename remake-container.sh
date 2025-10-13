#!/bin/bash
docker compose down
if [ "$(uname)" == 'Darwin' ]; then
    docker compose build --build-arg OS_TYPE=darwin
elif [ "$(expr substr $(uname -s) 1 5)" == 'Linux' ]; then
    docker-compose build
fi
docker compose up -d
