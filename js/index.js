var display=[];
var result=0;


function update(){
  $('#display').html('<span>'+display+'</span>');
  
}

function one(){
  
  display.push(1);
  update();
  
}

function two(){
  
  display.push(2);
  update();
  
}