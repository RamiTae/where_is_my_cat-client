module.exports = {
  root: true,
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "prettier/react",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: module,
    allowImportExportEverywhere: true,
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "class-methods-use-this": "off",
    "guard-for-in": "off",
    "import/extensions": [
      "error",
      {
        jpg: "always",
        json: "always",
        otf: "always",
        png: "always",
        svg: "always",
        ttf: "always",
        w: "always",
        woff: "always",
      },
    ],
    "import/no-unresolved": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForOfStatement",
        message:
          "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "react/default-props-match-prop-types": "off",
    "react/forbid-prop-types": ["error", { forbid: ["any"] }],
    "react/forbid-foreign-prop-types": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "no-use-before-define": "off",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
