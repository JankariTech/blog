module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-scss",
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue"
  ],
  overrides: [{
    files: ["**/*.scss"],
    customSyntax: "postcss-scss"
  }],
  ignoreFiles: [
    "**/*.js",
    "**/*.md",
    "**/*.png",
    "**/*.jpg",
    "**/*.gif"
  ]
}
