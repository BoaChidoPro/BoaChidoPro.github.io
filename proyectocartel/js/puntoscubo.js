var x;

function setup() {
  createCanvas(207, 138);
  frameRate(120);
  x=0;
}

function draw() {
  background(225);  
  strokeWeight(13);
  
  
  for(var i=-400; i<600; i=i+30){
    circle(x+i,10, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    circle(x+i,37, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    circle(x+i,67, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    circle(x+i,97, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    circle(x+i,127, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    circle(x+i,153, 5);
  }  
  
  //velocidad//
  x=x+1;
  
  //espaciado//
  if(x>30){
    x=0;
  }
  
}