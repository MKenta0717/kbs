// $(window).scroll(function () {
//   estimate_bottom = $(".estimate").height() + $(".estimate").offset().top;
// 	scroll_bottom = $(window).scrollTop() + $(window).height();
  


//   if (scroll_bottom <= estimate_bottom) {
//     $(".fixed").css({
      
//       position: "fixed",
//       bottom: "0px",
//       background: "rgba(255, 255, 255, 0.8)",

//     });
//   } else {
//     $(".fixed").css({
//       position: "absolute",
//       bottom: "0px",
//       background: "gray",
      
//     });
//   }
// });
const estimate = document.querySelector('.estimate');
const estimate_bottom = estimate.getBoundingClientRect().bottom;
const fixed = document.querySelector('.fixed');

window.addEventListener('scroll',function(){
  
  console.log(window.pageYOffset+window.outerHeight);
  //console.log(this.document.documentElement.scrollHeight - 28)
  if(window.pageYOffset+window.outerHeight >= document.documentElement.scrollHeight-28){
    fixed.classList.add('not_active')
   
  }else{
    fixed.classList.remove('not_active');
  }
});