

let resultado;

//PI
resultado = Math.PI;
console.log('Valor de PI' + resultado);

//Redondear

resultado = Math.round(2.2);
console.log('Redondear: ' + resultado);

resultado = Math.round(2.6);
console.log('Redondear: ' + resultado);

//Redondea hacia arriba

resultado = Math.ceil(2.1);
console.log('Redondear hacia arriba: ' + resultado);

//OBJETO MATH

//Redondear hacia abajo
resultado = Math.floor(2.1);
console.log('Redondear hacia abajo: ' + resultado);

//Raiz cuadrar 
resultado = Math.sqrt(144);
console.log('Raiz: ' + resultado);

//Absoluto
resultado = Math.abs(-500);
console.log('Valor absoluto: ' + resultado);

//Potencia
resultado = Math.pow(2, 4);
console.log('Potencia: '+ resultado);

//Minimo
resultado = Math.min(3, 5, 6, 8);
console.log('Valor minimo de una serie de numeros: ' + resultado);

//Maximo

resultado = Math.max(3,5,6,7);
console.log('Valor maximo de una serie de numeros' + resultado);

//Aleatorio
// resultado = Math.random();
resultado = Math.floor( Math.random() * 30);
console.log('Numero aleatorio:' + resultado);