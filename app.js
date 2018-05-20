var inputField = document.querySelector('.result')
var finalOutput = 0;
var operation;
var tmpNum1, tmpNum2;

function inputValue(){
  var inValue = inputField.value;
  return parseInt(inValue);
}

function operations(tmp){
  switch(tmp){
    case '+':
      finalOutput = tmpNum1 + tmpNum2;
      display();
      break;
    case '-':
      finalOutput = tmpNum1 - tmpNum2;
      display();
      break;
    case 'x':
      finalOutput = tmpNum1 * tmpNum2;
      display();
      break;
    case '/':
      finalOutput = tmpNum1 / tmpNum2;
      display();
      break;   
  }
}

function display(){
  inputField.value = finalOutput;
  finalOutput = 0;
}

function getVal(el){
  if(el.value==='+'||el.value==='-'||el.value==='x'||el.value==='/'){
    tmpNum1 = inputValue();
    operation = el.value;
    inputField.value = ' ';
  }
  else if(el.value==='=')
  {
    tmpNum2 = inputValue();
    operations(operation);
  }
  else{
    inputField.value += el.value;
  }
}