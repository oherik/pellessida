module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "airbnb-base",
    "plugin:nuxt/recommended",
  ],
  plugins: [
  ],
  rules: {
    quotes: ["error", "double"],
    "vue/html-self-closing": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "linebreak-style": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
  },
  settings: {
    "import/core-modules": [
      "vue",
    ],
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".vue"],
      },
    },
  },
};
