$(window).scroll(function () {
  estimate_bottom = $(".estimate").height() + $(".estimate").offset().top;
	scroll_bottom = $(window).scrollTop() + $(window).height();
  


  if (scroll_bottom <= estimate_bottom) {
    $(".fixed").css({
      
      position: "fixed",
      bottom: "0px",
      background: "rgba(255, 255, 255, 0.8)",

    });
  } else {
    $(".fixed").css({
      position: "absolute",
      bottom: "0px",
      background: "pink",
      
    });
  }
});
