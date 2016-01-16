var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('htmlFiles:dev', function() {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('cssFiles:dev', function() {
  gulp.src('app/css/*.css')
  .pipe(gulp.dest('build/css/'));
});

gulp.task('jsFiles:dev', function() {
  return gulp.src('app/js/*.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/js/'));
});

gulp.task('build:dev', ['jsFiles:dev', 'htmlFiles:dev', 'cssFiles:dev']);
gulp.task('default', ['build:dev']);
