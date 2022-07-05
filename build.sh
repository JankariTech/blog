#!/usr/bin/env sh

REPO_DIR="/home/runner/work/blog/blog"
DIST_BRANCH="dist"

pnpm build

mv docs /home/runner/work/blog/temp -r

git chekout $DIST_BRANCH

rm -rf docs
mv /home/runner/work/blog/temp/docs . -r

if [ -n "$(git status --porcelain)" ]; then
  git config user.name "GitHub Actions Bot"
  git config user.email "<>"
  git add .
  git commit -m "Update the build code"
  git push origin $DIST_BRANCH
fi
