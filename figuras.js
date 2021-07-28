//Código del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;
const areaCuadrado = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);
console.log(`El perimetro del cuadrado mide ${perimetroCuadrado(ladoCuadrado)}cm`);
console.log(`El area del cuadrado mide ${areaCuadrado(ladoCuadrado)}cm^2`);
console.groupEnd();

//Código del triangulo
console.group("Triangulo");
const baseTriangulo = 5;
const lado1Triangulo = 4;
const lado2Triangulo = 8;
const perimetroTriangulo = (lado1Triangulo, lado2Triangulo, baseTriangulo) => lado1Triangulo + lado2Triangulo + baseTriangulo;
const areaTriangulo = (lado1Triangulo, lado2Triangulo, baseTriangulo) => {
    let semiPerimetro = (lado1Triangulo + lado2Triangulo + baseTriangulo)/2;
    return Math.sqrt(semiPerimetro * (semiPerimetro-lado1Triangulo) * (semiPerimetro-lado2Triangulo) * (semiPerimetro-baseTriangulo));
};
const alturaTriangulo = (areaTriangulo, baseTriangulo) => (2 * areaTriangulo) / baseTriangulo;
console.log(`La base del triangulo mide ${baseTriangulo}cm, los lados ${lado1Triangulo}cm, ${lado2Triangulo}cm y la altura ${alturaTriangulo(areaTriangulo(lado1Triangulo, lado2Triangulo, baseTriangulo), baseTriangulo)}cm`);
console.log(`El perimetro del triangulo es ${perimetroTriangulo(lado1Triangulo, lado2Triangulo, baseTriangulo)}cm`);
console.log(`El area del triangulo es ${areaTriangulo(lado1Triangulo, lado2Triangulo, baseTriangulo)}cm^2`);
console.groupEnd();

//Código del Circulo
console.group("Circulo");
const radioCirculo = 6;
const diametroCirculo = (radioCirculo) => radioCirculo*2;
const perimetroCirculo = (radioCirculo) => radioCirculo*2*Math.PI;
const areaCirculo = (radioCirculo) => Math.PI*(radioCirculo)**2;
console.log(`El radio del circulo es ${radioCirculo}cm y el diametro ${diametroCirculo(radioCirculo)}cm`);
console.log(`El perimetro del circulo es ${perimetroCirculo(radioCirculo)}cm`);
console.log(`El area del circulo es ${areaCirculo(radioCirculo)}cm^2`);
console.groupEnd();