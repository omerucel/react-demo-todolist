var browserify = require('gulp-browserify');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

gulp.task('css', function () {
    return gulp
        .src(
            [
                'bower_components/bootstrap/dist/css/bootstrap.css',
                'bower_components/bootstrap/dist/css/bootstrap-theme.css',
                'css/app.css'
            ]
        )
        .pipe(minifyCss())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('jsx', function () {
    return gulp.src(['js/app.jsx'], {read: false})
        .pipe(browserify({
            transform: ['reactify'],
            extensions: ['.jsx']
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('dist/'));
});
