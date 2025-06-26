// Base ESLint rules for all JavaScript environments
// https://eslint.org/docs/latest/rules/

/** @type {import('eslint').Linter.RulesRecord} */
const coreRules = {
  'for-direction': 'error',
  'no-async-promise-executor': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-constant-binary-expression': 'error',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-else-if': 'error',
  'no-duplicate-case': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-fallthrough': 'error',
  'no-global-assign': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-octal': 'error',
  'no-regex-spaces': 'error',
  'no-self-assign': 'error',
  'no-shadow': ['warn', { ignoreFunctionTypeParameterNameValueShadow: true, hoist: "functions-and-types", allow: ['error', 'warn', 'err', 'props', 'className', 'params', 'event', 'e'] }],
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  'no-var': 'error',
  'no-with': 'error',
  'prefer-const': 'error',
  'require-yield': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
  camelcase: ['warn', {  properties: 'never', ignoreDestructuring: true }],
  'array-callback-return': 'error',
  'prefer-arrow-callback': 'warn',
  'prefer-destructuring': 'warn',
  'prefer-spread': 'warn',
  'constructor-super': 'error',
  eqeqeq: 'warn',
  // 'no-nested-ternary': 'warn',
  // 'no-magic-numbers': [
  //   'warn', 
  //   { ignore: [0, 1, 2, 5, 10, 50, 100, 1000, 5000, 10000] }
  // ],
  curly: 'warn',
  'default-case': 'warn',
  'default-case-last': 'warn',
  'default-param-last': 'warn',
};

/**
 * TypeScript-specific rules (extends core rules)
 * https://typescript-eslint.io/rules/
 */
/** @type {import('eslint').Linter.RulesRecord} */
const typescriptRules = {
  ...coreRules,
  '@typescript-eslint/array-type': [
    'error', 
    { default: 'generic', readonly: 'generic' }
  ],
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': false,
      'ts-ignore': 'allow-with-description',
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error', 
    { prefer: 'type-imports' }
  ],
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'typeParameter',
      format: ['PascalCase'],
      custom: {
        regex: '^(T|T[A-Z][A-Za-z]+)$',
        match: true,
      },
    },
  ],
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-inferrable-types': [
    'error', 
    { ignoreParameters: true }
  ],
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unsafe-function-type': 'error',
  '@typescript-eslint/no-wrapper-object-types': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/require-await': 'warn',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-explicit-any': 'warn',
};

/**
 * Modern ESM and import rules (extends core rules)
 * https://github.com/import-js/eslint-plugin-import
 */
/** @type {import('eslint').Linter.RulesRecord} */
const moduleRules = {
  ...coreRules,
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-commonjs': 'error',
  'import/no-amd': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-import-module-exports': 'error',
  'import/unambiguous': 'error',
  'import/no-cycle': 'error',
  'import/no-duplicates': ['error', { considerQueryString: true }],
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type',
      ],
    },
  ],
  'sort-imports': [
    'error',
    {
      ignoreDeclarationSort: true,
      ignoreCase: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],
  'no-restricted-syntax': [
    'error',
    {
      selector: 'CallExpression[callee.name="require"]',
      message: 'Use ES module imports instead of require()',
    },
    {
      selector: 'MemberExpression[object.name="module"][property.name="exports"]',
      message: 'Use ES module exports instead of module.exports',
    },
  ],
};

/**
 * Stylistic consistency rules
 * https://eslint.style/rules
 */
/** @type {import('eslint').Linter.RulesRecord} */
const stylisticRules = {
  '@stylistic/spaced-comment': 'error',
  '@stylistic/comma-dangle': ['warn', 'always-multiline'],
  '@stylistic/indent': ['warn', 4],
  '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
  '@stylistic/semi': ['warn', 'always'],
  '@stylistic/lines-between-class-members': [
    'warn',
    'always',
    { exceptAfterSingleLine: true },
  ],
};

/**
 * Base React rules (extends TypeScript and module rules)
 * https://github.com/jsx-eslint/eslint-plugin-react
 */
/** @type {import('eslint').Linter.RulesRecord} */
const reactRules = {
  ...typescriptRules,
  ...moduleRules,
  ...stylisticRules,
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'react/jsx-filename-extension': [
    'error', 
    { extensions: ['.tsx'] }
  ],
  'react/self-closing-comp': 'error',
  'react/no-unknown-property': [
    'error', 
    { ignore: ['css'] }
  ],
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
};

/**
 * Vite-specific rules (extends React rules)
 */
/** @type {import('eslint').Linter.RulesRecord} */
const viteRules = {
  ...reactRules,
  'react-refresh/only-export-components': [
    'warn', 
    { allowConstantExport: true }
  ],
  'import/no-nodejs-modules': 'off',
};

/**
 * Next.js-specific rules (extends React rules)
 * https://nextjs.org/docs/app/building-your-application/configuring/eslint
 */
/** @type {import('eslint').Linter.RulesRecord} */
const nextRules = {
  ...reactRules,
  'react/jsx-key': 'warn',
  'react/no-unescaped-entities': 'warn',
  'react/jsx-no-target-blank': 'warn',
  'react/jsx-pascal-case': 'warn',
  'react/no-array-index-key': 'warn',
  'react/no-danger': 'warn',
  'react/no-deprecated': 'warn',
  '@next/next/no-html-link-for-pages': 'error',
  '@next/next/no-sync-scripts': 'error',
  '@next/next/no-img-element': 'warn',
  '@next/next/no-css-tags': 'warn',
  '@next/next/no-before-interactive-script-outside-document': 'error',
  '@next/next/no-unwanted-polyfillio': 'warn',
};

/**
 * Expo/React Native rules (extends React rules)
 * https://github.com/Intellicode/eslint-plugin-react-native
 */
/** @type {import('eslint').Linter.RulesRecord} */
const expoRules = {
  ...reactRules,
  'react-native/no-inline-styles': 'warn',
  'react-native/no-color-literals': 'warn',
  'react-native/no-single-element-style-arrays': 'error',
  'react/no-unsafe': ['error', { checkAliases: true }],
  'react-native/no-raw-text': [
    'error',
    { skip: ['Heading', 'Text', 'Paragraph', 'Button'] },
  ],
  'import/no-restricted-paths': [
    'error',
    {
      zones: [
        {
          target: './app',
          from: './src/web',
          message: 'Web code should not be imported in native app',
        },
        {
          target: './src/web',
          from: './app',
          message: 'Native app code should not be imported in web',
        },
      ],
    },
  ],
  'import/no-unresolved': [
    'error', 
    { ignore: ['expo-*', '@expo/*'] }
  ],
};

/**
 * Node.js-specific rules
 * https://github.com/mysticatea/eslint-plugin-node
 */
/** @type {import('eslint').Linter.RulesRecord} */
const nodeRules = {
  ...coreRules,
  ...moduleRules,
  ...stylisticRules,
  'node/prefer-node-protocol': 'error',
  'import/no-nodejs-modules': 'off',
};

export {
  coreRules,
  typescriptRules,
  moduleRules,
  stylisticRules,
  reactRules,
  viteRules,
  nextRules,
  expoRules,
  nodeRules,
};