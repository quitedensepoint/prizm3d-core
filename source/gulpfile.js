var gulp = require('gulp');
var exec = require('gulp-exec');

gulp.task('default', function() {
  return gulp.src('./')
    .pipe(exec('npm run build'));
});

gulp.task('dev', function() {
  return gulp.src('./')
    .pipe(exec('npm run dev'));
});
