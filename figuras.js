// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4 + "u";
}

function areaCuadrado(lado) {
  return lado ** 2 + "u^2";
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base + "u";
}

function areaTriangulo(base, altura) {
  return ((base * altura) / 2) + "u^2";
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro + "π" + "u";
}

// Área
function areaCirculo(radio) {
  return (radio ** 2) + "π" + "u^2";
}

console.groupEnd();


// Interacción HTML - JAVASCRIPT
// Cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo

function calcularTriangulo() {
  const laado1 = document.getElementById("InputTriangulo1");
  let valuelaado1 = InputTriangulo1.value;
  const laado2 = document.getElementById("InputTriangulo2");
  let valuelaado2 = InputTriangulo2.value;
  const baase = document.getElementById("InputTriangulobase");
  let valuebaase = InputTriangulobase.value;
  const aaltura = document.getElementById("InputTrianguloAltura");
  let valueaaltura = InputTrianguloAltura.value;
  const value1 = Number(valuelaado1);
  const value2 = Number(valuelaado2);
  const value3 = Number(valuebaase);
  const value4 =  Number(valueaaltura);

  const aarea = areaTriangulo(value3, value4)
  const  peerimetro = perimetroTriangulo(value1, value2, value3, value4);
  
  alert("El perimetro del triangulo es " + peerimetro + " y el área es " + aarea);
}
// Circulo

function elCirculo() {
  const raadio = document.getElementById("InputRadio");
  const valorr = raadio.value;

  const pererimetro = perimetroCirculo(valorr);
  const aaarea = areaCirculo(valorr);
  const diaametro = diametroCirculo(valorr)
  alert("El perimetro del círculo es " + pererimetro + " y el área es " + aaarea + ". El diametro es " + diaametro);

}