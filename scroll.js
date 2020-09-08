var scrollAmount = 50;

// Slide Method requires an element ID to scroll and a number to determine whether to slide left or right
// 0 slides left and 1 slides right
function slide(elementID, num) {
  if (num == 0) {
    // Slide left
    sideScroll(document.getElementById(elementID), 'left', -1, 500, 1);
  } else if (num == 1) {
    // Slide right
    sideScroll(document.getElementById(elementID), 'right', -1, 500, 1);
  }
}

function sideScroll(element,direction,speed,distance,step){
  scrollAmount = 0;
  var slideTimer = setInterval(function(){
      if(direction == 'left'){
          element.scrollLeft -= step;
      } else {
          element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
          window.clearInterval(slideTimer);
      }
  }, speed);
  isScrolling = false;
}