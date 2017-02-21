// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import multiEntry from 'rollup-plugin-multi-entry';

// amd, cjs, es, iife, umd
export default {
  entry: __dirname + '/js/*.js',
  dest: __dirname + '/dist/a.js',
  moduleName: 'bar',
  format: 'iife',
  //sourceMap: 'inline',
  plugins: [
    multiEntry(), //多入口
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    replace({
      exclude: 'node_modules/**'
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
