
//METODOS PARA OBJETOS

//Habilitar modo estricto de javascript
"use strict"; //Usar strict mode para  ingresar a diferentes metodos

//Modificar las llaves de un objeto

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : '300',
    disponible : true
}

//EVITAR QUE UNA PROIEDAD DE UN OBJETO SE PUEDA EDITAR
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);

//Saber si un pbjeto esta congelado
console.log(Object.isFrozen(producto));