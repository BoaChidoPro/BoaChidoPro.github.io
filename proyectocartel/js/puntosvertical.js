var puntosv = function(p){

var x=0;

p.setup = function() {
  p.createCanvas(16, 158.5);
  p.frameRate(120);
  x=0;
}

p.draw = function() {
  p.clear(); 
  p.strokeWeight(12);
  
  for(var i=-400; i<600; i=i+30){
    p.circle(p.width/2,x+i, 5, (x+200)+i);
  }  
  
  //velocidad//
  x=x+1;
  
  //espaciado//
  if(x>30){
    x=0;
  }
  
}

}

var ps = new p5(puntosv, "puntitosv");