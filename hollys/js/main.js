$(function() {
  var thirdSwiper = new Swiper('.s1', {
    // Optional parameters
    speed: 1000,
    autoplay : {
        delay : 4000
    },
    loop: true,
    slidesPerView : 2,
    spaceBetween : 30,
    slidesPerGroup : 1,

    // If we need pagination
    pagination: {
      el: '.swiper1-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper1-button-next',
      prevEl: '.swiper1-button-prev',
    },
    breakpoints : { // 반응형 설정이 가능 width값으로 조정
      
      767 : {
        slidesPerView : 3,
        slidesPerGroup : 3,
      },
      1023 : {
        slidesPerView : 4,
        slidesPerGroup : 2,
      },
    },
  });
  var thirdSwiper = new Swiper('.s2', {
    // Optional parameters
    speed: 1000,
    autoplay : {
        delay : 4000
    },
    loop: true,
    slidesPerView : 2,
    spaceBetween : 30,
    slidesPerGroup : 1,

    // If we need pagination
    pagination: {
      el: '.swiper2-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
    },
    breakpoints : { // 반응형 설정이 가능 width값으로 조정
      767 : {
        slidesPerView : 3,
        slidesPerGroup : 3,
      },
      1023 : {
        slidesPerView : 4,
        slidesPerGroup : 2,
      },
    },
  });
  var thirdSwiper = new Swiper('.s3', {
    // Optional parameters
    speed: 1000,
    autoplay : {
        delay : 3000
    },
    loop: true,
    slidesPerView : 1,
    spaceBetween : 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints : { // 반응형 설정이 가능 width값으로 조정
        1600 : {
          slidesPerView : 4,
        },
        1023 : {
          slidesPerView : 3,
        },
        767 : {
          slidesPerView : 2,
        },
    },
  });

  
  let vli = $('.visual_wrap ul').children('li').length;
  for(let i=1;i<=vli;i++) {
    $('.visual_wrap .btns').append('<button><span class="blind">' + i + '번째</span></button>')

    // setInterval(function() {
    //   $('.visual_wrap .btns button').removeClass('on')
    //   $('.visual_wrap .btns button:nth-child(' + i + ')').addClass('on').end(4000)
    // },4000)
  }

  var i = $('.visual_wrap .btns button.on').index();//클릭이벤트
  $(".visual_wrap .btns button").click(function() {
    i = $(this).index();
    showSlide();
  });
  function showSlide() {
    $(".visual_wrap .btns button").removeClass("on");
    $(".visual_wrap .btns button").eq(i).addClass("on");
    $(".visual_wrap ul li").fadeOut(800);
    $(".visual_wrap ul li").eq(i).fadeIn(800);
  }


  $('.visual_wrap ul li').hide();
  $('.visual_wrap ul li:first-child').show();
  setInterval(function() { //visual_wrap : 이미지 무한 반복
    $('.visual_wrap .btns button').removeClass('on')
    $('.visual_wrap .btns button').after().addClass('on').next().end(4000)
    $('.visual_wrap ul li:first-child').fadeOut()
    .next().fadeIn().end(4000)
    .appendTo('.visual_wrap ul');
  },4000)

  $('.visual_wrap .btns button:first').addClass('on')
  var num = 2;
  var funE = function() {
    $('.visual_wrap .btns button').removeClass('on')
    $('.visual_wrap .btns button:nth-child(' + num + ')').addClass('on')
    num=num+1;
    if(num>3) {
        num=2
        $('.visual_wrap .btns button:first').addClass('on')    
    }
  }
setInterval(funE,4000);

  

  
  
  function mobileImg() {
    $('.v1 img').attr('src','img/visual_01_m.jpg')
    $('.v2 img').attr('src','img/visual_02_m.jpg')
  }
  function pcImg() {
    $('.v1 img').attr('src','img/visual_01.jpg')
    $('.v2 img').attr('src','img/visual_02.jpg')
  }

  function vir() {
    let ww = $(window).width();
    let timer = null;
    let sec = 0;
    $(window).on('resize', function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        ww = $(window).width();
        if (ww < 751) {
          mobileImg();
        } else {
          pcImg();
        }
      }, sec);
    });
  }
  vir();


   
  $('#gnb>li').removeClass('on')
  $('#gnb>li').hover(function() {
    $('.gnbbg, #gnb ul').stop().slideDown()
    $(this).children('a').addClass('on')
  },function() {
    $('.gnbbg, #gnb ul').stop().slideUp()
    $(this).children('a').removeClass('on')
  })

  const gnbH = []
  $('#gnb ul').each(function() {
    let n = $(this).height()
    gnbH.push(n)

    let h = Math.max.apply(null,gnbH);
    $('.gnbbg').css({'height' : h})
    $('#gnb ul').css({'height' : h})
  })

  $('ul.sitemap_list>li>a').click(function() {
    $(this).addClass('on');
    $('.sitemap_list>li>a').not(this).removeClass('on')

    $(this).next().slideToggle()
    $('ul.sitemap_list>li>a').not(this).next().slideUp()
  })


  // $('.sitemap_list>li>a').click(function() {
  //   $(this).addClass('on');
  //   $('.sitemap_list>li>a').not(this).removeClass('on')
  // })
  // $('.sitemap_list>li>a').click(function() {//모바일 gnb
  //   $(this).next().show();
  //   $('.sitemap_list>li>a').not(this).next().hide();
  // })
  $('.sitemap_btn').click(function() {
    $('.sitemap').show()
  })
  $('.sitemap_btn_close').click(function() {
    $('.sitemap').hide()
  })
  $('.search_box').click(function() {
    $('form').show()
  })
  $('.search_close').click(function() {
    $('form').hide()
  })
})//ready