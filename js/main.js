
$(document).ready(function(){
  $("#portOverlayOne").click(function(){
    if($(this).css('opacity') == 0){
      $(this).animate({opacity:1}, 1000);
    } else {
      $(this).animate({opacity:0}, 1000);
    }
  });
});
