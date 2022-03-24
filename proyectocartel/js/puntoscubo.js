var pcubos = function(p){

var x=0;

p.setup = function() {
  p.createCanvas(207, 138);
  p.frameRate(120);
  x=0;
}

p.draw = function() {
  p.clear(); 
  p.strokeWeight(13);
  
  
  for(var i=-400; i<600; i=i+30){
    p.circle(x+i,10, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    p.circle(x+i,37, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    p.circle(x+i,67, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    p.circle(x+i,97, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    p.circle(x+i,127, 5);
  }  
  
   for(var i=-400; i<600; i=i+30){
    p.circle(x+i,153, 5);
  }  
  
  //velocidad//
  x=x+1;
  
  //espaciado//
  if(x>30){
    x=0;
  }
  
}

}

var ps = new p5(pcubos, "circulosM");