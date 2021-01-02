const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function(){
    browserSync({
        server: {
            baseDir: "../dist"
        }
    });
});

gulp.task('sass', function(){
    return gulp.src("sass/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(gulp.dest("../dist/css"))
        .pipe(browserSync.stream());
});

// 

gulp.task('swiper', function(){
    return gulp.src("css/swiper/swiper-bundle.css")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(gulp.dest("../dist/css/swiper"))
        .pipe(browserSync.stream());
});

gulp.task('html', function(){
    return gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: 1}))
        .pipe(gulp.dest('../dist'))
        .pipe(browserSync.stream());
});

gulp.task('js', function(){
    return gulp.src('js/*')
        .pipe(gulp.dest('../dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('img', function(){
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('../dist/img'));
});

gulp.task('watch', function() {
    gulp.watch("sass/*", gulp.parallel('sass'));
    gulp.watch("css/swiper/swiper-bundle.css", gulp.parallel('swiper'));
    gulp.watch('*.html', gulp.parallel('html'));
    gulp.watch('js/*', gulp.parallel('js'));
    gulp.watch('img/*', gulp.parallel('img'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'sass', 'swiper', 'html', 'js', 'img'));