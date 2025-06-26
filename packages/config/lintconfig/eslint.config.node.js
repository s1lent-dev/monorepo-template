import baseEslintConfig from "./eslint.config.js";
import tseslint from "typescript-eslint";
import globals from "globals";
import nodePlugin from "eslint-plugin-n";
import { nodeRules } from "./rules.js";

/**
 * A shared ESLint configuration for the repository.
 * @type {import("eslint").Linter.Config[]}
*/

const nodeEslintConfig = [
    ...baseEslintConfig,
    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                parser: tseslint.parser,
                project: true,
                ecmaFeatures: {
                    globalReturn: true,
                    ts: true,
                },
            },
            globals: {
                ...globals.node,
                ...globals.es2022
            },
        },
        rules: nodeRules,
    },
    {
        plugins: {
            node: nodePlugin,
        }
    },
    {
        files: ["src/**/*.ts", "tests/**/*.test.ts"],
    }
]

export default nodeEslintConfig;