#!/bin/sh

echo "Bumping version..."

CURRENT_VERSION=$(node -p "require('./package.json').version")

echo "Current version: $CURRENT_VERSION"

# Bump version

npm version minor --no-git-tag-version

NEW_VERSION=$(node -p "require('./package.json').version")

echo "New version: $NEW_VERSION"

# Update version in theme/theme.json

sed -i '' "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/g" ./theme/theme.json

echo "Version bumped successfully!"

