// start
TweenMax.to('.basic', 1, { x: 100, y: 100 })
TweenMax.from('.basic2', 1, { x: 100, y: 100 })
TweenMax.set('.basic3', { x: 600, y: 600 })
TweenMax.fromTo('.basic4', 1, { x: 100, y: 100 }, { x: 400, y: 500 })


// tween esae

// TweenMax.to('.ease1', 3, {
//     x: 300,
//     y: 300,
//     //ease: Elastic.easeOut 
//     ease: SlowMo.ease
// });




// TweenMax.to('.rotation', 9, {
//     x: 300,
//     y: 300,
//     //    rotation: 360,
//     //    rotationX: 180,
//     rotationY: 180,
//     ease: Elastic.easeOut
//     // ease : SlowMo.ease
// });

// TweenMax.to('.rotation1', 2, {
//    // rotation: 180,
//   //transformOrigin : 'right top',
//     scale : 3,
//     border:"10px solid rgb(0,255,0)",
//     boxShadow:"0px 0px 20px 20px",
//     borderRadius:"50% 50%",
//     ease: Elastic.easeOut
//     // ease : SlowMo.ease
// });

// https://greensock.com/docs/v2/Plugins/CSSPlugin



/// =====時間軸

// TweenMax.to('.scale', 4, {
//     x: 400,
//     y: 400,
//      scale : 4, 
//     //    scaleX : 4, 
//     // scaleY: 4,
//     //    ease: Elastic.easeOut 
//     ease: SlowMo.ease
// });


// TweenMax.to('.delay', 4, {
//     x: 400,
//     y: 400,
//     scale : 4, 
//     delay : .5,
//     repeat : 1,
//     repeatDelay : 1,
//     ease: SlowMo.ease
// });

TweenMax.to('.yoyo', 4, {
    x: 600,
    y: 600,
    repeat: 1,
    yoyo: true

    // ease: SlowMo.ease
});

// 透明度
TweenMax.to('.alpha', 4, {
    x: 600,
    y: 600,
    alpha: 0,
    repeat: 1,
    yoyo: true

    // ease: SlowMo.ease
});

// 增加 class
TweenMax.to('.add ', 1, {
    //    className : 'tween'
    className: '+=tween'
})


// ====  stagger =====
// https://greensock.com/docs/v2/TweenMax/static.staggerTo()


TweenMax.staggerFromTo('.stagger', 1, {
    x: 100
}, {
    x: 400,
    ease: SlowMo.ease
}, .6)



var btn = document.getElementById('playbtn');



var tween = new TimelineMax();

tween.staggerTo('.menu', 1, {
        x: 150
    }, .6);


tween.stop();

btn.addEventListener('click', function () {
    tween.play();
})


// 動畫控制


 const  playBtn = document.getElementById("playBtn"),
        pauseBtn = document.getElementById("pauseBtn"),
        reverseBtn = document.getElementById("reverseBtn"),
        seekBtn = document.getElementById("seekBtn"),
        timeScaleSlowBtn = document.getElementById("timeScaleSlowBtn"),
        timeScaleNormalBtn = document.getElementById("timeScaleNormalBtn"),
        timeScaleFastBtn = document.getElementById("timeScaleFastBtn"),
        restartBtn = document.getElementById("restartBtn"),




tweens = TweenMax.to('.control' ,1 , {
   x: 400,
   repeat: -1,
   yoyo: true
});





playBtn.addEventListener('click' ,function(){
   tweens.play();
})


pauseBtn.addEventListener('click' ,function(){
   tweens.pause();
})

      
















