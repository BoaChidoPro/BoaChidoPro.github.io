var x;

function setup() {
  createCanvas(115, 45);
  frameRate(120);
  x=0;
}

function draw() {
  background(225);  
  strokeWeight(13);
  
  
  for(var i=-400; i<600; i=i+27){
    circle(x+i,10, 5);
  }  
  
   for(var i=-400; i<600; i=i+27){
    circle(x+i,35, 5);
  }  
  
  
  
  //velocidad//
  x=x+1;
  
  //espaciado//
  if(x>27){
    x=0;
  }
  
}