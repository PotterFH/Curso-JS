
"use strict"; //Usar strict mode para  ingresar a diferentes metodos

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : '300',
    disponible : true
}

//EVITAR QUE UNA PROIEDAD DE UN OBJETO se agreguen o eliminen atributos
//pero si te permite modificar

Object.seal(producto);

producto.disponible = false;
// producto.imagen = 'imagen.jpg';
// delete producto.nombre;
console.log(producto);

//Saber si un pbjeto esta congelado
console.log(Object.isSealed(producto));