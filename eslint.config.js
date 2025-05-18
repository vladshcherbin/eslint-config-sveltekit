import config from '@shcherbin/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig({
  extends: [
    config
  ],
  languageOptions: {
    parserOptions: {
      projectService: true
    }
  }
})
