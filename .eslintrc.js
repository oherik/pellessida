// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["airbnb-base", "plugin:vue/recommended"],
  rules: {
    quotes: ["error", "double"],
    "vue/html-self-closing": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "linebreak-style": 0,
    "import/extensions": 0
  },
};
