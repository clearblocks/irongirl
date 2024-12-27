#!/bin/zsh

set -e

# First stop docker
docker compose stop

yarn build

ssh xwp71006-12@xwp85.xel.nl rm -rf deploy && mkdir -p deploy
scp -r build/* xwp71006-12@xwp85.xel.nl:~/deploy
ssh xwp71006-12@xwp85.xel.nl 'rm -rf test.irongirl.nl/* && cp -r deploy/* test.irongirl.nl'
scp config/test-config.php xwp71006-12@xwp85.xel.nl:~/test.irongirl.nl/php/config.php

# Start docker again
docker compose up -d

echo "\n" Done! Visit https://test.irongirl.nl to view the changes "\n"