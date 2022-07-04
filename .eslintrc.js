module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      "standard",
      "plugin:vue/essential"
    ],
    parserOptions: {
      ecmaVersion: "latest"
    },
    plugins: ["vue"],
    rules: {
      indent: ["error", 2],
      "no-console": ["error", { allow: ["debug", "error"] }],
      "dot-notation": 0,
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "never"],
      "vue/html-indent": ["error", 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: []
      }],
      "vue/script-indent": ["error", 2, {
        baseIndent: 0
      }],
      "vue/max-attributes-per-line": ["error", {
        singleline: { max: 4 },
        multiline: { max: 4 }
      }]
    }
  }
  