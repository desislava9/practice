function solve() {
  const resultRef = document.getElementById("result")
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let result = "";

  switch(convention) {
case "Camel Case":
  textArr = textValue.split(" ");
  result = textArr.shift().toLoweCase();
  textArr.forEach(word => {
    result += word[0].toUpperCase() = word.substring(1).toLoweCase();
  });

  }
  resultRef.textContent = result;
}