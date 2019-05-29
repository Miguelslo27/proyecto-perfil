var gulp = require('gulp');

gulp.task('build', function () {
  console.log('Ejecutando la tarea build ...');

  return gulp.src('./*.html')
    .pipe(gulp.dest('./build'))
});

gulp.task('default', gulp.series(['build']));
