module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'tailwind.config.js', 'src/**/*.test.tsx'],
  plugins: ['react-refresh', "jsx-a11y", 'react', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/function-component-definition": ["error", { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }],
    'comma-dangle': 'off',
    "@typescript-eslint/comma-dangle": "off"
  },
}
