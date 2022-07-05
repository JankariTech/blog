#!/usr/bin/env sh

BASE_DIR="home/runner/work/blog"
DIST_BRANCH="dist"

pnpm build

mkdir -p "${BASE_DIR}""/temp"
mv docs "${BASE_DIR}""/temp"

git fetch origin ${DIST_BRANCH}
git checkout ${DIST_BRANCH}

rm -rf docs
mv "${BASE_DIR}"/temp/docs .

if [ -n "$(git status --porcelain)" ]; then
  echo "blog.jankaritech.com" > docs/CNAME
  git config user.name "GitHub Actions Bot"
  git config user.email "<>"
  git add .
  git commit -m "Update the build code"
  git push origin ${DIST_BRANCH}
fi

rm -rf "${BASE_DIR}""/temp"
