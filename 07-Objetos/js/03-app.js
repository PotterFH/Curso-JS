//Agregar mas propiedades al objeto

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : '300',
    disponible : true
 }

 //agregar una propiedad
 producto.imagen = 'imagen.jpg';

 //eliminar un propiedad
 delete producto.disponible;

 console.log(producto);