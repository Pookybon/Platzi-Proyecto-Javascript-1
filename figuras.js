//Código del cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;
const areaCuadrado = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;

//Código del triangulo
const baseTriangulo = 5;
const lado1Triangulo = 4;
const lado2Triangulo = 8;
const perimetroTriangulo = (lado1Triangulo, lado2Triangulo, baseTriangulo) => lado1Triangulo + lado2Triangulo + baseTriangulo;
const areaTriangulo = (lado1Triangulo, lado2Triangulo, baseTriangulo) => {
    let semiPerimetro = (lado1Triangulo + lado2Triangulo + baseTriangulo)/2;
    return Math.sqrt(semiPerimetro * (semiPerimetro-lado1Triangulo) * (semiPerimetro-lado2Triangulo) * (semiPerimetro-baseTriangulo));
};
const alturaTriangulo = (lado1Triangulo, lado2Triangulo, baseTriangulo) => {
    const area = areaTriangulo(lado1Triangulo, lado2Triangulo, baseTriangulo);
    return (2 * area) / baseTriangulo;
};

//Código del Circulo
const radioCirculo = 6;
const diametroCirculo = (radioCirculo) => radioCirculo*2;
const perimetroCirculo = (radioCirculo) => radioCirculo*2*Math.PI;
const areaCirculo = (radioCirculo) => Math.PI*(radioCirculo)**2;

//Calcular datos Cuadrado
function calcularCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);
    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);
    alert(`El perimetro es ${perimetro}cm y el area ${area}cm^2`);
};

//Calcular datos Triangulo
function calcularTriangulo(){
    let input = document.getElementById("inputBaseTriangulo");
    const base = Number(input.value);
    input = document.getElementById("inputLado1Triangulo");
    const lado1 = Number(input.value);
    input = document.getElementById("inputLado2Triangulo");
    const lado2 = Number(input.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    const area = areaTriangulo(lado1, lado2, base);
    const altura = alturaTriangulo(lado1, lado2, base);
    alert(`El perimetro es ${perimetro}cm y el area ${area}cm^2 y la altura ${altura}cm`);
};

//Calcular datos Circulo
function calcularCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);
    const perimetro = perimetroCirculo(value);
    const area = areaCirculo(value);
    alert(`El perimetro es ${perimetro}cm y el area ${area}cm^2`);
};