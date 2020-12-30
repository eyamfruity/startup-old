const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("sass/**/*.+(sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('swiper', function() {
    return gulp.src("css/swiper/swiper-bundle.css")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(gulp.dest("css/swiper"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("sass/**/*.+(sass)", gulp.parallel('styles'));
    gulp.watch("css/swiper/swiper-bundle.css", gulp.parallel('swiper'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));