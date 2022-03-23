var x;
var tamaños;

function setup() {
  createCanvas(283, 78);
  frameRate(120);
  x=0;
  tamaños= random(50,1)
}

function draw() {
  background(225);  
  //strokeWeight(12);
  fill(0);
  
  for(var i=-400; i<600; i=i+30){
    rect(random(x+i),0, random(tamaños), 22);
  }  
  
   for(var i=-400; i<600; i=i+30){
    rect(random(x+i),28, random(tamaños), 22);
  }  
  
   for(var i=-400; i<600; i=i+30){
    rect(random(x+i),56, random(tamaños), 22);
  }  
  
  //velocidad//
  x=x+3;
  
  //espaciado//
  if(x>30){
    x=0;
  }
  
 if(tamaños>50){
   tamaños=0;
  }
}