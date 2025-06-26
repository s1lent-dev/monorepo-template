declare module '@nexync/lintconfig/node' {
    import { Linter } from 'eslint';
    const nodeEslintConfig: Linter.Config[];
    export default nodeEslintConfig;
}

declare module '@nexync/lintconfig/react' {
    import { Linter } from 'eslint';
    const reactEslintConfig: Linter.Config[];
    export default reactEslintConfig;
}

declare module '@nexync/lintconfig/next' {
    import { Linter } from 'eslint';
    const nextEslintConfig: Linter.Config[];
    export default nextEslintConfig;
}

declare module '@nexync/lintconfig/expo' {
    import { Linter } from 'eslint';
    const expoEslintConfig: Linter.Config[];
    export default expoEslintConfig;
}

declare module '@nexync/lintconfig/vite' {
    import { Linter } from 'eslint';
    const viteEslintConfig: Linter.Config[];
    export default viteEslintConfig;
}

declare module '@nexync/lintconfig/prettier' {
    import { Config } from 'prettier';
    const prettierConfig: Config;
    export default prettierConfig;
}

