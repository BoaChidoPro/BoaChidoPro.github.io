var verticales = function(p){

var x = 0;

p.setup = function() {
  p.createCanvas(37, 162);
  p.frameRate(120);
  x=0;
}

p.draw = function() {
  p.clear();
  p.strokeWeight(12);
  
  for(var i=-400; i<600; i=i+30){
    p.line(0,x+i, 200, (x+200)+i);
  }  
  
  //velocidad//
  x=x+2.5;
  
  //espaciado//
  if(x>30){
    x=0;
  }
  
}

}

var ps = new p5(verticales, "diagV");