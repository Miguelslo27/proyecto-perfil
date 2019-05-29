var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var teddy = require('gulp-teddy').settings({
  setTemplateRoot: 'src/templates/'
});;

gulp.task('build:html', function () {
  console.log('Build HTML has started');

  return gulp
    .src('./src/*.html')
    .pipe(teddy.compile())
    .pipe(gulp.dest('./.temp'))
    .pipe(reload({ stream: true }));
});

gulp.task('build:files', function () {
  console.log('Build files has started');

  return gulp
    .src([
      './src/*',
      '!./src/*.html'
    ])
    .pipe(gulp.dest('./.temp'))
    .pipe(reload({ stream: true }));
});

gulp.task('build:dev', gulp.series(['build:html', 'build:files']));

gulp.task('watch', gulp.series(['build:dev'], function(done) {
  gulp.watch('./src/**/*', gulp.series(['build:dev']));
  done();
}));

gulp.task('serve', gulp.series(['watch'], function () {
  console.log("Serve has started");
  
  browserSync({
    server: {
      baseDir: './.temp'
    }
  });
}));

// gulp.task('default', gulp.series(['build:dev']));
