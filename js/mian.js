// -- Start slick--

$('.homeslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true
});

// scroll links

$("a").click(function (e) {
  let ahref = $(e.target).attr("href");
  let sectionOffset = $(ahref).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset-58}, 1500)
})



// change navbar background color

let srvsOffset = $("#about").offset().top;

$(window).scroll(function () {
  let sclTop = $(window).scrollTop();
  if (sclTop > srvsOffset-80) {
    $(".navbar").css("backgroundColor", "rgba(0, 0, 0, 0.3)");
    $(".navbar-light .navbar-nav .nav-link").css("color", "black");
  }
  else {
    $(".navbar").css("backgroundColor", "");
    $(".navbar-light .navbar-nav .nav-link").css("color", "white");

  }
});

// btn for scroll top page

$(".footer-btn,.activeColor").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
})


// wow js 

new WOW().init();



  
 



