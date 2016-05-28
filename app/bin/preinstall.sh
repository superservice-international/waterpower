#!/usr/bin/env sh
DIRECTORY=dev_node_modules/angular-acl

if [ ! -d "$DIRECTORY" ]; then
  git clone ssh://git@github.com/byteyard/angular-acl.git $DIRECTORY
  npm link $DIRECTORY
fi
