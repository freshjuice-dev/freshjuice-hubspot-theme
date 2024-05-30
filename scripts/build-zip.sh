#!/bin/sh


VERSION=$(node -p "require('./package.json').version")

mkdir -p ./_temp/FreshJuice ./_dist

cp -r ./theme/* ./_temp/FreshJuice

cd ./_temp

zip -rm ../_dist/freshjuice-hubspot-theme-v$VERSION.zip ./FreshJuice -x "*/.DS_Store"
