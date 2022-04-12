
window.addEventListener("scroll", function () {
  let fixed_top = document.querySelector('.fixed').getBoundingClientRect().top;
  let fixed_bottom = document.querySelector('.fixed').getBoundingClientRect().bottom;

  let estimate_top = document.querySelector('.estimate').getBoundingClientRect().top;
  let estimate_bottom = document.querySelector('.estimate').getBoundingClientRect().bottom;
  let window_height = this.window.pageYOffset;


  if(fixed_bottom + 100 > window.outerHeight){
    this.document.querySelector('.fixed').classList.remove('not_active');
  }else if(estimate_top + window_height <= fixed_top + window_height){
    this.document.querySelector('.fixed').classList.add('not_active');
  }

});