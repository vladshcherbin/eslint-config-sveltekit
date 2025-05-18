import config from '@shcherbin/eslint-config'
import { configs } from 'eslint-plugin-svelte'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import { join } from 'node:path'
import { cwd } from 'node:process'
import { parser } from 'typescript-eslint'

export default defineConfig([
  {
    extends: [
      config,
      configs['flat/recommended']
    ],
    files: ['**/*.js', '**/*.svelte', '**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
      'import-x/no-unresolved': ['error', { ignore: ['^\\$(app|env)'] }]
    },
    settings: {
      'import-x/core-modules': ['$app', '$env']
    }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts'],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser,
        projectService: true,
        svelteConfig: join(cwd(), 'svelte.config.js')
      }
    }
  }
])
