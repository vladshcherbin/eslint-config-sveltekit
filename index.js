module.exports = {
  extends: [
    'airbnb-base'
  ],
  rules: {
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    semi: ['error', 'never'],
    'sort-imports': ['error', { ignoreDeclarationSort: true }]
  },
  plugins: [
    'sort-destructure-keys'
  ],
  overrides: [
    {
      files: ['*.svelte', '*.ts'],
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      rules: {
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        '@typescript-eslint/semi': ['error', 'never'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc' },
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              { pattern: '$app/**', group: 'builtin', position: 'before' },
              { pattern: '$env/**', group: 'builtin', position: 'before' },
              { pattern: 'svelte/**', group: 'builtin', position: 'before' },
              { pattern: 'svelte', group: 'builtin', position: 'before' }
            ],
            pathGroupsExcludedImportTypes: ['@urql/svelte']
          }
        ]
      },
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    {
      files: ['*.svelte'],
      rules: {
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'import/extensions': 'off',
        'import/first': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-multiple-empty-lines': 'off'
      },
      plugins: [
        'svelte3'
      ],
      settings: {
        'svelte3/typescript': true
      },
      processor: 'svelte3/svelte3',
      parserOptions: {
        extraFileExtensions: ['.svelte']
      }
    }
  ]
}