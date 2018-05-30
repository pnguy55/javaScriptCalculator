var display=[];
var fullDisplay=[];
var result=0;
var track = 0; 
var opLock=0;


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
  window.opLock=0;
}

function two(){
  window.display.push(2);
  joinCurrentInput();
  window.opLock=0;
}

function three(){
  window.display.push(3);
  joinCurrentInput();
  window.opLock=0;
}

function four(){
  window.display.push(4);
  joinCurrentInput();
  window.opLock=0;
}

function five(){
  window.display.push(5);
  joinCurrentInput();
  window.opLock=0;
}

function six(){
  window.display.push(6);
  joinCurrentInput();
  window.opLock=0;
}

function seven(){
  window.display.push(7);
  joinCurrentInput();
  window.opLock=0;
}

function eight(){
  window.display.push(8);
  joinCurrentInput();
  window.opLock=0;
}

function nine(){
  window.display.push(9);
  joinCurrentInput();
  window.opLock=0;
}

function zero(){
  window.display.push(0);
  joinCurrentInput();
  window.opLock=0;
}

function decimal(){
  if(opLock==0){
    window.display.push('.');
    joinCurrentInput();
}
  
  window.opLock=1;  
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
  
  if(opLock==0){
    window.display.push(' + ');
    joinFullDisplay(window.display);
    nextInput();
  }
  
  window.opLock=1;
  
  
}

function minus(){
  if(opLock==0){
    window.display.push(' - ');
    joinFullDisplay(window.display);
    nextInput();
  }
  
  window.opLock=1;  
}

function divide(){
  if(opLock==0){
    window.display.push(' / ');
    joinFullDisplay(window.display);
    nextInput();
  }
  
  window.opLock=1;
}

function multiply(){
  if(opLock==0){
    window.display.push(' * ');
    joinFullDisplay(window.display);
    nextInput();
  }
  
  window.opLock=1;
}
function equals(){
  if(opLock==0){
    window.track++;
    window.display.push(' = '+calculate(window.fullDisplay));
    joinFullDisplay(window.display);
    clearInput();
    window.track=0;
  }
  
  window.opLock=1;
}

function calculate(arr){
  
  if(window.track==0){
    return window.display.join('');
  }
  
  if(window.track>0){
    window.result=arr.join('')+window.display.join('');
    var numArr = window.result.split(' ');
    
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
    
    return num;
      
  
  
}