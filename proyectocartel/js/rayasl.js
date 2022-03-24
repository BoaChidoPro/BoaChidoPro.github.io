var rayasl = function(p){

var x=0;
var tamaños;

p.setup = function() {
  p.createCanvas(633, 102);
  p.frameRate(120);
  x=0;
  p.tamaños= p.random(30,50)
}

p.draw = function() {
  p.clear();
  //strokeWeight(12);
  p.fill(0);
  
  for(var i=-400; i<600; i=i+30){
    p.rect(p.random(x+i),0, p.random(tamaños), 22);
  }  
  
   for(var i=-400; i<600; i=i+30){
    p.rect(p.random(x+i),40, p.random(tamaños), 22);
  }  
  
   for(var i=-400; i<600; i=i+30){
    p.rect(p.random(x+i),80, p.random(tamaños), 22);
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

}
var ps = new p5(rayasl, "rectangulosG");