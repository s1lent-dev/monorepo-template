import baseEslintConfig from "./eslint.config.js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginNext from "@next/eslint-plugin-next";
import globals from "globals";
import { nextRules } from "./rules.js";

/**
 * A shared ESLint configuration for the repository.
 * @type {import("eslint").Linter.Config[]}
*/

const nextEslintConfig = [
    ...baseEslintConfig,
    pluginReact.configs.flat.recommended,
    {
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                parser: tseslint.parser,
                project: true,
                ecmaFeatures: {
                    jsx: true,
                    tsx: true,
                },
            },
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
        },
        rules: nextRules,
    },
    {
        plugins: {
            "@next/next": pluginNext,
        },
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs["core-web-vitals"].rules,
        },
    },
    {
        plugins: {
            "react-hooks": pluginReactHooks,
        },
        settings: { react: { version: "detect" } },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
        }
    },
    {
        ignores: ["dist/**", ".next/**", "node_modules/**"],
    },
]

export default nextEslintConfig;