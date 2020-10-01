/**
 * @type {import("@types/eslint")}
 */
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    plugins: [
        "@typescript-eslint"
    ],
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "react-app"
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "array-bracket-spacing": ["error", "always", {
            "objectsInArrays": false,
            "arraysInArrays": false,
        }],
        "array-element-newline": ["error", "consistent"],
        "comma-style": "error",
        "indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", { "align": "value" }],
        "no-fallthrough": "warn",
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "quotes": ["error", "double"],
        "react-hooks/exhaustive-deps": "warn",
        "semi": ["error", "never"],
        "sort-imports": ["error", { "ignoreDeclarationSort": true }],
        "space-infix-ops": "error",
        "spaced-comment": ["error", "always", {
            "exceptions": ["-", "-", "*"]
        }]
    },
    overrides: [
        {
            files: ["src/**/*.js?(x)"],
            rules: {
                "@typescript-eslint/explicit-module-boundary-types": "off",
            }
        },
        {
            files: ["src/**/*.ts?(x)"],
            rules: {
                // Add overrides here
            },
        },
    ],
};
