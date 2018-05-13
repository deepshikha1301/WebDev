var result = document.querySelector(".result");

function getVal(val) {
  if (val.value != "+" && val.value != "-" && val.value != "=") {
    result.value += val.value;
  }else if(val.value === '+'){
    console.log("plus")
    
  }
  else if(val.value === '-'){
    console.log("minus")
  }
  else if(val.value === '='){
    console.log("equals")
  }
}



