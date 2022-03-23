var x;

function setup() {
  createCanvas(16, 80);
  frameRate(120);
  x=0;
}

function draw() {
  background(225);  
  strokeWeight(12);
  
  for(var i=-400; i<600; i=i+30){
    circle(width/2,x+i, 5);
  }  
  
  //velocidad//
  x=x+1;
  
  //espaciado//
  if(x>30){
    x=0;
  }
  
}