// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, {
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'max-len': ['error', { code: 100 }],
        'comma-dangle': ['error', 'always-multiline'],
        'prefer-destructuring': ['error'],
    },
    languageOptions: {
        globals: {
            console: 'readonly',
        },
    },
});
