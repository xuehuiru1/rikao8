var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var mincss = require('gulp-clean-css');
var data = require('./src/data/data.json');

gulp.task('css', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('detail'))
})

gulp.task('minJS', function() {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('detail'))
})

gulp.task('minHTML', function() {
    gulp.src('src/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('detail'))
})

gulp.task('server', ['css', 'minJS', 'minHTML'], function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/api') {
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})


gulp.task('default', ['server']);