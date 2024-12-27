#!/bin/zsh

set -e
VERSION=$1

if [[ -z $VERSION ]]; then
  echo "No version number given";exit 1
fi

# First stop docker
docker compose stop

yarn build

git tag -a "$VERSION" -m "Tag prod version $VERSION"
git push --tags

ssh xwp71006-12@xwp85.xel.nl rm -rf deploy && mkdir -p deploy
scp -r build/* xwp71006-12@xwp85.xel.nl:~/deploy
ssh xwp71006-12@xwp85.xel.nl 'rm -rf irongirl.nl/* && cp -r deploy/* irongirl.nl'
scp config/prod-config.php xwp71006-12@xwp85.xel.nl:~/irongirl.nl/php/config.php

# Start docker again
docker compose up -d

echo "\n" Done! Visit https://irongirl.nl to view the changes "\n"