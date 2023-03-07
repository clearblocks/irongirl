#!/bin/zsh

set -e
VERSION=$1

if [[ -z $VERSION ]]; then
  echo "No version number given";exit 1
fi

git tag -a "$VERSION" -m "Tag prod version $VERSION"
git push --tags

ssh xwp71006-12@xwp85.xel.nl rm -rf deploy && mkdir -p deploy
scp -r build/* xwp71006-12@xwp85.xel.nl:~/deploy
ssh xwp71006-12@xwp85.xel.nl 'rm -rf irongirl.nl/* irongirl.nl/.htaccess && cp -r deploy/* irongirl.nl'
