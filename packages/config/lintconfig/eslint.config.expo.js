import baseEslintConfig from "./eslint.config.js";
import tseslint from "typescript-eslint";
import eslintConfigExpo from "eslint-config-expo/flat";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import { expoRules } from "./rules.js";

/**
 * A shared ESLint configuration for the repository.
 * @type {import("eslint").Linter.Config[]}
*/

const expoEslintConfig = [
    ...baseEslintConfig,
    eslintConfigExpo,
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
        rules: expoRules,
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
    }
]
export default expoEslintConfig;