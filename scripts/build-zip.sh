#!/bin/sh

mkdir -p ./_temp/FreshJuice ./_dist

cp -r ./theme/* ./_temp/FreshJuice

cd ./_temp

zip -rm ../_dist/freshjuice-hubspot-theme.zip ./FreshJuice -x "*/.DS_Store"
