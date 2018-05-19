var result = document.querySelector(".result");
var isOperationClicked, operationClicked, num1, num2, final;
function getVal(val) 
{
  if (val.value != "+" && val.value != "-" && val.value != "=" && val.value != "x" && val.value != "/") 
  {
    if(isOperationClicked)
    {
     result.value += val.value;
     num2 = parseInt(result.value);
    }
    else
    {
      result.value += val.value;
      num1 = parseInt(result.value);
    }
  }
  else if(val.value == "+" || val.value == "-" || val.value == "x" || val.value == "/")
  {
    isOperationClicked = true;
    operationClicked = val.value;
    result.value = "";
  }
  else if(val.value == "=")
  {
    switch (operationClicked) {
      case "+":
        final = num1 + num2;
        result.value = final;
        isOperationClicked = false;
        break;
      case "-":
        final = num1 - num2;
        result.value = final;
        isOperationClicked = false;
        break;
      case "x":
        final = num1 * num2;
        result.value = final;
        isOperationClicked = false;
        break;
      case "/":
        final = num1 / num2;
        result.value = final;
        isOperationClicked = false;
        break;
      default:
        break;
    }
  }
}




