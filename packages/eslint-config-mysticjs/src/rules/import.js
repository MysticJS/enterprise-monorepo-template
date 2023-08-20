/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': ['warn', { maxDepth: 3 }],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    // Allows us to use package exports without ESLint complaining (typescript will still catch bad imports)
    'import/no-unresolved': [2, { ignore: ['^@mysticjs/kit/*'] }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index', 'object'],
        pathGroupsExcludedImportTypes: [],
        pathGroups: [
          {
            pattern: '@mysticjs/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '$*/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '*.{json,graphql}',
            patternOptions: { matchBase: true, nocase: true },
            group: 'object',
            position: 'after',
          },
          {
            pattern: '*.{css,scss,eot,otf,ttf,woff,woff2,svg,jpg,jpeg,png,gif,html}',
            patternOptions: { matchBase: true, nocase: true },
            group: 'object',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': "off"
  },
};
