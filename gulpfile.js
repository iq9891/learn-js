var gulp = require('gulp'),
    rollup = require('gulp-rollup'),
    multiEntry = require('rollup-plugin-multi-entry');
var caches = {};
gulp.task('default', function() {
  gulp.src('./js/**/*.js')
    .on('bundle', function(bundle, name) {
      console.log(name);

      //   bundle.write({
      //     // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
      //     format: 'umd',
      //     moduleName: 'dqSystem',
      //     sourceMap: true,
      //     dest: './dist' + name
      // });

    });

});
