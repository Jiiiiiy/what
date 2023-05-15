$(function() {
   $('#navigation li').click(function() {
      let n = $(this).index()
      $('html, body').stop().animate({
         scrollTop : $('main>div').eq(n).offset().top
      }, 600)
   })
   var vis=1;
   $('.visual_btns button.before_btn').click(function() {
      vis--;
      if(vis < 1) {
         vis=5;
      }
      $('.visual_wrap').css({'background-image' : 'url(img/vis_' + vis + '.jpg)'})
      $('.now_page').text(vis)
   })
   $('.visual_btns button.after_btn').click(function() {
      vis++;
      if(vis > 5) {
         vis=1;
      }
      $('.visual_wrap').css({'background-image' : 'url(img/vis_' + vis + '.jpg)'});
      $('.now_page').text(vis);
   })
   function visualImage() {
      if(vis < 5) {
         vis++;
         $('.visual_wrap').css({'background-image' : 'url(img/vis_' + vis + '.jpg)'});
         $('.now_page').text(vis);
      } else {
         vis=1;
         $('.visual_wrap').css({'background-image' : 'url(img/vis_' + vis + '.jpg)'});
         $('.now_page').text(vis);
      }
   }
   const pause = setInterval(visualImage, 4000);
   
   $('.visual_btns button.pause_btn').click(function() {
      $(this).css({'display' : 'none'});
      $('.visual_btns button.play_btn').css({'display' : 'inline-block'});
      clearInterval(pause);
   })
   $('.visual_btns button.play_btn').click(function() {
      $(this).css({'display' : 'none'});
      $('.visual_btns button.pause_btn').css({'display' : 'inline-block'});
      setInterval(visualImage, 4000);
   })

   
   let exhibitLi = $('.exhibit_wrap ul li').length;
   for(let i=1;i<=exhibitLi;i++) { //.exhibit_wrap li 개수만큼 button 생성
      $('.exhibit_wrap .exhibit_btns').append('<button></button>');
   }


   //전시교육 fade
   $('.exhibit_wrap ul li').hide();
   $('.exhibit_wrap ul li.on').show();

   $('.exhibit_wrap .exhibit_btns button:first').addClass('on')

   function exhibit() { //.exhibit_wrap li ul 막내자손으로 fadeOut
      var $has = $(".exhibit_wrap ul").children('li.on');
      var liLength = $(".exhibit_wrap ul li").length;

      if($has.index() + 1 <= liLength - 1) {
         $('.exhibit_wrap ul li.on').fadeOut(800).removeClass('on')
         .next().addClass('on').fadeIn(800);
         $('.exhibit_wrap .exhibit_btns button.on').removeClass('on').next().addClass('on');

      } else if($has.index() + 1 > liLength - 1) {
         $('.exhibit_wrap ul li.on').fadeOut(800).removeClass('on');
         $('.exhibit_wrap ul li:first').addClass('on').fadeIn(800);
         $('.exhibit_wrap .exhibit_btns button').removeClass('on');
         $('.exhibit_wrap .exhibit_btns button:first').addClass('on');
      };
      
   };

   $('.exhibit_wrap .exhibit_btns button').click(function() {
      var i = $(this).index();
      $('.exhibit_wrap ul li.on').fadeOut(800).removeClass('on');
      $('.exhibit_wrap ul li').eq(i).addClass('on').fadeIn(800);
      $('.exhibit_wrap .exhibit_btns button').removeClass('on');
      $(this).addClass('on');
   })
   setInterval(exhibit, 4000)

   function GnbUl() {
      var height_Array = $("#gnb .ul_2deps").map(function () {
         return $(this).height();
      }).get();

      var Mheight = Math.max.apply(Math, height_Array);
      $(".gnbbg").height(Mheight  + 90);
   }
   GnbUl();

   var headerHover = function() { //header hover할 때 스타일 변경
      $('#gnb>li').removeClass('on')
      $('#gnb>li').hover(function() {
         $('.gnbbg, #gnb ul').stop().slideDown()
         $('#wrap').toggleClass('headerbg')
         $(this).children('a').addClass('on')
         $('header #gnb>li>a, .login').css({'color' : '#000'})
         $('button.btn_search_open').css({'background' : 'url(img/sear_ico2.png) center'})
         $('.btn_allmenu').css({'background' : 'url(img/allmenu_ico2.png)'})
      },function() {
         $('.gnbbg, #gnb ul').stop().slideUp()
         $('#wrap').toggleClass('headerbg')
         $(this).children('a').removeClass('on')
         $('header #gnb>li>a, .login').css({'color' : '#FFF'})
         $('button.btn_search_open').css({'background' : 'url(img/sear_ico.png)'})
         $('.btn_allmenu').css({'background' : 'url(img/allmenu_ico.png)'})
      })
   }
   headerHover();


   function white() {
      $('header #gnb>li>a, .login').css({'color' : '#FFF'})
      $('header h1 a').css({'background-color' : 'var(--red)'})
      $('button.btn_search_open').css({'background' : 'url(img/sear_ico.png) center'})
      $('.btn_allmenu').css({'background' : 'url(img/allmenu_ico.png)'})
   }
   function black() {
      $('header #gnb>li>a, .login').css({'color' : '#000'})
      $('header h1 a').css({'background-color' : '#757575'})
      $('button.btn_search_open').css({'background' : 'url(img/sear_ico2.png) center'})
      $('.btn_allmenu').css({'background' : 'url(img/allmenu_ico2.png)'})
   }

   function fGray() {
      $('#navigation').css({'color' : '#afafaf'})
      $('#navigation').removeClass()
      $('#navigation').addClass('gray')
   }
   function fBlack() {
      $('#navigation').css({'color' : '#222'})
      $('#navigation').removeClass()
      $('#navigation').addClass('black')
   }

   var timer = null;
   $(window).scroll(function() { //wrap header 스타일 변경 적용
      if(timer) {
         clearTimeout(timer);
      }
      timer + setTimeout(myf, 300);
   });

   var myf = function() { //wrap 높이에 따른 header 스타일 변경
      timer = null;

      var tTop = $(this).scrollTop();
      var sec1Top = $('.visual_wrap').offset().top;
      var sec1Bottom = sec1Top + $('.visual_wrap').innerHeight();
      if(tTop >= sec1Top && tTop < sec1Bottom){
         white()
         fGray()
         $('#navigation li').css({'color' : '#afafaf'})
         $('#navigation li').removeClass()
         $('#navigation li').eq(0).css({'color' : '#FFF'})
         $('#navigation li').eq(0).addClass('white')
      }
      var sec2Top = $('.exhibit_wrap').offset().top;
      var sec2Bottom = sec2Top + $('.exhibit_wrap').innerHeight();
      if(tTop >= sec2Top && tTop < sec2Bottom){
         black()
         fBlack()
         $('#navigation li').css({'color' : '#222'})
         $('#navigation li').removeClass()
         $('#navigation li').eq(1).css({'color' : 'var(--red)'})
         $('#navigation li').eq(1).addClass('red')
      }
      var sec3Top = $('.hall_wrap').offset().top;
      var sec3Bottom = sec3Top + $('.hall_wrap').innerHeight();
      if(tTop >= sec3Top && tTop < sec3Bottom){
         white()
         fGray()
         $('#navigation li').css({'color' : '#afafaf'})
         $('#navigation li').removeClass()
         $('#navigation li').eq(2).css({'color' : '#FFF'})
         $('#navigation li').eq(2).addClass('white')
      }
      var sec4Top = $('.infor_wrap').offset().top;
      var sec4Bottom = sec4Top + $('.infor_wrap').innerHeight();
      if(tTop >= sec4Top && tTop < sec4Bottom){
         black()
         fBlack()
         $('#navigation li').css({'color' : '#222'})
         $('#navigation li').removeClass()
         $('#navigation li').eq(3).css({'color' : 'var(--red)'})
         $('#navigation li').eq(3).addClass('red')
      } 
   }

   //상설전시 .on
   var fun = function() {
      var $has = $(".hall_wrap ul").children('li.on');
      $('.hall_wrap ul li').removeClass('on');
      $has.next().addClass('on');
      
      var liLength = $(".hall_wrap ul li").length;
      if($has.index() + 1 > liLength - 1) {
         $('.hall_wrap ul li:first').addClass('on')
      };
   };
   setInterval(fun,4000);

   $('.hall_wrap ul li').hover(function() {
      $('.hall_wrap ul li').removeClass('on')
      $(this).addClass('on')
      clearInterval(fun)
   })


   function ExhibitUlmaxH() { //전시및교육 li최대높이 ul높이로 부여
      var ul_maxH = $(".exhibit_wrap ul li").map(function () {
            return $(this).height();
      }).get();
      
      var max_height = Math.max.apply(Math, ul_maxH);
      $(".exhibit_wrap ul").height(max_height);
   }
   ExhibitUlmaxH();

   function vir() {//window resize
      let ww = $(window).width();
      let timer = null;
      let sec = 10;
      $(window).on('resize', function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
         ww = $(window).width();
         if (ww > 1024) {
            ExhibitUlmaxH();
         } else if (ww <= 1024) {
            ExhibitUlmaxH();
         } else if (ww <= 640) {
            ExhibitUlmaxH();
         } else {
            ExhibitUlmaxH();
         }
      }, sec);
      });
   }
   vir();



   scrollEvent();
   function scrollEvent() {

      $('main>div').each(function (i) {
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
            let elmSelecter = $('main>div').eq(i);
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
                     if(moveTop > $('main>div:last').offset().top) {
                        moveTop = $('main>div:last').offset().top
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
   }
})