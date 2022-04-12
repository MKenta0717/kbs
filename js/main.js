// $(window).scroll(function() {
//   scrollHeight = $(document).height();
//   scrollPosition = $(window).height() + $(window).scrollTop();
//   footHeight = $(".small").innerHeight();
//   if ( scrollHeight - scrollPosition  <= footHeight ) {
//     $(".fixed").css({
//       "position":"absolute",
//       "bottom":"0px",
//       "background":"gray"
//     });

//     console.log(scrollPosition);
//   } else {
//     $(".fixed").css({
//         "position":"fixed",
//         "bottom": "0px",
//        "background": "rgba(255, 255, 255, 0.8)"
//     });
//   }
// }
// );

$(window).scroll(function () {
  estimate_top = $(".estimate").offset().top;
  estimate_bottom = $(".estimate").height() + estimate_top;
  fixed_top = $(".fixed").offset().top;
  scroll_top    = $(window).scrollTop();
	scroll_bottom = scroll_top + $(window).height();
  target_height = $(document).height() - $('.small').height();
  position = $(window).scrollTop()+$(window).height();
  

  console.log(target_height);
  console.log(position);
  
  

  if (position<=target_height) {
    $(".fixed").css({
      position: "fixed",
      bottom: "0px",
      background: "rgba(255, 255, 255, 0.8)",
    });
  } else if (fixed_top >= estimate_top) {
    $(".fixed").css({
      position: "absolute",
      bottom: "0px",
      background: "gray",
    });
  }
});
