function solve() {
  const resultRef = document.getElementById("result");
  let textValue = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  textValue = textValue.toLowerCase();
  let result = "";
  let textArr = textValue.split(" ");

  switch(convention) {
case "Camel Case":
  result = textArr.shift();
  textArr.forEach(word => {
    result += word[0].toUpperCase() = word.substring(1).toLowerCase();
  });
  break;
  case "Pascal Case" :
    textValue.forEach(word => {
      result += word[0].toUpperCase() + word.substring(1);
    });
    break;
    default : result = "Error!"

  }
  resultRef.textContent = result;
}
