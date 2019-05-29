var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('build:dev', function() {
  console.log("Build has started");
  
  return gulp
    .src('./src/*')
    .pipe(gulp.dest('./.temp'))
    .pipe(reload({ stream: true }));
});

gulp.task('watch', gulp.series(['build:dev'], function(done) {
  gulp.watch('./src/*', gulp.series(['build:dev']));
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
