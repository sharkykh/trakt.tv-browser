import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default {
  input: 'src/trakt.js',
  output: {
    file: 'dist/trakt.js',
    format: 'cjs'
  },
  plugins: [
    replace({
      values: {
        '__DEFAULT_USER_AGENT__': JSON.stringify(`${pkg.name}/${pkg.version} (${pkg.repository.url})`)
      }
    }),
    json(),
    babel({
      babelrc: false,
      presets: [
        ['@babel/preset-env', {
          modules: false
        }]
      ],
      exclude: 'node_modules/**'
    })
  ]
};
