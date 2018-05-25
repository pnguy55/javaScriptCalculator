var display=[];
var fullDisplay=[];
var result=0;
var track = 0;


function joinCurrentInput(){
  updateCurrentInput(window.display.join(''));
}


function updateCurrentInput(arr){
 
  $('#currentInput').html('<span>'+arr+'</span>');
  
}

function joinFullDisplay(arr){
  window.fullDisplay[window.track]=arr.join('');
  updateFullDisplay(window.fullDisplay);
}

function updateFullDisplay(arr){
 
  $('#display').html('<span>'+arr.join('')+fullDisplay.length+'</span>');
  
}

function one(){
  window.display.push(1);
  joinCurrentInput();
}

function two(){
  window.display.push(2);
  joinCurrentInput();
}

function three(){
  window.display.push(3);
  joinCurrentInput();
}

function four(){
  window.display.push(4);
  joinCurrentInput();
}

function five(){
  window.display.push(5);
  joinCurrentInput();
}

function six(){
  window.display.push(6);
  joinCurrentInput();
}

function seven(){
  window.display.push(7);
  joinCurrentInput();
}

function eight(){
  window.display.push(8);
  joinCurrentInput();
}

function nine(){
  window.display.push(9);
  joinCurrentInput();
}

function zero(){
  window.display.push(0);
  joinCurrentInput();
}

function allClear(){
  window.fullDisplay = [];
  joinFullDisplay(window.fullDisplay);
}

function clearInput(){
  
  window.display = [];
  joinCurrentInput();
  
}

function nextInput(){
  clearInput();
  track++;
}

function plus(){
  
  window.display.push('+');
  joinFullDisplay(window.display);
  nextInput();
  
  
}

function minus(){
  window.display.push('-');
  joinFullDisplay(window.display);
  nextInput();
}

function divide(){
  window.display.push('/');
  joinFullDisplay(window.display);
  nextInput();
}

function multiply(){
  window.display.push('*');
  joinFullDisplay(window.display);
  nextInput();
}
function equals(){
  window.display.push('=');
  joinFullDisplay(window.display);
  nextInput();
}

function calculate(){
  
  
  
}