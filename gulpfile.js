var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')();

var options = require('./config/gulp-options');
var paths = require('./config/paths');

gulp.task('default', ['less', 'lint', 'watch', 'browsersync']);

gulp.task('build', ['less', 'css', 'jslib', 'js']);

gulp.task('watch', function() {
  gulp.watch(paths.less.watch, ['less', 'reloader']);
  gulp.watch(paths.jshint.watch, ['lint', 'reloader']);
  gulp.watch(paths.js.watch, ['js', 'reloader']);
  gulp.watch('*.hbs').on('change', browserSync.reload);
});

gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe($.plumber(options.plumber))
    .pipe($.less())
    .pipe($.rename(paths.less.filename))
    .on('error', options.plumber.errorHandler)
    .pipe($.autoprefixer(options.autoprefixer))
    .pipe($.cssmin())
    .pipe(gulp.dest(paths.less.dest)).on('error', gutil.log);
});

gulp.task('css', function() {
  return gulp.src(paths.css.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.css.filename))
    .pipe($.cssmin())
    .pipe($.rename(paths.css.filename))
    .pipe(gulp.dest(paths.css.dest));
});

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.js.filename))
    .pipe(gulp.dest(paths.js.dest))
    .on('error', gutil.log);
});

gulp.task('jslib', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.js.vendor.filename))
    .pipe($.filesize())
    .pipe($.uglify())
    .pipe(gulp.dest(paths.js.vendor.dest))
    .pipe($.filesize())
    .pipe($.notify('vendor.js created'))
    .on('error', gutil.log);
});

gulp.task('lint', function() {
  gulp.src(paths.jshint.src)
    .pipe($.plumber(options.plumber))
    .pipe($.jshint())
    .pipe($.notify(options.notify.jshint));
});

gulp.task('reloader', ['less', 'js'], function() {
  browserSync.reload();
});

gulp.task('browsersync', function() {
  browserSync.init(options.browserSync);
});