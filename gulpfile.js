var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');

gulp.task('js', function () {
  gulp.src('src/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('public/js'));
});

gulp.task('css', function(){
  gulp.src('app/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
  gulp.watch('app/src/**/*.coffee', ['js']);
  gulp.watch('app/styles/**/*.scss', ['css']);
});

var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence(['css', 'js', 'test'], 'watch', callback);
});

var jasmine = require('gulp-jasmine');
require('coffee-script/register');

gulp.task('test', function () {
  gulp.src('test/**/*.coffee')
    .pipe(jasmine());
});
