import baseEslintConfig from "./eslint.config.js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import { viteRules } from "./rules.js";

/**
 * A shared ESLint configuration for the repository.
 * @type {import("eslint").Linter.Config[]}
*/

const viteEslintConfig = [
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
                ...globals.es2022
            },
        },
        rules: viteRules,
    },
    {
        plugins: {
            "react-hooks": pluginReactHooks,
            "react-refresh": pluginReactRefresh,
        },
        settings: { react: { version: "detect" } },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        },
    }
]

export default viteEslintConfig;
