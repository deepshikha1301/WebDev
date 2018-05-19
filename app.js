var inputField = document.querySelector('.result')
var finalOutput = 0;
var operation;

var moveDigits = function(tmp){

}

function inputValue(){
  var inValue = inputField.value
  return parseInt(inValue)
}

function operations(tmp){
  var tmpNum = inputValue()
  switch(tmp){
    case '+':
      operation = tmp
      console.log(operation)
      finalOutput = finalOutput + tmpNum
      inputField.value = ' '
      break
    case '=':
      if(operation == '+')
      {
       finalOutput = finalOutput + tmpNum
       console.log(finalOutput)
       display()
      }
  }
}

function display(){
  inputField.value = finalOutput
  finalOutput = 0
}

function getVal(el){
  if(el.value==='+'||el.value==='-'||el.value==='*'||el.value==='/'||el.value==='='||el.value==='C'){
    operations(el.value)
  }else{
    inputField.value += el.value
  }
}