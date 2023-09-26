//Sellect the elements of Dom
const boton = document.getElementById('btn');

const color = document.getElementById('color');

function generateRandomHexColor() {
  let digitos = '0123456789ABCDEF';
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    hexColor += digitos[indiceAleatorio];
    console.log(hexColor)
  }

  return hexColor;
}

boton.addEventListener("click", function () {
  let randomColor = generateRandomHexColor();

  //update texcontent 
  color.innerText = randomColor;

  //update backgrounColor
  document.body.style.backgroundColor = randomColor;
})