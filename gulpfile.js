var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var mamp = require('gulp-mamp');

var options = {};

gulp.task('start', function(cb){
    mamp(options, 'start', cb);
});

gulp.task('stop', function(cb){
    mamp(options, 'stop', cb);
});

gulp.task('mamp', ['start']);


gulp.task('sass', function () {
  return sass('your-theme-path/scss/styles.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('your-theme-path/css/'));
});

gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('html-watch', browserSync.reload);

gulp.task('php-watch', browserSync.reload);




gulp.task('watch', function(){

  gulp.watch('*.html', ['html-watch']);
  gulp.watch('your-theme-path*.php', ['php-watch']);


  gulp.watch('your-theme-path/scss/**/*.scss', ['sass-watch']);


});



gulp.task('browser-sync', function() {
    browserSync.init(["your-theme-path/css/*.css", "your-theme-path/js/*.js", '*.html'], {
        proxy: 'localhost:8888/cms'
    });
});

gulp.task('default', ['mamp','watch','browser-sync'], function () {


});
