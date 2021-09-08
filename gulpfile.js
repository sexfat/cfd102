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
exports.async = series(missionA , missionB);

//先執行A任務 在同時執行 B 與 C 任務 在執行D
exports.mix = series(missionA ,  parallel(missionB , missionC) , missionD);

// 同時
exports.sync = parallel(missionA , missionB);



function movefile(){
// src 來源 -> dest 目的地
  return src('index.html').pipe(dest('dist'));
}

function movecss(){
   return src(['css/*.css' , '!css/del.css']).pipe(dest('dist/css'))
}


exports.move = parallel(movefile , movecss);


// 壓縮 js

const uglify = require('gulp-uglify');


function jsmin(){
  return src('js/*.js').pipe(uglify()).pipe(dest('dist/js'));
}

exports.js = jsmin;



