import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from "eslint-plugin-turbo";
import importPlugin from "eslint-plugin-import-x";
import stylisticPlugin from '@stylistic/eslint-plugin'

/**
 * A shared ESLint configuration for the repository.
 * @type {import("eslint").Linter.Config[]}
*/

const ignoreFiles = [
    "**/dist/**",
    "**/node_modules/**",
    "**/coverage/**",
    "**/.next/**",
    "**/.turbo/**",
    "**/build/**",
    "**/out/**",
    "**/public/**",
    "**/vendor/**",
    "*.config.js",
    "*.config.mjs",
    "*.config.ts",
    "**/env.d.ts",
]
const baseEslintConfig = [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        plugins: { turbo: turboPlugin },
        rules: { "turbo/no-undeclared-env-vars": "warn" }
    },
    {
        plugins: { import: importPlugin },
    },
    {
        plugins: {
            "@stylistic": stylisticPlugin,
        },
    },
    {
        ignores: ignoreFiles,
    }
]

export default baseEslintConfig;
