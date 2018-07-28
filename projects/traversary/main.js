var images = [
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg",
  "image/5.jpg"
];
var i = 0;
var time = 2000;
function slider(){
  document.slide.src = images[i];
  if(i<images.length-1){
    i++;
  }
  else{
    i=0;
  }
  setTimeout(slider,time);
}
window.onload = slider();
