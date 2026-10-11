import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // `motion` is used only as <motion.div> in JSX, which core no-unused-vars cannot see.
      'no-unused-vars': ['error', { varsIgnorePattern: '^([A-Z_]|motion$)' }],
    },
  },
  {
    // Shared design-token / helper modules export constants and components together.
    // react-refresh only uses this as a dev hot-reload hint; it does not affect production behaviour.
    files: ['src/theme.jsx', 'src/components/theme_dropdown.jsx', 'src/components/BookDemoButton.jsx'],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
])
