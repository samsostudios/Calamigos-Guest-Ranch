// eslint.config.js
import config from '@finsweet/eslint-config';

export default [
  ...config,

  // Allow Node globals and console in dev tooling
  {
    files: ['build.js', 'bin/**/*.{js,ts}'], // support TS-based tools too
    languageOptions: {
      env: {
        node: true,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
];
