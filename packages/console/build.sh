#!/bin/bash -e

packages=(core util parser component console)

for pakcage in ${packages[@]}; do
  echo "yarn workspace @blog/$pakcage build"
  yarn workspace @blog/"$pakcage" build
done
