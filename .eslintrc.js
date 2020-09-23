// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
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
  settings: {
    "import/resolver": {
      node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
