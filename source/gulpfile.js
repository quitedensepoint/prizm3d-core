var gulp = require('gulp');
var exec = require('gulp-exec');

gulp.task('default', function() {
  return gulp.src('./')
    .pipe(exec('npm run build'));
});

gulp.task('dev', function() {
  return gulp.src('./')
    .pipe(exec('npm run dev'), function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
