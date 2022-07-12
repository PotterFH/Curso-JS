//ELIMINAR ESPACIOS EN BLANCO

const producto = '       Monitor de 20 pulgadas               ';

console.log(producto);
console.log(producto.length);

//ELIMINAR DEL INICIO
console.log(producto.trimStart());

//ELIMINAR DEL FINAL
console.log(producto.trimEnd());

//ELIMINAR AMBOS
console.log(producto.trimStart().trimEnd());
console.log(producto.trim());
