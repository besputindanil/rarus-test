module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'unused-imports', 'prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'no-empty': 'off',
    'object-shorthand': 'off',
    'no-useless-escape': 'off',
  },
  settings: {
    'import/extensions': ['.js'],
  },
};
