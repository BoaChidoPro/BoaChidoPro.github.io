var x;

function setup() {
  createCanvas(150, 162);
  frameRate(120);
  x=0;
}

function draw() {
  background(225);  
  strokeWeight(13);
  
  
  for(var i=-400; i<600; i=i+30){
    line(x+i,0, (x+150)+i, 200);
  }  
  
  //velocidad//
  x=x+1;
  
  //espaciado//
  if(x>30){
    x=0;
  }
  
}