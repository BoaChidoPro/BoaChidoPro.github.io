var puntos2filas = function(p){

var x=0;

p.setup = function() {
  p.createCanvas(115, 45);
  p.frameRate(120);
  x=0;
}

p.draw = function() {
  p.clear();  
  p.strokeWeight(13);
  
  
  for(var i=-400; i<600; i=i+27){
    p.circle(x+i,10, 5);
  }  
  
   for(var i=-400; i<600; i=i+27){
    p.circle(x+i,35, 5);
  }  
  
  
  
  //velocidad//
  x=x+1;
  
  //espaciado//
  if(x>27){
    x=0;
  }
  
}

}

var ps = new p5(puntos2filas, "puntos2hileras");