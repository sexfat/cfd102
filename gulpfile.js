const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


// sass

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function styles() {
    return src('dev/sass/*.scss')
        // sourcemaps 初始化
        .pipe(sourcemaps.init())
        //{outputStyle: 'compressed'} 壓縮用
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'));
}

// html template

const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('dev/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
}
// 壓縮 js

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function jsmin() {
    return src('dev/js/*.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        })).pipe(dest('dist/js'));
}

// 瀏覽器同步
const browserSync = require('browser-sync');
const reload = browserSync.reload;

function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
     watch(['./dev/sass/*.scss', './dev/sass/**/*.scss'], styles).on('change' , reload);
     watch('./dev/js/*.js', jsmin).on('change' , reload);
     watch(['dev/*.html', 'dev/**/*.html'], includeHTML).on('change' , reload);
     done();
}

exports.default = browser;










