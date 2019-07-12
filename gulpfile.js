var gulp = require('gulp');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var teddy = require('gulp-teddy').settings({
  setTemplateRoot: 'src/templates/',
  compileAtEveryRender: true
});
// var htmlmin = require('gulp-htmlmin');
var gulp = require('gulp');
var sass = require('gulp-sass');
    sass.compiler = require('node-sass');

gulp.task('clean', function () {
  console.log('Clean temporal files has started');

  return gulp
    .src('./.temp', { allowEmpty: true })
    .pipe(clean());
});

gulp.task('build:html', function () {
  console.log('Build HTML has started');

  return gulp
    .src([
      './src/**/*.html'
    ])
    .pipe(teddy.compile())
    .pipe(gulp.dest('./.temp'))
    .pipe(reload({ stream: true }));
});

gulp.task('build:html:prod', function () {
  console.log('Build HTML has started');

  return gulp
    .src([
      './src/*.html',
      '!.src/templates'
    ])
    .pipe(teddy.compile())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:sass', function () {
  console.log('Build sass files has started');

  return gulp
    .src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./.temp/css'));
});

gulp.task('build:sass:prod', function () {
  console.log('Build sass files has started');

  return gulp
    .src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build:files', function () {
  console.log('Build files has started');

  return gulp
    .src([
      './src/*',
      '!./src/templates',
      '!./src/*.html',
      '!./src/**/*.scss'
    ])
    .pipe(gulp.dest('./.temp'))
    .pipe(reload({ stream: true }));
});

gulp.task('build:files:prod', function () {
  console.log('Build files has started');

  return gulp
    .src([
      './src/*',
      '!./src/templates',
      '!./src/*.html',
      '!./src/**/*.scss'
    ])
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:dev', gulp.series(['clean', 'build:html', 'build:sass', 'build:files']));

gulp.task('watch', gulp.series(['build:dev'], function(done) {
  gulp.watch('./src/**/*', gulp.series(['build:dev']));
  done();
}));

gulp.task('build:prod', gulp.series('build:html:prod', 'build:sass:prod', 'build:files:prod'));

gulp.task('default', gulp.series(['watch']));

gulp.task('serve', gulp.series(['watch'], function () {
  console.log("Serve has started");

  browserSync({
    server: {
      baseDir: './.temp'
    }
  });
}));