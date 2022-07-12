
const producto = 'Monitor de 20 pulgadas';

//replace: REMPLAZAR EL TEXTO DE UN STRING
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));


//slice: Cortar parte de un cadena de texto
console.log(producto.slice(0, 10));
console.log(producto.slice(10));

//Subtring: Alternativa a slice 
console.log(producto.substring(0, 10));

const usuario = 'Ivan';
console.log(usuario.substring(0, 1));