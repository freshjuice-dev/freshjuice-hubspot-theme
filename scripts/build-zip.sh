#!/bin/sh


VERSION=$(node -p "require('./package.json').version")

mkdir -p ./_temp/FreshJuiceDEV ./_dist

cp -r ./theme/* ./_temp/FreshJuiceDEV

cd ./_temp

zip -rm ../_dist/freshjuice-hubspot-theme-v$VERSION-dev.zip ./FreshJuiceDEV -x "*/.DS_Store"
