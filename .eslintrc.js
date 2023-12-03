module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["jsx-a11y"],
  extends: ["eslint:recommended", "plugin:jsx-a11y/recommended", "plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: ["error", "never"],
    quotes: ["error", "double"],
  },
}
