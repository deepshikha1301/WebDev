var result = document.querySelector(".result");
function getVal(val) {
  if (val.value != "+" && val.value != "-" && val.value != "=") {
    result.value += val.value;
  }else{
      var final = 0
      var num = result.value
      switch(val.value){
          case '+':
            var final = final + parseInt(num)
            result.value = final
          break;  

      }
  }
}



