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
 
  $('#display').html('<span>'+arr.join('')+'</span>');
  
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
  window.track++;
  window.display.push('='+calculate(window.fullDisplay));
  joinFullDisplay(window.display);
  clearInput();
  window.track=0;
}

function calculate(arr){
  
  if(window.track==0){
    return window.display.join('');
  }
  
  if(window.track>0){
    window.result=arr.join('')+window.display.join('');
    var numArr = window.result;
    var num = 0; 
    num += eval(numArr[0]);
    
    //Beginning of for loop
    for(var i=1; i<numArr.length;i++){ 
        switch (numArr[i]){
          case '+':
            num+=eval(numArr[i+1]);
            i++;
            break;
          case '-':
            num-=eval(numArr[i+1]);
            i++;
            break;
          case '/':
            num/=eval(numArr[i+1]);
            i++;
            break;
          case '*':
            num*=eval(numArr[i+1]);
            i++;
            break;
        }

      }
    //End of For Loop*/
    
    }
    
    return num ;
      
  
  
}