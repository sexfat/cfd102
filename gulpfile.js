const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


// 任務一 
function defaultask(cb) {
    console.log('gulp ok');
    cb();
}

exports.do = defaultask;



function missionA(cb) {
    console.log('missionA');
    cb();
}

function missionB(cb) {
    console.log('missionB');
    cb();
}

function missionC(cb) {
    console.log('missionC');
    cb();
}

function missionD(cb) {
    console.log('missionD');
    cb();
}

// 順序
exports.async = series(missionA, missionB);

//先執行A任務 在同時執行 B 與 C 任務 在執行D
exports.mix = series(missionA, parallel(missionB, missionC), missionD);

// 同時
exports.sync = parallel(missionA, missionB);



function movefile() {
    // src 來源 -> dest 目的地
    return src('index.html').pipe(dest('dist'));
}

function movecss() {
    return src(['css/*.css', '!css/del.css']).pipe(dest('dist/css'))
}


exports.move = parallel(movefile, movecss);


// 壓縮 js

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');


function jsmin() {
    return src('js/*.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        })).pipe(dest('dist/js'));
}


function cssrename() {
    return src('css/*.css').pipe(rename({
        extname: '.min.css'
    })).pipe(dest('dist/css'))
}


exports.cssr = cssrename;


exports.js = jsmin;



// ==== 6. css 壓縮

const cleanCSS = require('gulp-clean-css');

// function minicss(){
//    return src('css/*.css')
//    .pipe(cleanCSS({compatibility: 'ie10'}))
//    .pipe(dest('dist/css'))
// }

// exports.cssmin = minicss; 

exports.cssmin = () => src('css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie10' }))
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(dest('dist/css'))


// 合併程式碼
const concat = require('gulp-concat');

function allcss() {
    return src('css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie10' }))
        .pipe(concat('all.css'))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('dist/css/'))
}


exports.cssconcat = allcss;


// sass 
const sass = require('gulp-sass')(require('sass'));

// exports.stylesass = () => src('./sass/*.scss')
//         .pipe(sass.sync().on('error', sass.logError))
//          .pipe(cleanCSS({ compatibility: 'ie10' }))
//         .pipe(dest('./dist/css'));

function styles(){
     return src('./sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
         .pipe(cleanCSS({ compatibility: 'ie10' }))
        .pipe(dest('./dist/css'));
}


function watchtask(){
  watch('./sass/*.scss' , styles)
}

exports.watchsass = watchtask










