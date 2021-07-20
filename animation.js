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

TweenMax.to('.rotation1', 2, {
   // rotation: 180,
  //transformOrigin : 'right top',
    scale : 3,
    border:"10px solid rgb(0,255,0)",
    boxShadow:"0px 0px 20px 20px",
    borderRadius:"50% 50%",
    ease: Elastic.easeOut
    // ease : SlowMo.ease
});

// https://greensock.com/docs/v2/Plugins/CSSPlugin





// TweenMax.to('.scale', 4, {
//     x: 400,
//     y: 400,
//      scale : 4, 
//     //    scaleX : 4, 
//     // scaleY: 4,
//     //    ease: Elastic.easeOut 
//     ease: SlowMo.ease
// });


