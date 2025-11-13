import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

const INTERNAL_ALIAS_REGEX = '^(@|src)/';
const IMPORT_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', 'css', 'scss'];

const importOrderRules = {
    'import/named': 'error',
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/no-extraneous-dependencies': [
        'error',
        {
            optionalDependencies: false,
            peerDependencies: false,
            devDependencies: [
                '**/*.{test,spec}.{js,jsx,ts,tsx,css,scss}',
                'src/tests/**',
                '**/jest.setup.{js,ts}',
                '**/{vite,webpack,rollup,esbuild,babel}.config.{js,cjs,mjs,ts}',
                '**/{.eslintrc,.eslintrc.*}.?(js|cjs|mjs|ts)',
                '**/eslint.config.{js,cjs,mjs,ts}',
                '**/scripts/**',
            ],
        },
    ],
    'import/extensions': [
        'off',
        'ignorePackages',
        {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            css: 'never',
            scss: 'never',
        },
    ],
    'import/order': [
        'error',
        {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
            pathGroups: [
                // React core first
                {
                    pattern: '{react,react-dom,react-router,react-router-dom,react-redux/**,react-*}',
                    group: 'external',
                    position: 'before',
                },

                // Internal shared utils/services
                {
                    pattern: '{@/shared/**,@/utils/**,@/helpers/**,@/services/**}',
                    group: 'internal',
                    position: 'after',
                },

                // Hooks & store
                { pattern: '{@/hooks/**,@/store/**}', group: 'internal', position: 'after' },

                // MUI
                { pattern: '@mui/**', group: 'external', position: 'after' },

                // Components & pages
                { pattern: '@/components/**', group: 'internal', position: 'after' },
                { pattern: '@/features/**', group: 'internal', position: 'after' },

                // Assets
                { pattern: '@/assets/**', group: 'internal', position: 'after' },

                // Relative imports
                { pattern: '../**', group: 'parent', position: 'after' },
                { pattern: './**', group: 'sibling', position: 'after' },

                // SCSS / CSS
                { pattern: '*.s?css', group: 'unknown', position: 'after' },
                // Styles
                { pattern: '@/styles/**', group: 'internal', position: 'after' },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            warnOnUnassignedImports: true,
        },
    ],
};

export default [
    {
        ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'build/**'],
    },
    // Root/config files
    {
        files: [
            'eslint.config.{js,cjs,mjs,ts}',
            '*.{config,conf}.{js,cjs,mjs,ts}', // vite.config.js, webpack.config.js...
            'jest.setup.{js,ts}',
            'babel.config.cjs',
            'src/config.js',
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.node, ...globals.es2020 },
        },
        plugins: {
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...importOrderRules,
            'import/no-unresolved': 'off',
            ...eslintConfigPrettier.rules,
            'import/no-extraneous-dependencies': 'off',
        },
        settings: {
            'import/internal-regex': INTERNAL_ALIAS_REGEX,
            'import/resolver': {
                alias: {
                    map: [['@', './src']],
                    extensions: IMPORT_EXTENSIONS,
                },
                node: {
                    extensions: IMPORT_EXTENSIONS,
                    moduleDirectory: ['node_modules', 'src'],
                },
            },
        },
    },
    // JS
    {
        files: ['src/**/*.{js,jsx}'],
        ignores: ['src/tests/**', 'src/**/*.test.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: { ...globals.browser, ...globals.es2020 },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            ...importOrderRules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/prop-types': 'off',
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
        settings: {
            react: { version: '18.2' },
            'import/internal-regex': INTERNAL_ALIAS_REGEX,
            'import/resolver': {
                alias: {
                    map: [['@', './src']],
                    extensions: IMPORT_EXTENSIONS,
                },
                node: {
                    extensions: IMPORT_EXTENSIONS,
                    moduleDirectory: ['node_modules', 'src'],
                },
            },
        },
    },

    // Root/config files
    {
        files: ['*.{js,cjs,mjs}', 'jest.setup.js', 'babel.config.cjs', 'vite.config.js', 'src/config.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.node, ...globals.es2020 },
        },
        plugins: {
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...importOrderRules,
        },
        settings: {
            'import/internal-regex': INTERNAL_ALIAS_REGEX,
            'import/resolver': {
                alias: {
                    map: [['@', './src']],
                    extensions: IMPORT_EXTENSIONS,
                },
                node: {
                    extensions: IMPORT_EXTENSIONS,
                    moduleDirectory: ['node_modules', 'src'],
                },
            },
        },
    },

    // __mocks__
    {
        files: ['__mocks__/**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.node, ...globals.es2020, ...globals.jest },
        },
        plugins: {
            jest,
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...jest.configs.recommended.rules,
            ...importOrderRules,
        },
        settings: {
            'import/internal-regex': INTERNAL_ALIAS_REGEX,
            'import/resolver': {
                alias: {
                    map: [['@', './src']],
                    extensions: IMPORT_EXTENSIONS,
                },
                node: {
                    extensions: IMPORT_EXTENSIONS,
                    moduleDirectory: ['node_modules', 'src'],
                },
            },
        },
    },

    // JS tests
    {
        files: ['src/tests/**/*.{js,jsx}', 'src/**/*.test.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: {
                ...globals.browser,
                ...globals.es2020,
                ...globals.jest,
                require: 'readonly',
                global: 'readonly',
                process: 'readonly',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            jest,
            import: importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...jest.configs.recommended.rules,
            ...importOrderRules,
            'react/prop-types': 'off',
            'jest/no-commented-out-tests': 'off',
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
        settings: {
            react: { version: '18.2' },
            'import/internal-regex': INTERNAL_ALIAS_REGEX,
            'import/resolver': {
                alias: {
                    map: [['@', './src']],
                    extensions: IMPORT_EXTENSIONS,
                },
                node: {
                    extensions: IMPORT_EXTENSIONS,
                    moduleDirectory: ['node_modules', 'src'],
                },
            },
        },
    },
];
