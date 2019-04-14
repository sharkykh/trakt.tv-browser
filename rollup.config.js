import stripCode from 'rollup-plugin-strip-code';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/trakt.js',
  output: {
    file: 'dist/trakt.js',
    format: 'cjs'
  },
  plugins: [
    stripCode({
      start_comment: 'START.ROLLUP_REMOVE',
      end_comment: 'END.ROLLUP_REMOVE'
    }),
    replace({
      delimiters: [ '${', '}' ],
      values: {
        'pkg.name': pkg.name,
        'pkg.version': pkg.version,
        'pkg.repository.url': pkg.repository.url,
      }
    }),
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
