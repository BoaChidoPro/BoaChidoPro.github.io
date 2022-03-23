var x;

function setup() {
  createCanvas(37, 162);
  frameRate(120);
  x=0;
}

function draw() {
  background(225);  
  strokeWeight(12);
  
  for(var i=-400; i<600; i=i+30){
    line(0,x+i, 200, (x+200)+i);
  }  
  
  //velocidad//
  x=x+2.5;
  
  //espaciado//
  if(x>30){
    x=0;
  }
  
}