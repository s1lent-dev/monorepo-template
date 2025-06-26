/**
 * A shared Prettier configuration for the repository.
 * @type {import("prettier").Config}
*/

const prettierConfig = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: "always",
    endOfLine: "lf",
    proseWrap: "preserve",
    htmlWhitespaceSensitivity: "css",
}

export default prettierConfig;