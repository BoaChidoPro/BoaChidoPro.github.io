var cubod = function(p){

var x=0;

p.setup = function() {
  p.createCanvas(150, 162);
  p.frameRate(120);
  x=0;
}

p.draw = function() {
  p.clear();
  p.strokeWeight(13);
    
  for(var i=-400; i<600; i=i+30){
    p.line(x+i,0, (x+150)+i, 200);
  }  
  
  //velocidad//
  x=x+1;
  
  //espaciado//
  if(x>30){
    x=0;
  }
  
}

}

var ps = new p5(cubod, "cuboDiag");
