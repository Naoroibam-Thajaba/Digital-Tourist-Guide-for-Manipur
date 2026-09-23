// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// Import the core ESLint JS config helper
import js from '@eslint/js'
// Browser/global environment identifiers (used to populate `languageOptions.globals`)
import globals from 'globals'
// Plugin for enforcing React Hooks rules (e.g. exhaustive-deps)
import reactHooks from 'eslint-plugin-react-hooks'
// Plugin that integrates React Refresh / Vite fast-refresh specific rules
import reactRefresh from 'eslint-plugin-react-refresh'
// TypeScript ESLint plugin/config helper (project's chosen alias for @typescript-eslint)
import tseslint from 'typescript-eslint'
// Helpers from ESLint for creating a typed configuration and ignoring globs
import {defineConfig, globalIgnores} from 'eslint/config'

/**
 * Export an ESLint configuration using `defineConfig` for type-aware IDE support.
 *
 * Structure:
 * - globalIgnores(['dist']) adds ignore patterns at the top level.
 * - The array contains the global ignore wrapper and the actual config object for TS files.
 *
 * The config applies to TypeScript files (`*.ts`, `*.tsx`) and composes:
 * - the recommended base JS rules
 * - TypeScript specific recommended rules
 * - React Hooks plugin recommended flat rules
 * - React Refresh rules for Vite dev experience
 *
 * Language options set ECMAScript version and provide browser globals for proper linting.
 */
export default defineConfig([// Glob patterns to ignore across the whole config (prevents linting build artifacts)
	globalIgnores(['dist']), {
		// Target files for this specific config block (TypeScript + TSX files)
		files: ['**/*.{ts,tsx}'], // Extend rule sets from imported configs/plugins to compose a recommended baseline
		extends: [
			js.configs.recommended,                     // ESLint's base recommended rules for JS
			tseslint.configs.recommended,               // TypeScript-specific recommended rules
			reactHooks.configs.flat.recommended,        // React Hooks recommended rules (flat config)
			reactRefresh.configs.vite,                  // Rules to support Vite + React Refresh
		], languageOptions: {
			// ECMAScript language version used for parsing (features available up to 2020)
			ecmaVersion: 2020, // Provide predefined global variables for the browser environment (e.g. `window`, `document`)
			globals: globals.browser,
		},
	},])
