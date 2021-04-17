#!/bin/sh -e

packages=(core util parser console)

for pakcage in ${packages[@]}; do
  echo "yarn workspace @blog/$pakcage build"
  yarn workspace @blog/"$pakcage" build
done
