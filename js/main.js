$(window).scroll(function() {
  scrollHeight = $(document).height();
  scrollPosition = $(window).height() + $(window).scrollTop(); 
  footHeight = $(".small").innerHeight(); 
  if ( scrollHeight - scrollPosition  <= footHeight ) { 
    $(".fixed").css({
      "position":"absolute",
      "bottom":"0px",
      "background":"gray"
    });
    
    console.log(scrollPosition);
  } else { 
    $(".fixed").css({
        "position":"fixed", 
        "bottom": "0px",
       "background": "rgba(255, 255, 255, 0.8)"
    });
  }
}
);