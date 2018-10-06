var gulp  = require('gulp');
var shell = require('gulp-shell');


/**
  Our gulp tasks live in their own files,
  for the sake of clarity.
 */
require('require-dir')('./gulp-tasks');

/*
 Run our static site generator to build the pages
*/
gulp.task('generate', shell.task('npx eleventy'));

gulp.task('generatedev', shell.task('ELEVENTY_ENV=development npx eleventy'));

/*
  compile the assets to the correct destination
*/
gulp.task('assets', gulp.parallel(
  'styles',
));

gulp.task('build', gulp.series(
  'clean-build',
  'assets',
  'generate'
));

gulp.task('builddev', gulp.series(
  'assets',
  'generatedev'
));