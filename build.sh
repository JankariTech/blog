#!/usr/bin/env sh

git status

if git diff master --name-only | grep 'src' > /dev/null
then
    echo "Build starting..."
else
    echo "No changes detected, skipping build..."
    exit 0
fi

BASE_DIR="home/runner/work/blog"
DIST_BRANCH="dist"

pnpm build

mkdir -p "${BASE_DIR}""/temp"
mv docs "${BASE_DIR}""/temp"
mkdir -p "${BASE_DIR}""/temp/docs/src"
cp -r src/assets "${BASE_DIR}""/temp/docs/src/assets"
rm -rf "${BASE_DIR}""/temp/docs/src/assets/**/*.md"

git fetch origin ${DIST_BRANCH}
git checkout ${DIST_BRANCH}

rm -rf docs
mv "${BASE_DIR}"/temp/docs .

if [ -n "$(git status --porcelain)" ]; then
  echo "blog.jankaritech.com" > docs/CNAME
  git add .
  git -c user.name="JT Action Bot" -c user.email="info@jankaritech.com" commit -m "Update the build code"
  git push origin ${DIST_BRANCH}
fi

rm -rf "${BASE_DIR}""/temp"
