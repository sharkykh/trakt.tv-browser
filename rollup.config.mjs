import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

import { readFileSync } from 'node:fs';

// Use import.meta.url to make the path relative to the current source
// file instead of process.cwd(). For more information:
// https://nodejs.org/docs/latest-v16.x/api/esm.html#importmetaurl
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

export default {
  input: 'src/trakt.js',
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'default',
    interop: 'auto',
  },
  external: [
    'ky',
    'randombytes',
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
