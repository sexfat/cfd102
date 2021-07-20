var controller = new ScrollMagic.Controller();


//動態
var mv01 =  TweenMax.to('.mv01' , 1 ,{
   x: 400,
   y: 400,
   rotation : 360
});

// 觸發事件
new ScrollMagic.Scene({
    triggerElement : '#trigger01'// 觸發點  
})
.setTween(mv01) // 動畫
.addIndicators() // 觸發指標
.addTo(controller); 