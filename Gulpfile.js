'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function() {
    // app.js is your main JS file with all your module inclusions
    return browserify({
            entries: './scripts/common.js',
            debug: true
        })
        .transform("babelify", {
            presets: ["es2015", "es2016"]
        })
        .bundle()
        .pipe(source('common.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        // .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./scripts/min'))
        .pipe(browserSync.stream());
});

// Scss stylesheets
gulp.task('stylesheets', function() {
    return gulp.src('styles/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            //includePaths: bourbon.includePaths
        })).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});




gulp.task('watch', function() {
    watch(['styles/**/*.scss'], function(event, cb) {
        gulp.start('stylesheets');
    });
    watch(['./scripts/**/*.js', '!./js/min/**/*.*'], function(event, cb) {
        gulp.start('js');
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./",
        open: true,
        port: 8081
    });

});


// Run
gulp.task('default', [
    'stylesheets',
    'serve',
    'js',
    'watch'
]);

gulp.task('wp', [
    'stylesheets',
    'watch'
]);