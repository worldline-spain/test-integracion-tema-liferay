var browserSync = require('browser-sync').create();
var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var file = require('gulp-file');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');

var package = require('./package.json');
var MODULE_ID = package.name; // 'test-integracion-tema'

gulp.task('compile', function () {
  gulp.src('/src/main/resources/META-INF/resources/js/polyfills.ts')
    .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
    .pipe(file('index.html', `
      <html>
        <head>
          <base href="/">
          <link rel="stylesheet" type="text/css" href="app.css" />
        </head>
        <body>
          <demo-app></demo-app>
          <script src="polyfills.js"></script>
          <script src="app.js"></script>
        </body>
      </html>
    `))
    .pipe(gulp.dest('www/'));
});


// Build: generate sources
gulp.task('build', ['scripts', 'assets'], function () {});
gulp.task('scripts', ['compile'], function () {});
gulp.task('assets', function () {
  gulp.src('src/main/resources/META-INF/resources/js/**/*.html')
    .pipe(gulp.dest('www/'));
});

// Default task: build
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

// Clean task
gulp.task('clean', function () {
  return del(['www']);
});

// Watch for file changes and build them
gulp.task('watch', function () {
  gulp.watch('src/**/*.{html,ts}', ['build'])
  gulp.watch("www/**/*.{css,html,js}").on('change', browserSync.reload);
});

// Serve
var PORTLET_RELATIVE_URL = new RegExp(`/o/${MODULE_ID}/js`, 'ig');
gulp.task('serve', ['default', 'watch'], function () {
  browserSync.init({
    server: ['./node_modules', './www'],
    middleware: function (req, res, next) {
      // Handle portlet-relative URLs served from static content
      if (PORTLET_RELATIVE_URL.test(req.url)) {
        req.url = req.url.replace(PORTLET_RELATIVE_URL, '');
      }
      next();
    }
  });
});
