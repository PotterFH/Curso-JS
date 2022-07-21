//COMO ACCEDER A LOS VALORES DE UN OBJETO

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : '300',
    disponible : true
 }

 //propiedad de punto

 console.log(producto);
 console.log(producto.precio);
 console.log(producto.nombre);
 console.log(producto.disponible);

 //segunda forma menos comun
 console.log(producto['nombre']);
