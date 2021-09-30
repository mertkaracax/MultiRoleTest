module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@env", "react-native-dotenv"]],
        extensions: [".ts", ".js", ".jsx", ".json"]
      }
    }
  },
  plugins: ["react", "react-native"],
  rules: {
    "no-use-before-define": "off",
    "prettier/prettier": ["warn", { endOfLine: "auto" }, { usePrettierrc: true }], // Use our .prettierrc file as source
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "no-unused-vars": "warn",
    "no-console": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off"
  }
};
