//"Código" del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);
console.log(`El perimetro del cuadrado mide ${ladoCuadrado*4}cm`);
console.log(`El area del cuadrado mide ${ladoCuadrado*ladoCuadrado}cm^2`);
console.groupEnd();

//"Código" del triangulo
console.group("Triangulo");
const baseTriangulo = 5;
const ladosTriangulo = 3;
console.log(`La base del triagulo mide ${baseTriangulo}cm, los lados ${ladosTriangulo}cm y la altura ${Math.sqrt(ladosTriangulo**2-(baseTriangulo/2)**2)}cm`);
console.log(`El perimetro del triangulo es ${baseTriangulo+(ladosTriangulo*2)}cm`);
console.log(`El area del triangulo es ${(baseTriangulo*Math.sqrt(ladosTriangulo**2-(baseTriangulo/2)**2))/2}cm^2`);
console.groupEnd();

//"Código" del Circulo
console.group("Circulo");
const diametroCirculo = 5;
console.log(`El diametro del circulo es ${diametroCirculo}cm y el radio ${diametroCirculo/2}cm`);
console.log(`El perimetro del circulo es ${diametroCirculo*Math.PI}cm`);
console.log(`El area del circulo es ${Math.PI*(diametroCirculo/2)**2}cm^2`);
console.groupEnd();