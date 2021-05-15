import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';

export default {
  input: 'src/trakt.js',
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'default',
  },
  external: [
    'ky',
    'randombytes',
    'sanitizer'
  ],
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        '__DEFAULT_USER_AGENT__': JSON.stringify(`${pkg.name}/${pkg.version} (${pkg.repository.url})`)
      }
    }),
    json(),
    babel({
      babelrc: false,
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env', {
          modules: 'auto'
        }]
      ],
      exclude: 'node_modules/**'
    }),
  ]
};
