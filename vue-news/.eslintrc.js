module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    // "vue/html-quotes": ["error", "single"],
		"no-unused-vars": "warn",
    "no-console": "off",
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
