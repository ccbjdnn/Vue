import vue from 'eslint-plugin-vue'
import js from '@eslint/js'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        console: 'readonly',
        setTimeout: 'readonly',
        window: 'readonly',
        document: 'readonly'
      }
    }
  },
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'error'
    }
  }
]