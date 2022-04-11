$(window).scroll(function() {
  scrollHeight = $(document).height();
  scrollPosition = $(window).height() + $(window).scrollTop(); 
  footHeight = $(".small").innerHeight(); 
  if ( scrollHeight - scrollPosition  <= footHeight ) { 
    $(".fixed").css({
      "position":"static"
      
    });
    
    console.log(scrollPosition);
  } else { 
    $(".fixed").css({
        "position":"fixed", 
        "bottom": "0px" 
    });
  }
}
);