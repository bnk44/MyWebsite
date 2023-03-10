// eslint-disable-next-line
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "spaced-comment": "warn",
    "no-duplicate-imports": "warn",
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        arrowParens: "always",
        singleQuote: false,
        endOfLine: "auto",
        singleAttributePerLine: true,
      },
    ],
  },
};
