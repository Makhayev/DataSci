module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:typescript-sort-keys/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "import",
    "typescript-sort-keys",
  ],
  rules: {
    "id-length": ["error", { properties: "never" }],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": 0,
    "react/prop-types": "off",
    "react/default-props-match-prop-types": "off",
    // Require using arrow functions for callbacks.
    "prefer-arrow-callback": "error",
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        fixToUnknown: true,
      },
    ],
    "@typescript-eslint/no-unused-expressions": "off",
    quotes: 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "_",
      },
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    // Disallows member access on any typed variables.
    "@typescript-eslint/no-unsafe-member-access": "off",
    // Prefer a default export if module exports a single name.
    "@typescript-eslint/consistent-type-imports": "warn",
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react*",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    // Ensure consistent use of file extension within the import path.
    "import/extensions": [
      "warn",
      "never",
      {
        pattern: {
          json: "always",
          css: "always",
          scss: "always",
          sass: "always",
          png: "always",
          svg: "always",
        },
      },
    ],
    // Disallow Returning Nothing.
    // 'functional/no-return-void': 'off',
    // Using expressions to cause side effects not allowed.
    // 'functional/no-expression-statement': 'off',
    // Enforce Functional Parameters.
    // 'functional/functional-parameters': 'off',
    // 'functional/no-mixed-type': 'off',
    // Disallow mutating objects and arrays.
    "arrow-body-style": "warn",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
    "no-void": "off",
    "@typescript-eslint/comma-dangle": 0,
    "react/jsx-newline": 0,
    "react/jsx-no-literals": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-handler-names": 0,
    "react/jsx-max-props-per-line": 0,
    "import/no-cycle": 0,
    "@typescript-eslint/indent": 0,
    "react/jsx-no-bind": 0,
    "react/react-in-jsx-scope": 0,
    "functional/no-class": 0,
    "@typescript-eslint/no-extraneous-class": 0,
    "import/no-unassigned-import": 0,
    "functional/prefer-readonly-type": 0,
    "no-undefined": 0,
    camelcase: [
      1,
      {
        properties: "never",
        ignoreImports: true,
      },
    ],
  },
  ignorePatterns: ["**.d.ts"],
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
};
