var controller = new ScrollMagic.Controller();


//動態
var mv01 =  TweenMax.to('.mv01' , 1 ,{
   x: 400,
   y: 400,
   rotation : 360
});

// 觸發事件
new ScrollMagic.Scene({
    triggerElement : '#trigger01',// 觸發點  
    // offset: '100px', // 改變觸發位置 
    triggerHook: '.5', // 0 ~ 1
    duration: '100%' // 時間軸
})
.setTween(mv01) // 動畫
.addIndicators() // 觸發指標
.addTo(controller); 

//場景三

var mv02 =  TweenMax.fromTo('.mv02' , 1 ,{
    opacity : 0,
    y: -40
},{
     opacity: 1,
     y: 0
});


var mv03 =  TweenMax.to('.mv03' , 1 ,{
    rotation : 360,
    repeat : -1
});


// 觸發事件
new ScrollMagic.Scene({
    triggerElement : '#trigger02',// 觸發點  
    // offset: '100px', // 改變觸發位置 
    triggerHook: '0', // 0 ~ 1
    //duration: '100%' // 時間軸
    reverse : true // 是否反覆執行動畫

}).setClassToggle('.flex' , 'on')
  .setTween([mv02 , mv03])//兩段動畫
  .addIndicators()
  .addTo(controller)


// 固定住場景


var sticky = new TimelineMax(); 

sticky.to('.area1' ,1 , {
   x:'100%' 
}).to('.area2' ,1 , {
  x: '100%'
}).to('.area3' ,1 , {
  x: '100%'
}).to('.area4' ,1 , {
  x: '100%'
})


// 觸發事件
new ScrollMagic.Scene({
    triggerElement : '#trigger03',// 觸發點  
    triggerHook: '0', // 0 ~ 1
    duration: '400%' // 時間軸


}).setPin('.section04')
  .setTween(sticky)
  .addIndicators()
  .addTo(controller)






