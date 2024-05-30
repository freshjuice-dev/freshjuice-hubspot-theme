#!/bin/sh

mode=${1:-patch}

if ! [ -x "$(command -v jq)" ]; then
  echo "Error: jq is not installed." >&2
  exit 1
fi

echo "Bumping version..."

# Bumping mode

echo "Bumping version with \"$mode\" mode. Please wait..."

if [ "$mode" != "major" ] && [ "$mode" != "minor" ] && [ "$mode" != "patch" ]; then
  echo "Invalid mode. Please use major, minor or patch."
  exit 1
fi

CURRENT_VERSION=$(node -p "require('./package.json').version")

echo "Current version: $CURRENT_VERSION"

# Bump version

npm version "$mode" --no-git-tag-version

NEW_VERSION=$(node -p "require('./package.json').version")

echo "New version: $NEW_VERSION"

jq ".version = \"$NEW_VERSION\"" theme/theme.json > theme/theme.json.tmp

mv theme/theme.json.tmp theme/theme.json

echo "Version bumped successfully!"

