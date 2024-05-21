var i = 0;
var img = document.getElementById("img");
img.src = "imagenesCar/1.webp";
var array = ["imagenesCar/1.webp","imagenesCar/2.webp","imagenesCar/3.avif","imagenesCar/4.avif"];
function next(){
 i = (i+1)% array.length;
 img.src = array[i];
}
function back(){
  i = (i - 1 + array.length) % array.length; 
   img.src = array[i];
}