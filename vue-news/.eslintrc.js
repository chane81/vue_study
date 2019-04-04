module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
		"no-unused-vars": "warn",
    "no-console": "off",
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
