#!/usr/bin/env sh
set -e

npm run build

cd dist

git init 
git add -A
git commit -m "Deploy Dashboard"
git push -f git@github.com:Surendra6/Dashboard.git master:gh-pages

cd -