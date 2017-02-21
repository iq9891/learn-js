var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var eslint = require('rollup-plugin-eslint');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var replace = require('rollup-plugin-replace');
var uglify = require('rollup-plugin-uglify');
var multiEntry = require('rollup-plugin-multi-entry');

var config = {
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

rollup.rollup(config).then(function(bundle,name){
  let code = bundle.generate(config).code
  console.log(bundle,bundle.generate(config));
});
