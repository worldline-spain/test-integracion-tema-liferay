var browserSync = require('browser-sync').create();
var del = require('del');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var file = require('gulp-file');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

var package = require('./package.json');
var MODULE_ID = package.name; // 'test-integracion-tema'

gulp.task('compile', function () {
  var tsProject = ts.createProject('tsconfig.json', {
    outFile: 'app.bundle.js'
  });
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(browserify({
      insertGlobals: true,
      debug: false,
      transform: ['deamdify'],
      paths: ['node_modules'],
    }))
    .pipe(file('index.html', `
      <html>
        <head></head>
        <body>
          HOLA
          <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js"></script>
          <!-- <script src="vendor.bundle.js"></script> -->
          <script src="app.bundle.js"></script>

          <script>
            // console.log('Manually bootstrapping AppComponent');
            require(['main'], function (main) {
              console.log('Main');
              main('_dummyId');
            });
          </script>
        </body>
      </html>
    `))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('www/'));
});

gulp.task('browserify', function () {
  gulp.src([
      'www/app.bundle.js'
      // 'www/**/*.js',
      // 'node_modules/**/*.js',
      // '!node_modules/@types'
    ])
    .pipe(browserify({
      insertGlobals: true,
      debug: false,
      paths: ['node_modules'],
      // ignore: ['node_modules/@types', 'build']
    }))
    .pipe(concat('vendor.bundle.js'))
    .pipe(gulp.dest('www/'));
});

// Build: generate sources
gulp.task('build', ['scripts', 'assets'], function () {});
gulp.task('scripts', ['compile'], function () {
  // gulp.start('browserify');
});
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
