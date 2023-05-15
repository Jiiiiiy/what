$(function() {

   const bcolor = ['#e44d26', '#29a7de', '#f89b28', '#111b73', '#e5910e', '#7a5da8']
   // '#0169ae',
   $('main .skill li').each(function(i){
      $(this).easyPieChart({
         lineWidth: 10,
         size: 130,
         animate: 2000,
         trackColor: 'rgba(255, 255, 255, 0.2)',
         scaleColor: '#AAA',
         barColor: bcolor[i]
      });
   }) // easyPieChart

   const menu = $('nav').offset().top; 
   $(window).scroll(function(){
      let pos = $('html').scrollTop();
      if(pos >= menu) {
         $('nav').css({
            'color' : '#fffff9'
         })
      }
      else {
         $('nav').css({
            'color' : '#333333'
         })
      }
   })
   $('nav ul li').click(function() {
      let n = $(this).index()
      $('html, body').stop().animate({
         scrollTop : $('section').eq(n).offset().top
      })
      $('nav ul li').not(this).removeClass('on')
      $(this).addClass('on')
   })//nav click event

   var timer = null;
   $(window).scroll(function() { //wrap header 스타일 변경 적용
      if(timer) {
         clearTimeout(timer);
      }
      timer + setTimeout(secnum, 500);
   });

   var secnum = function() {
      var tTop = $(this).scrollTop();
      // let n = $('section').index()
      // $('nav li').eq(n).addClass('on');

      var sec1Top = $('.home').offset().top;
      var sec1Bottom = sec1Top + $('.home').innerHeight();
      if(tTop >= sec1Top && tTop < sec1Bottom){
         $('nav li').removeClass('on');
         $('nav li:nth-child(1)').addClass('on');
      }
      var sec2Top = $('.profile').offset().top;
      var sec2Bottom = sec2Top + $('.profile').innerHeight();
      if(tTop >= sec2Top && tTop < sec2Bottom){
         $('nav li').removeClass('on');
         $('nav li:nth-child(2)').addClass('on');
      }
      var sec3Top = $('.project').offset().top;
      var sec3Bottom = sec3Top + $('.project').innerHeight();
      if(tTop >= sec3Top && tTop < sec3Bottom){
         $('nav li').removeClass('on');
         $('nav li:nth-child(3)').addClass('on');
      }
   }
/*
   $('section').each(function (i) {
      $(this).on("mousewheel DOMMouseScroll", function(evt) {
         evt.preventDefault();
         let delta = 0;
         if (!event) {event = window.event;} //한 줄일 때는 중괄호 안 쓰기도 함
         if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
         } 
         else if (event.detail) {
            delta = -event.detail / 3;
         }
         let moveTop = $(window).scrollTop();
         let elmSelecter = $('section').eq(i);
         // 마우스휠을 위에서 아래로
         if (delta < 0) {
            if ($(elmSelecter).next() != undefined) {
               try{
                  moveTop = $(elmSelecter).next().offset().top;
                  // $(elmSelecter).next().addClass('move'); //  휠 내렸을시 애니메이션 이벤트
               }catch(evt){
                  moveTop = $('footer').offset().top
               }
            }
         // 마우스휠을 아래에서 위로
         } else {
            if ($(elmSelecter).prev() != undefined) {
               try{
                  if(moveTop > $('section:last').offset().top) {
                     moveTop = $('section:last').offset().top
                  }
                  else {
                     moveTop = $(elmSelecter).prev().offset().top;
                  }
               }catch(evt){}
            }
         }
         
         // 화면 이동 0.8초(800)
         $("html,body").stop().animate({
            scrollTop: moveTop + 'px'
         }, 800);
      });
   });//한페이지씩 이동
*/
   $('.slick').slick({
      slidesToShow : 1,
      appendArrows : $('.btn_arrows'),
      prevArrow : '.prev',
      nextArrow : '.next',
      centerMode : true,
      centerPadding : 0,
      dots : false,
      fade : true,
      appendDots : $('.btn_dots'),
      asNavFor : '.nav_img',
      responsive : [
         {
            breakpoint : 1200,
            settings :  {
               centerMode : false,
               aroows : false
            }
         },
         {
            breakpoint : 900,
            settings :  {
               slidesToShow : 2
            }
         },
         {
            breakpoint : 600,
            settings :  {
               slidesToShow : 1
            }
         }
      ]
   })
   $('.nav_img').slick({
      slidesToShow : 3,
      centerMode : true,
      asNavFor : '.slick',
      focusOnSelect: true
   })

   $('.graphic ul').masonry({
   // options
   // columnWidth: 200
      // fitWidth : true,
      itemSelector: '.graphic li'
   });
   
   lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

   var imgH = $('.nav_img img').height();
   $('.nav_img .empty').css({'height' : imgH});
   $('.nav_img .empty').css({'line-height' : imgH + 'px'});

   
   $('.project .btns button.web_btn').click(function() {
      $('.project .btns button').removeClass('on')
      $(this).addClass('on')
      $('.project .web').css({'height' : 'auto'})
      $('.project .slick').css({'padding-bottom' : '80px'})
      $('.project .graphic').css({'height' : '0'})
   })
   $('.project .btns button.design_btn').click(function() {
      $('.project .btns button').removeClass('on')
      $(this).addClass('on')
      $('.project .web').css({'height' : '0'})
      $('.project .slick').css({'padding-bottom' : '0'})
      $('.project .graphic').css({'height' : 'auto'})
   })


})